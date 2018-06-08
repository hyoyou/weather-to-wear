Rails.application.routes.draw do
  namespace :api do
    resources :users, only: [:index, :edit, :update, :show]

    post '/signup' => 'users#create'
    post '/settings' => 'users#update'
    post '/login' => 'sessions#login'
    post '/find' => 'sessions#find'
    get '/logout' => 'sessions#destroy'

    resources :user_cities, only: [:destroy]
    resources :cities, only: [:index, :create, :show]
  end
end
