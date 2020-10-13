class Api::V1::UsersController < ApplicationController
  protect_from_forgery unless: -> { request.format.json? }

  def index
    render json: {
      target: serialized_data(User.all, UserSerializer),
      current: serialized_data(current_user, UserSerializer),
    }
  end

  def show
    render json: {
      target: serialized_data(User.find(params[:id]), UserSerializer),
      current: serialized_data(current_user, UserSerializer),
    }
  end

  def edit
    render json: User.find(params[:id])
  end

  def update
    user = User.find(params[:id])
    profile_user == user.id
    if profile_user === current_user.id
      if user.update
        render json: user
      else
        render json: { errors: user.errors.full_messages.to_sentence }, status: :unprocessable_entity
      end
    else
      render json: { error: "You are not authorized to edit this profile!" }
    end
  end

  protected
  def user_params
    params.require(:user).permit(:username, :email, :profile_photo)
  end

  def serialized_data(data, serializer)
    ActiveModelSerializers::SerializableResource.new(data, each_serializer: serializer)
  end
end
