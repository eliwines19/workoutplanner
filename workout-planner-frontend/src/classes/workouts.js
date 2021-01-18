class Workouts {

    static fetchAndLoadWorkouts() {
        WorkoutFetchRequests.getWorkouts().then(workouts => this.createWorkouts(workouts))
    }

    static createWorkouts = workouts => {
        let workoutsArray = [];
        for (let workout of workouts) {
            workoutsArray.push(new Workout(workout.id, workout.attributes.name, workout.attributes.exercises))
        }
        this.addWorkoutsToDom(workoutsArray);
    }

    static addWorkoutsToDom = workouts => {
        for (let workout of workouts) {
            workout.createWorkoutCard()
        }
    }

    static addWorkout() {
        const form = event.target.parentElement
        const exercises = document.querySelectorAll('.select')
        let exArr = [];
        for (let i = 0; i < exercises.length; i++) { exArr.push(exercises[i].value.split('***')) };
        WorkoutFetchRequests.getWorkouts().then(workouts => {
            let firstWorkout = workouts[0]
            let isFirstCreatedWorkout = x => {
                if (x === undefined) {
                    return 1
                } else {
                    return parseInt(x.id, 10) + 1
                }
            }
            let workout = new Workout(isFirstCreatedWorkout(firstWorkout), form[0].value, exArr)
            const configObj = {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                },
                body: JSON.stringify({
                    "id": workout.id,
                    "name": workout.name,
                    "exercises": workout.exercises
                })
            }
            WorkoutFetchRequests.postWorkout(configObj).then(json => {
                workout.createWorkoutCard();
                alert("Workout has been added")
            })
        })
    }

    static removeWorkout = e => {
        e.preventDefault();
        if (confirm("Delete this workout?")) {
            e.target.parentElement.remove()
            const configObj = {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                }
            }
            fetch(`https://workout-planner-backend.herokuapp.com/exercises_workouts/${e.target.attributes[0].value}`, configObj)
            fetch(`https://workout-planner-backend.herokuapp.com/workouts/${e.target.attributes[0].value}`, configObj)
        }
    }
}