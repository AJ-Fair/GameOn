class Api::V1::PostsController < ApplicationController
  protect_from_forgery unless: -> { request.format.json? }

end
