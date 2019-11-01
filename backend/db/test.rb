require 'sequel'

DB = Sequel.connect('mysql2://digital_user:goU0oLgYwsc4JXiA@localhost/digital')

raven = DB[:raven]
p raven.all

lextale = DB[:lextale]
p lextale.all

prueba = DB[:prueba]
p prueba.all
