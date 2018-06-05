class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :email, :cold_sensitivity, :opts_hands_free

  has_many :user_cities
end
