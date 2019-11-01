require 'sequel'

DB = Sequel.connect('mysql2://digital_user:goU0oLgYwsc4JXiA@localhost/digital')

DB.create_table :participants do
  primary_key :id
  String   :subject_id, null: false
  DateTime :created_at, null: false
  DateTime :modified_at
end
