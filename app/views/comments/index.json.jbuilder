json.array!(@comments) do |comment|
  json.extract! comment, :id, :desc
  json.url comment_url(comment, format: :json)
end
