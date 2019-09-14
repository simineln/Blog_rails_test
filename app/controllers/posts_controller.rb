class PostsController < ApplicationController
  def index
     if params[:search]
      @posts = Post.search(params[:search]).all
    else
      @posts = Post.all
    end

    @categories = Category.all
  end

  def show
    @post = Post.find(params[:id])
    @categories = Category.all
    #@comments = Comment.all
  end
end
