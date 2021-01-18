class ExerciseFetchRequests {

    static getExercises() {
        return fetch("https://workout-planner-backend.herokuapp.com/exercises")
        .then(resp => resp.json())
        .then(json => json.data)
    }

    static postExercise = configurationObject => {
        return fetch("https://workout-planner-backend.herokuapp.com/exercises", configurationObject)
        .then(resp => resp.json())
        .catch(error => console.log(error))
    }
}