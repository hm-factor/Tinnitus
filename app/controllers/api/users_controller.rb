class Api::UsersController < ApplicationController
  before_action :ensure_logged_in

  def index 
    @users = User.all
    render :index
  end

  def show
    @user = User.find(params[:id])
    render :show
  end

  def playlists
    @user = current_user
    @playlists = @user.playlists
    render '/api/playlists/index'
  end

  def create
    @user = User.new(user_params)
    if @user.save 
      login(@user)
      render :show
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  private
  def user_params
    params.require(:user).permit(:username, :email, :password, :birth_date, :gender)
  end
end
