class User < ApplicationRecord
    has_secure_password
    validates :username, :password_digest, presence: true
    validates :username, uniqueness: true 
    validates :password, length: {minimum: 6}, allow_nil:true

end
