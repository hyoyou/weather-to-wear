class RemoveTimestampsFromUserCities < ActiveRecord::Migration[5.1]
  def change
    remove_column :user_cities, :created_at, :string
    remove_column :user_cities, :updated_at, :string
  end
end
