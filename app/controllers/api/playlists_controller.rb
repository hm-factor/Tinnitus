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

  def add_song

    @playlist = current_user.playlists.find(params[:id])
    song = Song.find(params[:songId])

    if @playlist
      @playlist.add_song(song)
      render :show
    else
      render json: ["An error occurred"], status: 422
    end
  end

  def show
    @playlist = Playlist.find(params[:id])
    render :show
  end

  def destroy
    @playlist = Playlist.find(params[:id])
    @playlist.destroy
    render json: @playlist.id
  end

  private
  def playlist_params
    params.require(:playlist).permit(:title)
  end
end