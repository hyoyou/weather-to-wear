class CreateUsers < ActiveRecord::Migration[5.1]
  def change
    create_table :users do |t|
      t.string :name
      t.string :email
      t.string :password_digest
      t.boolean :cold_sensitivity
      t.boolean :opts_hands_free

      t.timestamps
    end
  end
end
