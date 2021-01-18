class WorkoutsController < ApplicationController

    def index 
        workouts = Workout.most_recent
        render json: WorkoutSerializer.new(workouts)
    end

    def show 
        workout = Workout.find_by(id: params[:id])
        if workout
            render json: WorkoutSerializer.new(workout)
        else
            render json: {message: "The workout number #{params[:id]} couldn't be found"}
        end
    end

    def create 
        workout = Workout.new
        exercises = params[:exercises].map { |ex| Exercise.find_or_create_by(name: ex)}
        workout.id = params[:workout][:id]
        workout.name = params[:workout][:name]
        workout.exercises << exercises
        workout.save
        render json: WorkoutSerializer.new(workout)
    end

    def destroy 
        workout = Workout.find_by(id: params[:id])
        workout.delete
    end

end
