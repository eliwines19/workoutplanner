class ExercisesWorkoutsController < ApplicationController

    def index 
        exercises_workouts = ExercisesWorkout.all 
        render json: exercises_workouts
    end

    def show 
        exercises_workout = ExercisesWorkout.where(workout_id: params[:id])
        render json: exercises_workout
    end

    def destroy 
        exercises_workouts = ExercisesWorkout.where(workout_id: params[:id])
        exercises_workouts.delete_all
    end

end
