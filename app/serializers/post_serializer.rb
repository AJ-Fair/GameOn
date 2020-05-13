class PostSerializer < ActiveModel::Serializer
  attributes :id, :title, :description, :datetime, :current_user, :game, :comments

  def current_user
    scope
  end

  has_many :comments
end
