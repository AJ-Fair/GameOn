Rails.application.routes.draw do
  root 'homes#index'
  devise_for :users

  get "/index", to: 'homes#index'
end
