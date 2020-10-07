class Api::V1::CommentsController < ApplicationController
  protect_from_forgery unless: -> { request.format.json? }

  def index
    render json: Comment.where(post_id: params[:post_id]).to_a
  end

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

  def update
    comment = Comment.find(params[:id])
    author_id = comment.user_id
    if author_id === current_user.id
      comment.update(comment_params)
    else
      render json: { errors: updated_comment.errors.full_messages.to_sentence }, status: :unprocessable_entity
    end
  end

  def destroy
    comment = Comment.find(params[:id])
    post = comment.post_id
    author_id = comment.user_id

    if author_id === current_user.id
      comment.delete
      render json: post
    else
      render json: {error: "You are not authorized to delete this comment!"}
    end
  end

  private

  def comment_params
    params.require(:comment).permit(:ign, :body)
  end

  def serialized_data(data, serializer)
    ActiveModelSerializers::SerializableResource.new(data, each_serializer: serializer)
  end
end
