class AddProfilePhotoDefault < ActiveRecord::Migration[5.2]
  def up
    change_column :users, :profile_photo, :string, default: 'https://i.kym-cdn.com/entries/icons/original/000/011/743/metal-gear-alert.jpg'
  end
  def down
    change_column :users, :profile_photo, :string
  end
end
