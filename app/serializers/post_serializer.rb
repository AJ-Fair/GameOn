class PostSerializer < ActiveModel::Serializer
  attributes :id, :title, :description, :datetime, :current_user,

  def current_user
    scope
  end
end
