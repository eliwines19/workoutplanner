class ExercisesController < ApplicationController

    def index 
        exercises = Exercise.all
        render json: ExerciseSerializer.new(exercises)
    end

    def show 
        exercise = Exercise.find_by(id: params[:id])
        if exercise
            render json: ExerciseSerializer.new(exercise)
        else
            render json: {message: "The exercise number #{params[:id]} couldn't be found"}
        end
    end

    def create 
        exercise = Exercise.new
        exercise.name = params[:exercise][:name]
        exercise.muscle_group = params[:exercise][:muscle_group]
        exercise.reps = params[:exercise][:reps]
        exercise.instructions = params[:exercise][:instructions]
        exercise.save
        render json: ExerciseSerializer.new(exercise)
    end

end
