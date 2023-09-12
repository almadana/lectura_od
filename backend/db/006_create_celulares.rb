require '../config/connection'

DB.create_table :celulares do
  primary_key :id
  String   :subject_id, null: false
  String   :puntos_clave
  String   :peligrosidad
  String   :otros_factores
  String   :idea_base
  DateTime :created_at, null: false
  DateTime :modified_at
end
