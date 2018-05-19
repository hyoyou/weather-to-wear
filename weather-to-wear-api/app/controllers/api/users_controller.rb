class Api::UsersController < ApplicationController

  before_action :set_user, only: [:show, :edit, :update]

  def index
    render json: User.all
  end

  def signup
    user = User.new(user_params)
    if user.save
      render json: { token: Auth.create_token(user) }
    else
      render json: { message: user.errors }, status: 401
    end
  end

  def show
    render json: @user
  end

  def edit
  end

  def update
    if @user.update(user_params)
      render json: @user
    else
      render json: { message: user.errors }, status: 401
    end
  end

  private
    def user_params
      params.require(:user).permit(:name, :email, :password, :cold_sensitivity, :opts_hands_free, city_ids: [])
    end

    def set_user
      @user = User.find_by(id: params[:id])
    end

end