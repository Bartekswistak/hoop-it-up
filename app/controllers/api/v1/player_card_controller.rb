module Api
module V1

    class PlayerCardController < BaseController
        belongs_to :user
        before_action :authenticate_user!

        def show
           @player = current_user
           render json: @player
        end
    end 
end
end
