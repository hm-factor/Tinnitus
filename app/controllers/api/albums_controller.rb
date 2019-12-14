class Api::AlbumsController < ApplicationController 
  def index
    @albums = Album.all
    render :index
  end

  def show
    @album = #searchable
    render :show
  end
end