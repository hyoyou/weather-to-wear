class User < ApplicationRecord
  has_secure_password

  has_many :user_cities
  has_many :cities, through: :user_cities

  validates :email, :name, presence: true
  validates :email, uniqueness: true
end
