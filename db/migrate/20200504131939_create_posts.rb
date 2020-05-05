class CreatePosts < ActiveRecord::Migration[5.2]
  def change
    create_table :posts do |t|
      t.belongs_to :user, null: false
      t.string :title, null: false
      t.string :game, null: false
      t.string :description, null: false
      t.date :date, null: false
      t.time :time, null: false
      t.timestamps null: false
    end
  end
end
