Rails.application.routes.draw do
  resources :todolists
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root "todolists#index"
end
