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
  String :pa1
  String :pa2
  String :pa3
  String :pa4
  String :pa5
  String :pa6
  String :pa7
  String :pa8
  String :pb1
  String :pb2
  String :pb3
  String :pb4
  String :pb5
  String :pb6
  String :pb7
  DateTime :created_at
  DateTime :modified_at
end
