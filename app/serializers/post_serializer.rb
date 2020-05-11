class PostSerializer < ActiveModel::Serializer
  attributes :id, :title, :description, :datetime, :current_user,

  def current_user
    scope
  end

  has_many :comments
  has_many :joined_posts
  has_many :users, through: :joined_posts
end
