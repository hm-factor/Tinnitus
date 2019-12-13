Rails.application.routes.draw do

  namespace :api, defaults: {format: :json} do
    resource :session, only: [:create, :destroy]

    resources :users, only: [:create, :show] 
    resources :artists, only: [:show]
    resources :albums, only: [:show]
    resources :songs, only: [:show]
    resources :playlists, only: [:show, :create, :destroy]

  end

  root to: 'static_pages#root'
end
