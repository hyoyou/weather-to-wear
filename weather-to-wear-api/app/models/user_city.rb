require 'pry'

class UserCity < ApplicationRecord
  belongs_to :user
  belongs_to :city

  def city_attributes=(city_attributes)
    # binding.pry
    city_zip = city_attributes[:zip_code]
    subject_city = City.find_or_create_by(zip_code: city_zip)
    self.city = subject_city
  end
end
