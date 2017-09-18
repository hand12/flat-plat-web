Rails.application.routes.draw do
  get '/top', to: 'tops#index'
  resources :plans, only: [:new, :show]
end
