require 'time'
require 'json'
require 'sequel'

DB = Sequel.connect('mysql2://digital_user:goU0oLgYwsc4JXiA@localhost/digital')
words = DB[:words]
participants = DB[:participants]

Backend  = "http://192.168.122.144:3000"
Frontend = "http://192.168.122.144"

CORS = {'Access-Control-Allow-Origin': '*'}

run Proc.new { |env|
  puts "connected"
  request = Rack::Request.new env
#  query = JSON.parse(request.params['q'])
  payload = env['rack.input'].read
  path = env['PATH_INFO'].split('/')
  #path starts with "/", so path[0]==""
  #so we use path[1] for the first item in the path
  target = path[1]

  headers = {'Content-Type' => 'text/html', 'Access-Control-Allow-Origin' => '*'}

  if target=="words"
    if env['REQUEST_METHOD']=="POST"
      if payload.length>0
        json_payload = JSON.parse payload
      else
        json_payload = {}
      end

      word = json_payload.slice('subject_id', 'rt', 'time_elapsed', 'trial_index', 'target', 'correct_response', 'key_press', 'key_label', 'score')
      word['created_at'] = Time.now
      DB.transaction do
          words.insert(word)
      end
      msg = "ok"
#      headers = {'Location' => 'http://digital.psico.edu.uy/raven', 'Access-Control-Allow-Origin': '*'}
      ['200', headers, [msg]]
    elsif env['REQUEST_METHOD']=="GET"
      msg = "thanks"
      ['200', headers, [msg]]
    end
  elsif target=="participant"
    if env['REQUEST_METHOD']=="POST"
      participant = request.params.slice('subject_id')
      participant['created_at'] = Time.now
      DB.transaction do
        participants.insert(participant)
      end
      msg = "ok"
      location = "#{Frontend}/words?subject_id=#{participant['subject_id']}"
      headers = {'Content-Type' => 'text/html','Location' => location, 'Access-Control-Allow-Origin' => '*'}
      ['302', headers, [msg]]
    elsif env['REQUEST_METHOD']=="GET"
      msg = "get ok"
      ['200', headers, [msg]]
    end
  else
    msg = "thanks"
    headers = {'Content-Type' => 'text/html', 'Access-Control-Allow-Origin' => '*'}
    ['200', headers, [msg]]
  end
}
