Rails.application.routes.draw do

  namespace :api, defaults: {format: :json} do
    resource :session, only: [:create, :destroy]
    resources :users, only: [:index, :create, :show] do
      member do
        get 'playlists'
      end
    end

    resources :artists, only: [:index, :show]
    resources :albums, only: [:index, :show]
    resources :songs, only: [:index, :show]

    resources :playlists, only: [:index, :show, :create, :destroy]
    resources :playlist_songs, only: [:create, :destroy]
    
    post '/playlists/:id/songs', to: 'playlists#add_song'

    # collection do 
    # get :fetch_collection, to: "collection#fetch_collection", as: "fetch_collection"
    
    get '/collection/albums', to: 'albums#index'
    get '/collection/songs', to: 'songs#index'
    get '/collection/playlists', to: 'playlists#index'

    #index is necessary for search functionality
  end

  root to: 'static_pages#root'
end

