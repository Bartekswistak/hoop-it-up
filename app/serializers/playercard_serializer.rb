class PlayerCardSerializer
    include FastJsonapi::ObjectSerializer

    attributes :player_nickname, :player_height_in_feet, :player_height_in_inches, :player_weight, :player_age, :player_fav_player
    belongs_to :user, serializer: UserSerializer
  end