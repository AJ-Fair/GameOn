class CreatePostRoster < ActiveRecord::Migration[5.2]
  def change
    create_table :post_rosters do |t|
      t.belongs_to :post, null: false
      t.timestamps null: false
    end
  end
end
