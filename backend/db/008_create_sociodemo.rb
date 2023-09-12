require '../config/connection'

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
  String :motivo_lectura
  DateTime :created_at
  DateTime :modified_at
end
