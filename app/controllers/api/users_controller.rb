class Api::UsersController < ApplicationController

  def create
    user = User.new(user_params)
    if user.save 
      render json: UserSerializer.new(user).serialized_json
    else 
      render json: { error: 'error creating user' }
    end 
  end 

  def index 
    render json: User.all
  end 
  
  private 

  def user_params
    params.permit(:username, :password)
  end 
end
