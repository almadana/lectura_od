require 'sequel'

DB = Sequel.connect('mysql2://digital_user:goU0oLgYwsc4JXiA@localhost/digital')

begin
  DB.drop_table :comprension
rescue
  puts "table didn't exist"
end

DB.create_table :comprension do
  primary_key :id
  String :sid, null: false
  String :gid, default: ""
  String :question
  String :answer
  DateTime :created_at
  DateTime :modified_at
end
