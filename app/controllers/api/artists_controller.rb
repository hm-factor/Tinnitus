class Api::ArtistsController < ApplicationController 
  def index
    @artists = Artist.all
    render :index
  end

  def show
    @artist = Artist.find(params[:id])

    # @artist = Artist.where('name LIKE ?', params[:search]')
    # need searchable to make this work though
    
    render :show
  end
end