json.array!(@articles) do |article|
  json.extract! article, :id, :name, :description, :publisher
  json.url article_url(article, format: :json)
end
