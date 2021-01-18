class WorkoutFetchRequests {

    static getWorkouts() {
        return fetch("https://workout-planner-backend.herokuapp.com/workouts")
        .then(resp => resp.json())
        .then(json => json.data)
    }

    static postWorkout = configurationObject => {
        return fetch("https://workout-planner-backend.herokuapp.com/workouts", configurationObject)
        .then(resp => resp.json())
        .catch(error => console.log(error))
    }
    
}