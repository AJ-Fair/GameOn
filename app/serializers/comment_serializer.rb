class CommentSerializer < ActiveModel::Serializer
  attributes :id, :ign, :body, :user_id, :post_id, :updated_at, :user

  belongs_to :post
  belongs_to :user
end
