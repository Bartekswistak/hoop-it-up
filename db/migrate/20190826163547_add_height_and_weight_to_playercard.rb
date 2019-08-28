class AddHeightAndWeightToPlayercard < ActiveRecord::Migration[5.2]
  def change
    add_column :player_cards, :player_height_in_feet, :integer
    add_column :player_cards, :player_height_in_inches, :integer
    add_column :player_cards, :player_weight, :integer
    add_column :player_cards, :player_age, :integer
    add_column :player_cards, :player_fav_player, :string

  end
end
