Rails.application.routes.draw do
  root to: "users#show"

  devise_for :users
  resources :users

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
