require 'pry'

class UserCity < ApplicationRecord
  belongs_to :user
  belongs_to :city

  # having below validation blocks user from saving same zip code more than once,
  # but it also doesn't let user add the same zip code once deleted
  # validates :city_id, uniqueness: true

  def city_attributes=(city_attributes)
    # binding.pry
    city_zip = city_attributes[:zip_code]
    subject_city = City.find_or_create_by(zip_code: city_zip)
    self.city = subject_city
  end
end
