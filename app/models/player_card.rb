class PlayerCard < ApplicationRecord
    belongs_to :user, optional: true 

    validates :player_nickname, :player_height_in_feet, :player_height_in_feet, :player_weight, :player_age, :player_fav_player, presence: true
end
