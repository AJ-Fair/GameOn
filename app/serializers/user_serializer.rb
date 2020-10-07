class UserSerializer < ActiveModel::Serializer
  attributes :id, :email, :profile_photo, :username, :posts

  has_many :posts
end
