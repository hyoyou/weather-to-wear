require 'pry'

class UserCity < ApplicationRecord
  belongs_to :user
  belongs_to :city

  def city_attributes=(city_attributes)
    # binding.pry
    city_attributes.each do |city_attribute_hash|
      city_zip = city_attribute_hash[:zip_code]
      # binding.pry
      subject_city = City.find_or_create_by(zip_code: city_zip)
      self.city = subject_city
    end
  end
end

#{"user"=>{"name"=>"Perfect", "email"=>"Perfect@weather.com", "password"=>"[FILTERED]", "cold_sensitivity"=>false, "opts_hands_free"=>true, "user_cities_attributes"=>[{"city_attributes"=>{"zip_code"=>"07024"}}]}}
