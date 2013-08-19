source 'https://rubygems.org'

gem 'rails', '3.2.13'
gem 'jquery-rails'


group :development, :test do
  gem 'sqlite3'
end

group :production do
  gem 'pg'
  gem 'newrelic_rpm'
end

group :assets do
  gem 'sass-rails',   '~> 3.2.3'
  gem 'coffee-rails', '~> 3.2.1'
  gem 'uglifier', '>= 1.0.3'
end

# gem 'thin'
# gem 'unicorn'
gem 'puma'

gem 'route_downcaser'

gem 'memcachier' # for specific memcache on heroku
gem 'rack-cache' #adds rack-cache middleware
gem 'dalli' #newer cache client
gem 'kgio' # better i/o