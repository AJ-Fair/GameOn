class Api::V1::ReviewsController < ApplicationController
  protect_from_forgery unless: -> { request.format.json? }

  def create
    new_comment = Comment.new(comment_params)
    new_comment.user = current_user
    new_comment.post_id = params[:post_id]

    if new_comment.save
      render json: new_comment
    else
      render json: { errors: new_comment.errors.full_messages.to_sentence }, status: :unprocessable_entity
    end
  end

  def edit
    render json: Comment.find(params[:id])
  end

  def destroy
    deleted_comment = Comment.find(params[:id]).delete
    render json: deleted_comment
  end

  private

  def review_params
    params.require(:comment).permit(:ign, :body)
  end
end
