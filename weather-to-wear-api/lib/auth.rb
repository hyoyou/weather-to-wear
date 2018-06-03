require 'jwt'

class Auth
  def self.create_token(user_object)
    payload = { user: JSON.parse(user_object.to_json) }
    JWT.encode(payload, ENV['AUTH_SECRET'], ENV['AUTH_ALGORITHM'])
  end

  def self.decode_token(token)
    JWT.decode(token, ENV['AUTH_SECRET'], true, { algorithm: ENV['AUTH_ALGORITHM'] }).first
  end
end
