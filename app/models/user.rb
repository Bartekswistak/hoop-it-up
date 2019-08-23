class User < ApplicationRecord
        #     # Include default devise modules.
        #     devise :database_authenticatable, :registerable,
        #             :recoverable, :rememberable, :trackable, :validatable,
        #             :confirmable, :omniauthable

        has_secure_password
end
