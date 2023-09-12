require '../config/connection'

begin
  DB.drop_table :autores
rescue
  puts "table didn't exist"
end

DB.create_table :autores do
  primary_key :id
  String   :sid, null: false
  String   :gid, default: ""
  Integer  :rt
  Integer  :time_elapsed
  Integer  :trial_index
  Integer  :trial_count
  String   :trial_type
  Integer  :word_id
  String   :target
  String   :es_autor
  String   :key_press
  String   :key_label
  Integer  :score
  DateTime :created_at
  DateTime :modified_at
end
