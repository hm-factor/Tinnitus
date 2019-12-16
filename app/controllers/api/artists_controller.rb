class Api::ArtistsController < ApplicationController 
  def index
    @artists = Artist.all
    render :index
  end

  def show
    @artist = Artist.find(name: name)
    # how do I search for names

    # @artist = Artist.where('name LIKE ?', params[:search]')
    # need searchable to make this work though
    
    render :show
    # render '/api/artist/:artistId'
  end
end