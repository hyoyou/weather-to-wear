require 'Auth'

class Api::SessionsController < ApplicationController

  def login
    # raise params.inspect
    user = User.find_by(email: params[:email])
    if user && user.authenticate(params[:password])
      token = Auth.create_token({ id: user.id, name: user.name, coldSensitivity: user.cold_sensitivity, optsHandsFree: user.opts_hands_free, cities: user.cities })
      # current_user = Auth.decode_token(token)
      render json: { user: user, token: token }
    else
      render json: { errors: { message: "Unable to find a user with those credentials" } }, status: 401
    end
  end

  def find
    # raise params.inspect
    current_user = Auth.decode_token(params[:token])
    if current_user
      render json: { user: current_user }
    else
      render json: { errors: { message: "Unable to find user" } }, status: 401
    end
  end

end
