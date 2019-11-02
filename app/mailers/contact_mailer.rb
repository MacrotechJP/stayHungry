class ContactMailer < ApplicationMailer

  def send_when_admin_reply(contact) #メソッドに対して引数を設定
    @contact = contact #お問い合わせ情報
    mail to: "tanakakoyo1999@gmail.com,leh.shimodatks@gmail.com", subject: '【StayHungryHP】お問い合わせの連絡'
  end

end
