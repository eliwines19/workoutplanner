class Exercises {

    static fetchAndFillLists() {
        ExerciseFetchRequests.getExercises().then(exercises => this.createExercises(exercises))
    }

    static createExercises = data => {
        let exerciseArray = [];
        for (let exercise of data) {
            let ex = exercise.attributes
            exerciseArray.push(new Exercise(ex.name, ex.muscle_group, ex.reps, ex.instructions))
        }
        this.addExercisesToDom(exerciseArray);
    }

    static addExercisesToDom = exercises => {
        for (let exercise of exercises) {
            exercise.fillLists();
        }
    }

    static addExercise() {
        const form = event.target.parentElement;
        const exercise = new Exercise(form[0].value, form[1].value, form[2].value, form[3].value)
        const configObj = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({
                "name": exercise.name,
                "muscle_group": exercise.muscleGroup,
                "reps": exercise.reps,
                "instructions": exercise.instructions
            })
        }
        ExerciseFetchRequests.postExercise(configObj).then(json => {
            exercise.fillLists(json.data)
            alert("Exercise has been added")
        })
    }
}