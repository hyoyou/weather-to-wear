class AddDefaultValueOptsHandsFree < ActiveRecord::Migration[5.1]
  def change
    change_column_default(:users, :opts_hands_free, false)
  end
end
