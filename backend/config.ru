require 'time'
require 'json'
require 'sequel'

#This monkey-patch is needed for Ruby before 2.5
class Hash
  def slice(*keys)
    return self.select{|key, value| keys.include?(key) }
  end
end

DB = Sequel.connect('mysql2://digital_user:goU0oLgYwsc4JXiA@localhost/digital')
words = DB[:words]
autores = DB[:autores]
sociodemo = DB[:sociodemo]
comprension = DB[:comprension]
participants = DB[:participants]

#Backend  = "http://192.168.122.144:3000"
#Frontend = "http://192.168.122.144"
#
#FormsDesign = {"0" => {"0" => ["wrong_code"]},
#                "A" => 
#                {"1" => ["trampa", "normas", "democracia", "celulares"],
#                 "2" => ["democracia", "celulares", "trampa", "normas"]
#                },
#               "B" =>
#                {"1" => ["democracia", "celulares", "trampa", "normas"],
#                 "2" => ["trampa", "normas", "democracia", "celulares"]
#                }
#              }

#CORS = {'Access-Control-Allow-Origin': '*'}
headers = {'Content-Type' => 'text/html', 'Access-Control-Allow-Origin' => '*'}

run Proc.new { |env|
  request = Rack::Request.new env
  payload = env['rack.input'].read
  server_name = env['SERVER_NAME']
  path_info = env['PATH_INFO']
  path = path_info.gsub("/#{server_name}","")

  sid = request.params['sid'] || payload['sid']
  group_id   = request.params['group_id'] || payload['group_id']

#  if subject_id
#    reg = /([0-9]+)([AB])([12])/
#    match = reg.match(subject_id)
#    if match
#      group = match[2]
#      order = match[3]
#      forms = FormsDesign[group][order]
#    else
#      group = "0"
#      order = "0"
#    end
#  end

  if path=="/words"
    if env['REQUEST_METHOD']=="POST"
      if payload.length>0
        json_payload = JSON.parse payload
      else
        json_payload = {}
      end

      row = json_payload.slice('sid', 'gid', 'rt', 'time_elapsed', 'trial_index', 'trial_count', 'trial_type', 'word_id', 'target', 'correct_response', 'key_press', 'key_label', 'score')
      row['created_at'] = Time.now
      DB.transaction do
          words.insert(row)
      end
      msg = "ok"
      ['200', headers, [msg]]
    end
  elsif path=="/autores"
    if env['REQUEST_METHOD']=="POST"
      if payload.length>0
        json_payload = JSON.parse payload
      else
        json_payload = {}
      end

      row = json_payload.slice('sid', 'gid', 'rt', 'time_elapsed', 'trial_index', 'trial_count', 'trial_type', 'word_id', 'target', 'correct_response', 'key_press', 'key_label', 'score')
      row['created_at'] = Time.now
      DB.transaction do
        autores.insert(row)
      end
      msg = "ok"
      ['200', headers, [msg]]
    end
  elsif path=="/sociodemo"
    if env['REQUEST_METHOD']=="POST"
      if payload.length>0
        json_payload = JSON.parse payload
      else
        json_payload = {}
      end

      row = json_payload.slice('gender', 'fecha_nacimiento', 'lugar_nacimiento', 'nivel_estudios', 'cuanto_lee', 'leer_libros_ultimos_meses', 'leer_revistas_ultimos_meses', 'leer_periodicos_semana_pasada', 'leer_historietas', 'leer_blogs', 'motivo_lectura', 'tiempo_lectura', 'sid', 'gid');

      row['created_at'] = Time.now
      DB.transaction do
        sociodemo.insert(row)
      end
      msg = "ok"
      ['200', headers, [msg]]
    end
  elsif path=="/comprension"
    if env['REQUEST_METHOD']=="POST"
      if payload.length>0
        json_payload = JSON.parse payload
      else
        json_payload = {}
      end

      row = json_payload.slice('sid', 'gid', 'question', 'answer')
      row['created_at'] = Time.now
      DB.transaction do
        comprension.insert(row)
      end
      msg = "ok"
      ['200', headers, [msg]]
    end
#  elsif path=="/participant"
#    if env['REQUEST_METHOD']=="POST"
#      participant = {'subject_id': subject_id, 'created_at': Time.now}
#      DB.transaction do
#        participants.insert(participant)
#      end
#      msg = "ok"
#      location = "#{Frontend}/words?subject_id=#{subject_id}"
#      headers = {'Content-Type' => 'text/html','Location' => location, 'Access-Control-Allow-Origin' => '*'}
#      ['302', headers, [msg]]
#    elsif env['REQUEST_METHOD']=="GET"
#      msg = "get ok"
#      ['200', headers, [msg]]
#    end
#  elsif path=="/forms/start"
#    if env['REQUEST_METHOD']=="POST"
#      msg = "ok"
#      location = "#{Frontend}/forms/#{forms[0]}.html?subject_id=#{subject_id}"
#      headers = {'Content-Type' => 'text/html','Location' => location, 'Access-Control-Allow-Origin' => '*'}
#      ['302', headers, [msg]]
#    elsif env['REQUEST_METHOD']=="GET"
#      msg = "get ok"
#      ['200', headers, [msg]]
#    end
#  elsif path=="/forms/next"
#    if env['REQUEST_METHOD']=="POST"
#      current_form = request.params.delete('current_form')
#      index = forms.find_index(current_form)
#      next_form = forms[index+1]
#      puts [current_form, index, next_form]
#
#      data = request.params
#      data['created_at'] = Time.now
#      DB[current_form.to_sym].insert data
#
#      if next_form
#        location = "#{Frontend}/forms/#{next_form}.html?subject_id=#{subject_id}"
#      else
#        location = "#{Frontend}/forms/thanks.html?subject_id=#{subject_id}"
#      end
#
#      msg = "ok"
#      headers = {'Content-Type' => 'text/html','Location' => location, 'Access-Control-Allow-Origin' => '*'}
#      ['302', headers, [msg]]
#    elsif env['REQUEST_METHOD']=="GET"
#      msg = "get ok"
#      ['200', headers, [msg]]
#    end
#  elsif path=="/forms/1"
#    if env['REQUEST_METHOD']=="POST"
#      msg = "ok"
#      location = "#{Frontend}/forms/#{forms[1]}.html?subject_id=#{subject_id}"
#      headers = {'Content-Type' => 'text/html','Location' => location, 'Access-Control-Allow-Origin' => '*'}
#      ['302', headers, [msg]]
#    elsif env['REQUEST_METHOD']=="GET"
#      msg = "get ok"
#      ['200', headers, [msg]]
#    end
#  elsif path=="/forms/2"
#    if env['REQUEST_METHOD']=="POST"
#      msg = "ok"
#      location = "#{Frontend}/forms/#{forms[2]}.html?subject_id=#{subject_id}"
#      headers = {'Content-Type' => 'text/html','Location' => location, 'Access-Control-Allow-Origin' => '*'}
#      ['302', headers, [msg]]
#    elsif env['REQUEST_METHOD']=="GET"
#      msg = "get ok"
#      ['200', headers, [msg]]
#    end
#  elsif path=="/forms/3"
#    if env['REQUEST_METHOD']=="POST"
#      msg = "ok"
#      location = "#{Frontend}/forms/#{forms[3]}.html?subject_id=#{subject_id}"
#      headers = {'Content-Type' => 'text/html','Location' => location, 'Access-Control-Allow-Origin' => '*'}
#      ['302', headers, [msg]]
#    elsif env['REQUEST_METHOD']=="GET"
#      msg = "get ok"
#      ['200', headers, [msg]]
#    end
#  elsif path=="/forms/4"
#    if env['REQUEST_METHOD']=="POST"
#      msg = "ok"
#      location = "#{Frontend}/forms/thanks.html?subject_id=#{subject_id}"
#      headers = {'Content-Type' => 'text/html','Location' => location, 'Access-Control-Allow-Origin' => '*'}
#      ['302', headers, [msg]]
#    elsif env['REQUEST_METHOD']=="GET"
#      msg = "get ok"
#      ['200', headers, [msg]]
#    end
  else
    msg = "thanks"
    ['200', headers, [msg]]
  end
}
