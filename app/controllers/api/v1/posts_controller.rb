class Api::V1::PostsController < ApplicationController
  protect_from_forgery unless: -> { request.format.json? }

  def index
    render json: Post.all
  end

  def show
    render json: Post.find(params[:id])
  end

  def create
    new_post = Post.new(post_params)

    if new_post.save
      render json: new_post
    else
      errors_array = new_post.errors.full_messages
      formatted_errors = errors_array.each { |error|
        if error.include?("datetime")
          error.sub!("datetime", "date and time")
        end
      }
      render json: { errors: formatted_errors.to_sentence }, status: :unprocessable_entity
    end
  end
end
