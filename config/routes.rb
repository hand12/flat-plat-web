Rails.application.routes.draw do
  get '/top', to: 'tops#index'
  get '/plans/*path', to: 'plans#top'
  # resources :plans, only: [:new, :show]
end
