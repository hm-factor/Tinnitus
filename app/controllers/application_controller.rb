class ApplicationController < ActionController::Base

  def current_user

  end

  def ensure_session_token

  end

  def login

  end

  def logout
    @current_user.reset_session_token!
  end

  def logged_in?
    !!current_user
  end

end
