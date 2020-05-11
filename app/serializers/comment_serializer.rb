class CommentSerializer < ActiveModel::Serializer
  attributes :id, :ign, :body, :user_id, :post_id, :updated_at

  belongs_to :post
  belongs_to :user
end
