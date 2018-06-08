class Api::CitiesController < ApplicationController
  before_action :set_city, only: [:show, :edit, :update]

  def index
    render json: City.all
  end

  def show
    render json: @city
  end

  private
    def set_city
      @city = City.find_by(id: params[:id])
    end
end
