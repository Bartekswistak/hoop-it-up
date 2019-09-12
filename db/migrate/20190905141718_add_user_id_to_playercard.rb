class AddUserIdToPlayercard < ActiveRecord::Migration[5.2]
  def change
    add_column :player_cards, :user_id, :integer
  end
end
