class UserSerializer < ActiveModel::Serializer
  attributes :id, :email, :profile_photo, :current_user

  def current_user
    scope
  end

  has_many :posts
end
