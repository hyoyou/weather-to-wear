require 'Auth'

class Api::SessionsController < ApplicationController

  def login
    # params.inspect
    user = User.find_by(email: params[:email])
    if user && user.authenticate(params[:password])
      render json: { token: Auth.create_token({ user: { id: user.id, email: user.email} }) }
    else
      render json: { errors: { message: "Unable to find a user with those credentials" } }, status: 401
    end
  end

end
