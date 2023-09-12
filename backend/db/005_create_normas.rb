require '../config/connection'

DB.create_table :normas do
  primary_key :id
  String   :subject_id, null: false
  String   :decision_australianos
  String   :ejemplos_nuevas_normas
  DateTime :created_at, null: false
  DateTime :modified_at
end
