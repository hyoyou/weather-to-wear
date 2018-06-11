class Api::UsersController < ApplicationController
  before_action :set_user, only: [:show, :edit, :update]

  def index
    render json: User.all
  end

  def create
    user = User.new(user_params)
    if user.save
      render json: { token: Auth.create_token(user) }
    else
      render json: { errors: { message: user.errors } }, status: 401
    end
  end

  def show
    render json: @user
  end

  def edit
    @user.user_cities.build.build_city
  end

  def update
    if @user.update(user_params)
      render json: @user
    else
      render json: { errors: { message: @user.errors } }, status: 401
    end
  end

  private
    def user_params
      params.require(:user).permit(:id, :name, :email, :password, :cold_sensitivity, :opts_hands_free, city_ids: [],
                                   user_cities_attributes: [:id, city_attributes: [:id, :zip_code]])
    end

    def set_user
      @user = User.find_by(id: params[:id])
    end

end
