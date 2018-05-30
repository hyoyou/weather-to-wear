class User < ApplicationRecord
  has_secure_password

  has_many :user_cities
  has_many :cities, through: :user_cities

  accepts_nested_attributes_for :user_cities, allow_destroy: true

  validates :email, :name, presence: true
  validates :email, uniqueness: true
end
