Rails.application.routes.draw do
  namespace :api do
    resources :users, only: [:edit, :update, :show]

    get '/signup' => 'users#new'
    post '/signup' => 'users#create'
    get '/login' => 'sessions#new'
    post '/login' => 'sessions#create'
    get '/logout' => 'sessions#destroy'
  end
end
