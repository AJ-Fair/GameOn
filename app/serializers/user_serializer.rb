class UserSerializer < ActiveModel::Serializer
  attributes :id, :email, :profile_photo, :username

  has_many :posts
end
