module Api
module V1

class UsersController < ApplicationController

    def index
        @users = User.all
        render json: @users
    end
    
    def new
        @user = User.new
        render json: @user
    end
    
    def show
        @user = current_user
        render json: @user
       
    end
    
    def create
        @user = User.new(user_params)
        if @user.save
          session[:user_id] = @user.id
          redirect_to user_path(@user)
        else
          render 'new'
        end
    end
    
    def destroy
        session.delete :user_id
        redirect_to '/'
    end
    
    private
    
    def user_params
        params.require(:user).permit(:name, :encrypted_password)
    end
    
    end
end
end