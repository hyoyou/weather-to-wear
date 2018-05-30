class UserCity < ApplicationRecord
  belongs_to :user
  belongs_to :city

  def city_attributes=(city_attributes)
    city_attributes.each do |index, city_attribute|
      city_zip = City.find_or_create_by(zip_code: city_attribute)
      self.city = city_zip
    end
  end
end

#{"user"=>{"name"=>"Perfect", "email"=>"Perfect@weather.com", "password"=>"[FILTERED]", "cold_sensitivity"=>false, "opts_hands_free"=>true, "user_cities_attributes"=>[{"city_attributes"=>{"zip_code"=>"07024"}}]}}
