require 'json'
require 'sequel'
DB = Sequel.connect('postgres://tango:MdotndP8q24ozoz4B0Qm@localhost/tango')

#DB.create_table :daytimes_preferences do
#  primary_key :id
#  String   :code, null: false
#  String   :uuid, null: false
#  Integer  :day, null: false
#  Integer  :time, null: false
#  Integer  :rank, null: false
#  DateTime :created_at, null: false
#  DateTime :modified_at
#end

#DB.create_table :contacts do
#  primary_key :id
#  String   :uuid, null: false
#  String   :name
#  String   :email
#  DateTime :created_at, null: false
#  DateTime :modified_at
#end
