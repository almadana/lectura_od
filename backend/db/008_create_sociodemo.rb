require 'sequel'

DB = Sequel.connect('mysql2://digital_user:goU0oLgYwsc4JXiA@localhost/digital')

begin
  DB.drop_table :sociodemo
rescue
  puts "table didn't exist"
end

DB.create_table :sociodemo do
  primary_key :id
  String :sid, null: false
  String :gid, default: ""
  String :gender
  String :fecha_nacimiento
  String :lugar_nacimiento
  String :nivel_estudios
  String :cuanto_lee
  String :leer_libros_ultimos_meses
  String :leer_revistas_ultimos_meses
  String :leer_periodicos_semana_pasada
  String :leer_historietas
  String :leer_blogs
  String :motivo_lectura
  String :tiempo_lectura
  DateTime :created_at
  DateTime :modified_at
end
