class Exercise < ApplicationRecord
    has_many :exercises_workouts, dependent: :delete_all
    has_many :workouts, through: :exercises_workouts

    validates :name, presence: true
    validates :muscle_group, presence: true
    validates :instructions, presence: true
    validates :reps, presence: true
end
