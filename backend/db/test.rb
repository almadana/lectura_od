require '../config/connection'

words = DB[:words]
p words.all

comprension = DB[:comprension]
p comprension.all
