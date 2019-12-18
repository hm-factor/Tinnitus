class Api::PlaylistsController < ApplicationController 
  def index
    @playlists = Playlist.all
    render :index
  end 

  def create
    @playlist = current_user.playlists.new(playlist_params)
    @playlist.privacy = false

    if @playlist.save
      render :show
    else
      render '/'
    end
  end

  def show
    @playlist = Playlist.find(params[:id])
    render :show
  end

  def destroy
    # @playlist = Playlist.
    @playlist.destroy
    render '/'
  end

  private
  def playlist_params
    params.require(:playlist).permit(:title)
  end
end