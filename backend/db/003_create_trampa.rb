require 'sequel'

DB = Sequel.connect('mysql2://digital_user:goU0oLgYwsc4JXiA@localhost/digital')

DB.create_table :trampa do
  primary_key :id
  String   :subject_id, null: false
  String   :antes_telon
  String   :cuarto_hora
  String   :hace_molnar
  DateTime :created_at, null: false
  DateTime :modified_at
end
