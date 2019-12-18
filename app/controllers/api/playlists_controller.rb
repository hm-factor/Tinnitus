class Api::PlaylistsController < ApplicationController 
  def index
    @playlists = Playlist.all
    render :index
  end 

  def create
    @playlist = Playlist.new(playlist_params)
    @playlist.author_id = current_user.id
    @playlist.privacy = false
    debugger
    if @playlist.save
      render :show
    else
      render '/'
    end
  end

  def show
    # @playlist = Playlist.find_by(id: )
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