class PlayersController < ApplicationController
    before_action :authenticate_user!

    def show
        @player = current_user
    end

end
