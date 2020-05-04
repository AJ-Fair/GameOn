Rails.application.routes.draw do
  root 'homes#index'
  devise_for :users

  namespace :api do
    namespace :v1 do
      resources :posts, only: [:index]
  end

  get "/index", to: 'homes#index'
end
