class PostSerializer < ActiveModel::Serializer
  attributes :id, :title, :description, :date, :current_user, :time

  def current_user
    scope
  end
end
