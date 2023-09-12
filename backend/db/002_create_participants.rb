require '../config/connection'

DB.create_table :participants do
  primary_key :id
  String   :subject_id, null: false
  DateTime :created_at, null: false
  DateTime :modified_at
end
