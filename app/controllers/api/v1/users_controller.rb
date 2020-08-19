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

  protected

  def serialized_data(data, serializer)
    ActiveModelSerializers::SerializableResource.new(data, each_serializer: serializer)
  end
end
