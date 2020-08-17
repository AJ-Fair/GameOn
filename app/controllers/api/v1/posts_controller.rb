class Api::V1::PostsController < ApplicationController
  protect_from_forgery unless: -> { request.format.json? }

  def index
    render json: Post.all
  end

  def create
    new_post = Post.new(post_params)
    new_post.user = current_user
    if new_post.save
      render json: new_post
    else
      errors_array = new_post.errors.full_messages
      render json: { errors: errors_array.to_sentence }, status: :unprocessable_entity
    end
  end

  def show
    render json {
        target: serialized_data(Post.find(params[:id]), PostSerializer),
        current: serialized_data(current_user, PostSerializer)
      }
  end

  private

  def post_params
    params.require(:post).permit(:title, :game, :description, :datetime)
  end

  protected

  def serialized_data(data, serializer)
    ActiveModelSerializers::SerializableResource.new(data, each_serializer: serializer)
  end
end
