document.addEventListener("DOMContentLoaded", function() {

    Workouts.fetchAndLoadWorkouts();
    Exercises.fetchAndFillLists();

    let [a, b, c] = [document.querySelector('#new-workout-button'), document.querySelector('#workout-form'), document.querySelector('#new-exercise-button')]
    let [d, e, f] = [document.querySelector('#new-exercise-button'), document.querySelector('#exercise-form'), document.querySelector('#new-workout-button')]
    App.hideAndSeek(a, b, c);
    App.hideAndSeek(d, e, f);

    let workoutSubmit = document.getElementById('workout-form-submit');
    workoutSubmit.addEventListener('click', (e) => {
        e.preventDefault();
        App.validateForm(Workouts.addWorkout)
    })

    let exerciseSubmit = document.getElementById('exercise-form-submit');
    exerciseSubmit.addEventListener('click', (e) => {
        e.preventDefault();
        App.validateForm(Exercises.addExercise)
    })

    App.extendWorkoutCard()

})