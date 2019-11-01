class ItemsController < ApplicationController

  def topPage1
    redirect_to root_path, notice: 'お問い合わせが完了しました'
  end
  
end
