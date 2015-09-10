class CreateArticles < ActiveRecord::Migration
  def change
    create_table :articles do |t|
      t.text :name
      t.text :description
      t.text :publisher

      t.timestamps
    end
  end
end
