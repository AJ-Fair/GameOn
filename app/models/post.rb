class Post < ApplicationRecord
  belongs_to :user
  has_many :comments
  has_one :roster
  has_many :users, through: :roster

  validates :title, presence: true
  validates :datetime, presence: true
  validates :description, presence: true
  validates :game, presence: true
end
