class AddHeightAndWeightToPlayercard < ActiveRecord::Migration[5.2]
  def change
    add_column :player_cards, :height_in_feet, :integer
    add_column :player_cards, :height_in_inches, :integer
    add_column :player_cards, :weight_in_lbs, :integer
    add_column :player_cards, :age, :integer
    add_column :player_cards, :favorite_player, :string

  end
end
