Rails.application.routes.draw do
  get 'contact' => 'contacts#new'
  get 'contacts/create'
  get 'about' => 'about#index'
  get 'comments/new'
  get 'categories/show'
  get 'posts/index'
  get 'posts/show'
  
#  namespace :admin do
 # end
  
  namespace :admin do
    get 'login', to: 'sessions#new', as: 'login'
    get 'logout', to: 'sessions#destroy', as: 'logout'
    get 'users/new'
    get 'users/create'
    get 'users/edit'
    get 'users/update'
    get 'users/destroy'
    get 'users/index'
    get 'users/show'
  end
  
  namespace :admin do
    get 'comments/destroy'
  end
  
  namespace :admin do
    get 'categories/new'
    get 'categories/create'
    get 'categories/edit'
    get 'categories/update'
    get 'categories/destroy'
    get 'categories/index'
    get 'categories/show'
  end
  
  namespace :admin do
    get 'posts/new'
    get 'posts/create'
    get 'posts/edit'
    get 'posts/update'
    get 'posts/destroy'
    get 'posts/index'
    get 'posts/show'
  end

  resources :posts, :categories, :comments
  resources "contacts", only: [:new, :create]

  namespace :admin do
    resources :posts, :categories, :comments, :users, :sessions
  end

  root 'posts#index'

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
