class CreateJoinedPosts < ActiveRecord::Migration[5.2]
  def change
    create_table :joined_posts do |t|
      t.belongs_to :user, null: false
      t.belongs_to :post, null: false
      t.timestamps null: false
    end
  end
end
