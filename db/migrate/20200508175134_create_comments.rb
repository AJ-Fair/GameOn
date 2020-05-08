class CreateComments < ActiveRecord::Migration[5.2]
  def change
    create_table :comments do |t|
      t.belongs_to :user, null: false
      t.belongs_to :post, null: false
      t.text :body
      t.timestamps null: false
      t.string :ign, null: false
    end
  end
end
