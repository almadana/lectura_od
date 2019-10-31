require 'json'
#require 'sequel'

#DB = Sequel.connect('postgres://tango:MdotndP8q24ozoz4B0Qm@localhost/tango')
#
#daytimes = DB[:daytimes_preferences]
#contacts = DB[:contacts]

run Proc.new { |env|
  request = Rack::Request.new env
#  query = JSON.parse(request.params['q'])
  payload = env['rack.input'].read
  path = env['PATH_INFO'].split('/')

  if payload.length>0
    json_payload = JSON.parse payload
  else
    json_payload = {}
  end

  if env['REQUEST_METHOD']=="POST"
    sid = request.params['sid']

#    DB.transaction do
#        daytimes.insert(item)
#    end
    msg = "ok"
    headers = {'Location' => 'http://digital.psico.edu.uy/raven'}
    ['200', headers, [msg]]
  elsif env['REQUEST_METHOD']=="GET"
    msg = "thanks"
    headers = {'Content-Type' => 'text/html'}
    ['200', headers, [msg]]
  end
}
