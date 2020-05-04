class Api::V1::PostsController < ApplicationController
  protect_from_forgery unless: -> { request.format.json? }

  def index
    render json: Post.all
  end

  def show
    render json: Post.find(params[:id])
  end
end
