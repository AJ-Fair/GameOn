Rails.application.routes.draw do
  root 'homes#index'

  devise_for :users

  namespace :api do
    namespace :v1 do
      resources :posts, only: [:index, :show, :create] do
        resources :comments, only: [:index, :create]
      end
      resources :users, only: [:show, :edit, :update]
      resources :comments, only: [:edit, :update, :destroy]
    end
  end

  get '/posts', to: 'homes#index'
  get '/posts/new', to: 'homes#index'
  get '/posts/:id', to: 'homes#index'
  get '/users/:id', to: 'homes#index'
  get '/posts/:id/comments', to: 'homes#index'
  get '/comments/:id/edit', to: 'homes#index'
  get '/users/search', to: 'homes#index'
end
