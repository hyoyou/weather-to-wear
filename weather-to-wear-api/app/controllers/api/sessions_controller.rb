require 'Auth'

class Api::SessionsController < ApplicationController

  def login
    # params.inspect
    user = User.find_by(email: params[:email])
    if user && user.authenticate(params[:password])
      token = Auth.create_token({ user: { id: user.id, email: user.email} })
      current_user = Auth.decode_token(token)
      render json: { user: user, token: token }
    else
      render json: { errors: { message: "Unable to find a user with those credentials" } }, status: 401
    end
  end

end
