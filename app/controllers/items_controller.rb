class ItemsController < ApplicationController

  def topPage1
    contact = params
    ContactMailer.send_when_admin_reply(contact).deliver
    redirect_to root_path, notice: 'お問い合わせが完了しました'
  end
  
end
