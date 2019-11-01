require 'sequel'

DB = Sequel.connect('mysql2://digital_user:goU0oLgYwsc4JXiA@localhost/digital')

DB.create_table :democracia do
  primary_key :id
  String   :subject_id, null: false
  String   :objetivos_discurso
  String   :exilio_tucilides
  String   :discurso_b
  String   :diferencia_tucilides
  String   :mejor_resumen
  DateTime :created_at, null: false
  DateTime :modified_at
end
