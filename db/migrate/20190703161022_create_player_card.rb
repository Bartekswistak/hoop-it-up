class CreatePlayerCard < ActiveRecord::Migration[5.2]
  def change
    create_table :player_cards do |t|
      t.string :nickname
    end
  end
end
