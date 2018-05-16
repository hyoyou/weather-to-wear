require 'jwt'
require 'pry'

class Auth

  def self.create_token(user_object)
    # binding.pry
    payload = { user: JSON.parse(user_object.to_json) }
    token = JWT.encode(payload, ENV['AUTH_SECRET'], ENV['AUTH_ALGORITHM'])
    # decode_token(token)
  end

  def self.decode_token(token)
    decoded = JWT.decode(token, 'myweatherapp', true, { algorithm: ENV['AUTH_ALGORITHM'] })
    # binding.pry
  end

end
