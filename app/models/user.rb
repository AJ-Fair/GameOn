class User < ApplicationRecord
  has_many :posts
  has_many :comments
  belongs_to :roster

  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable
  validates :email, uniqueness: true
  validates_format_of :email, :with => /\A([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]{2,})\z/i

  mount_uploader :profile_photo, ProfilePhotoUploader
end
