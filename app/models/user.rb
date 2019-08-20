class User < ApplicationRecord
        #     # Include default devise modules.
        #     devise :database_authenticatable, :registerable,
        #             :recoverable, :rememberable, :trackable, :validatable,
        #             :confirmable, :omniauthable

        attr_accessor :encrypted_password

end
