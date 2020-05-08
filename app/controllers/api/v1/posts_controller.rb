class Api::V1::PostsController < ApplicationController
  protect_from_forgery unless: -> { request.format.json? }

  def index
    render json: Post.all
  end

  def create
    new_post = Post.new(post_params)

    if new_post.save
      render json: new_post
    else
      errors_array = new_post.errors.full_messages
      render json: { errors: errors_array.to_sentence }, status: :unprocessable_entity
    end
  end

  def show
    render json: Post.find(params[:id])
  end

  private
  def post_params
    params.require(:post).permit(:title, :game, :description, :datetime)
  end
end
