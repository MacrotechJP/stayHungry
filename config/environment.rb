# Load the Rails application.
require_relative 'application'

# Initialize the Rails application.
Rails.application.initialize!

Invoicer::Application.configure do 
  # Setup the mailer config
  config.action_mailer.delivery_method = :smtp
  config.action_mailer.perform_deliveries = true
  config.action_mailer.smtp_settings = {
    user_name: "tanakakoyo1999@gmail.com",
    password: "aovosplpekpfuizy",
    address: 'smtp.gmail.com',
    domain: 'gmail.com',
    port: 587,
    authentication: "login",
    enable_starttls_auto: true
  }
end