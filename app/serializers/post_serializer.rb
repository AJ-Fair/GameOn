class PostSerializer < ActiveModel::Serializer
  attributes :id, :title, :description, :datetime, :game, :comments

  has_many :comments
end
