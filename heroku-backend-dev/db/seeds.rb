# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

w1 = Workout.create(name: "For the Upper Body")

w1.exercises << [
    Exercise.find_or_create_by(
        name: "Plank to Push-up",
        muscle_group: "Chest, Shoulders, and Triceps", 
        instructions: "Alternate between a plank position and a pushup.",
        reps: "10 reps"), 
    Exercise.find_or_create_by(
        name: "Three-way Push-up",
        muscle_group: "Chest, Shoulders, and Triceps",
        instructions: "Perform a push up with your hands making the shape of a diamond.",
        reps: "10 reps"),
    Exercise.find_or_create_by(
        name: "Burpee",
        muscle_group: "Chest, Shoulders, and Triceps",
        instructions: "Perform a pushup, then jump to your feet and jump as high as you can. Repeat.",
        reps: "10 reps"),
    Exercise.find_or_create_by(
        name: "1 Foot Push-up",
        muscle_group: "Chest, Shoulders, and Triceps",
        instructions: "Perform a pushup with one foot in the air, switch feet halfway between reps.",
        reps: "10 reps"),
    Exercise.find_or_create_by(
        name: "Incline Push-up",
        muscle_group: "Chest, Shoudlers, and Triceps",
        instructions: "With your feet on the ground and your hands on a chair, bench, or anything above ground level, perform a pushup.",
        reps: "10 reps")
    ]

w2 = Workout.create(name: "For the Back and Biceps")

w2.exercises << [
    Exercise.find_or_create_by(
        name: "Wide-grip Push-up",
        muscle_group: "Back and Biceps",
        instructions: "Perform a pushup with your hands placed wider than your shoulders.",
        reps: "10 reps"),
    Exercise.find_or_create_by(
        name: "Wide-grip Pull-up",
        muscle_group: "Back and Biceps",
        instructions: "With a pull-up bar, perform a pull-up with a grip wider than your shoulders.",
        reps: "10 reps"),
    Exercise.find_or_create_by(
        name: "Chaturanga Push-up",
        muscle_group: "Back and Biceps",
        instructions: "Perform a push up with your hands placed on the ground below your stomach, keeping your elbows tucked in close to your sides. Remember to keep your back flat.",
        reps: "10 reps"),
    Exercise.find_or_create_by(
        name: "Side Plank",
        muscle_group: "Back and Biceps",
        instructions: "With one hand on the ground and the other in the air, both arms extended, face your body to one side and hold your position.",
        reps: "30 seconds"),
    Exercise.find_or_create_by(
        name: "Plank",
        muscle_group: "Back and Biceps",
        instructions: "Go into plank position, keeping your back straight and your head held high.",
        reps: "30 seconds")
    ]

w3 = Workout.create(name: "For the Abs")

w3.exercises << [
    Exercise.find_or_create_by(
        name: "Bicycle Crunch",
        muscle_group: "Abs",
        instructions: "Lie flat on the ground, hold your hands behind your head, lift your legs above the ground. Touch your elbows to your knees and alternate continuously,",
        reps: "20 elbow-knee touches"),
    Exercise.find_or_create_by(
        name: "Heel Touch",
        muscle_group: "Abs",
        instructions: "Lie on your back, hands by your sides, lift your knees and keep your feet flat on the ground. Touch your right heel with your right hand and vice versa.",
        reps: "20"),
    Exercise.find_or_create_by(
        name: "Plank with Leg Raise",
        muscle_group: "Abs",
        instructions: "Hold a plank position with one leg raised. Alternate legs halfway through.",
        reps: "30 seconds"),
    Exercise.find_or_create_by(
        name: "Mountain Climber",
        muscle_group: "Abs",
        instructions: "Get into push up position with your back slightly lifted. Jump, keeping your hands on the ground and bringing one foot up to your chest, then jump and bring the other foot up to your chest. Repeat.",
        reps: "20 reps"),
    Exercise.find_or_create_by(
        name: "Seated Scissor Kick",
        muscle_group: "Abs",
        instructions: "Lie down, and lift your legs and back off the ground, balancing on your butt. While holding this position, lower one leg to the floor and lift the other one up and alternate.",
        reps: "20 reps")
    ]

w4 = Workout.create(name: "For the Legs")

w4.exercises << [
    Exercise.find_or_create_by(
        name: "Squat",
        muscle_group: "Legs",
        instructions: "With knees slightly bent and arms out infront of you, lower your butt towards the ground using only your legs then lift back up. Repeat.",
        reps: "10 reps"),
    Exercise.find_or_create_by(
        name: "Jump Squat",
        muscle_group: "Legs",
        instructions: "Peform a regular squat, but jump high when lifting yourself back up.",
        reps: "10 reps"),
    Exercise.find_or_create_by(
        name: "Lunge",
        muscle_group: "Legs",
        instructions: "Take a step infront of you, then bend the knee you stepped with, lowering your body towards the ground. Alternate legs.",
        reps: "10 reps"),
    Exercise.find_or_create_by(
        name: "Sumo Squat",
        muscle_group: "Legs",
        instructions: "Perform a squat, only widening your leg stance to get deeper into the squat.",
        reps: "10 reps"),
    Exercise.find_or_create_by(
        name: "Glute Bridge",
        muscle_group: "Legs",
        instructions: "Lie on your back with your knees up and feet planted on the ground. Lift your lower back up using your legs, then release.",
        reps: "20 reps")
    ]
