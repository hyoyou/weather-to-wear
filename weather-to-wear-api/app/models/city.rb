class City < ApplicationRecord
  has_many :user_cities
  has_many :users, through: :user_cities

  validates :zip_code, presence: true,
                       uniqueness: true,
                       format: { with: /\A\d{5}\z/, message: "only allows numbers"}
end
