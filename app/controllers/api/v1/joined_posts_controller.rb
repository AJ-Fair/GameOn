class Api::V1::JoinedPostsController < ApplicationController
  protect_from_forgery unless: -> { request.format.json? }

  def create
    newJoinedPost = JoinedPost.new(post_id: params["post_id"])
    newJoinedPost.user = current_user
    if newJoinedPost.save
      flash.now[:notice] = "Post joined!"
    else
      flash.now[:notice] = newJoinedPost.errors.full_messages
    end
  end
end
