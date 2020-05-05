class Post < ApplicationRecord
  belongs_to :user

  validates :title, presence: true
  validates :datetime, presence: true
  validates :description, presence: true
  validates :game, presence: true
end
