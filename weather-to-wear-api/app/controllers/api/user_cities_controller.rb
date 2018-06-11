class Api::UserCitiesController < ApplicationController
  def destroy
    @user_city = UserCity.find_by(id: params[:id])
    if @user_city.destroy
      render json: @user_city
    else
      render json: { errors: { message: @user_city.errors } }, status: 401
    end
  end
end
