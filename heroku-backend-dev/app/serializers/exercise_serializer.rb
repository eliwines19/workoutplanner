class ExerciseSerializer
  include FastJsonapi::ObjectSerializer
  attributes :name, :muscle_group, :instructions, :reps, :workouts
end
