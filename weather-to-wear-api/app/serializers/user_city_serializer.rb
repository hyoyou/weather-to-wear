class UserCitySerializer < ActiveModel::Serializer
  attributes :id

  belongs_to :city, key: "city_attributes"
end
