class UserCitySerializer < ActiveModel::Serializer
  attributes :id

  belongs_to :city
end
