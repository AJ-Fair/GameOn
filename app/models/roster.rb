class Roster < ApplicationRecord
  belongs_to :post
  has_many :users
end
