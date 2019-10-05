Rails.application.routes.draw do
  
  get "/top1", to:"items#topPage1"
  get "/top2", to:"items#topPage2"
  
end
