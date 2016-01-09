require 'sinatra'
require 'json'
require 'yaml'
require 'sinatra/activerecord'
require "./config/environment"
require './models/quote'

helpers do
  def protected!
    return if authorized?
    headers['WWW-Authenticate'] = 'Basic realm="Restricted Area"'
    halt 401, "Why you snooping, fam?\n"
  end

  def authorized?
    @config = YAML.load_file("./config/protected.yaml")
    @auth ||=  Rack::Auth::Basic::Request.new(request.env)
    @auth.provided? and @auth.basic? and @auth.credentials and @auth.credentials == [@config["username"], @config["password"]]
  end
end

get '/protected' do 
    protected!
    erb :admin
end

get '/quote' do
    "Random quote test"
end 

post '/quote' do 
    params[:quote]
end

get '/:quote' do 
    params[:quote]
end

get '/' do 
    'Server is up and running.'
end
