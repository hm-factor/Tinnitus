class Api::SongsController < ApplicationController 
  def index
    @songs = Song.all
    render :index
  end 

end 