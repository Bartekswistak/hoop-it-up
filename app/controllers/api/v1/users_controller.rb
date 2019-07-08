module Api
module V1

class UsersController < ApplicationController

    def index
        @users = User.all
        render json: @users
    end
    
    def new
        @user = User.new(user_params)
        if @user.save
            render json: @user
        end
    end
    
    def show
        @user = current_user
        render json: @user
    end
    
    def create
        @user = User.new(user_params)
        if @user.save
          render json: @user
        else
          render '/'
        end
    end
    
    def destroy
        session.delete :user_id
        redirect_to '/'
    end
    
    private
    
    def user_params
        params.require(:user).permit(:name, :email, :encrypted_password)
    end
    
    end
end
end