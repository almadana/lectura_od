require 'sequel'

DB = Sequel.connect('mysql2://digital_user:goU0oLgYwsc4JXiA@localhost/digital')

DB.create_table :words do
  primary_key :id
  String   :subject_id, null: false
  Integer  :rt
  Integer  :time_elapsed
  Integer  :trial_index
  String   :target
  String   :correct_response
  String   :key_press
  String   :key_label
  Integer  :score
  DateTime :created_at, null: false
  DateTime :modified_at
end
