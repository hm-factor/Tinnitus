Rails.application.routes.draw do

  namespace :api, defaults: {format: :json} do
    resource :session, only: [:create, :destroy]

    resources :users, only: [:index, :create, :show] 
    resources :artists, only: [:index, :show]
    resources :albums, only: [:index, :show]
    resources :songs, only: [:index, :show]
    resources :playlists, only: [:index, :show, :create, :destroy]
    
    #index is necessary for search functionality

  end

  root to: 'static_pages#root'
end

