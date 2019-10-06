Rails.application.routes.draw do
  
  get "/top1", to:"items#topPage1"
  root "items#topPage2"
  
end
