Rails.application.routes.draw do
  root 'homes#index'
  devise_for :users

  namespace :api do
    namespace :v1 do
      resources :posts, only: [:index, :show]
    end
  end

  get "/posts", to: 'homes#index'
  get "/posts/:id" to: 'homes#index'
end
