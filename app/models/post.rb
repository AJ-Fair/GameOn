class Post < ApplicationRecord
  belongs_to :user
  has_many :comments

  validates :title, presence: true
  validates :datetime, presence: true
  validates :description, presence: true
  validates :game, presence: true
end
