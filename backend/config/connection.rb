require 'sequel'
require_relative './environment'

if ENVIRONMENT=='development'
  DB = Sequel.connect('mysql2://digital_user:goU0oLgYwsc4JXiA@localhost/lectura3')
elsif ENVIRONMENT=='production'
  DB = Sequel.connect('mysql2://digital_user:goU0oLgYwsc4JXiA@localhost/lectura3')
end
