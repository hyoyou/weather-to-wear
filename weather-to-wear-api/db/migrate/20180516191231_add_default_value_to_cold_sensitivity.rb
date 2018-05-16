class AddDefaultValueToColdSensitivity < ActiveRecord::Migration[5.1]
  def change
    change_column_default(:users, :cold_sensitivity, false)
  end
end
