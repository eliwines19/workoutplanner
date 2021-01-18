class Workout < ApplicationRecord
    has_many :exercises_workouts, dependent: :delete_all
    has_many :exercises, through: :exercises_workouts

    validates :name, presence: true

    scope :most_recent, -> { order("created_at desc") } 
end
