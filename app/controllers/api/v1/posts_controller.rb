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
    found_post = Post.find(params[:id])
    found_post.user = current_user
    render json: found_post
  end

  private
  def post_params
    params.require(:post).permit(:title, :game, :description, :datetime)
  end
end
