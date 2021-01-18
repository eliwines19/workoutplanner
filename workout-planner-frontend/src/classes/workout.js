class Workout {
    constructor(id, name, exercises) {
        this.id = id;
        this.name = name;
        this.exercises = exercises;
    }

    createWorkoutCard() {
        const cardContainer = document.getElementById('card-container')

        const card = document.createElement('div')
        card.className = "card"
        card.id = `workout-${this.id}`

        const title = document.createElement('h2')
        title.innerHTML = this.name

        const button = document.createElement('button');
        button.setAttribute('workoutid', this.id)
        button.innerText = "Delete"
        button.addEventListener('click', Workouts.removeWorkout)

        card.appendChild(button)
        card.appendChild(title);

        for (let exercise of this.exercises) {
            let p = document.createElement('p');
            p.className = "workout-exercises";
            !!exercise.name ? p.innerText = exercise.name : p.innerText = exercise[0]
            card.appendChild(p)

            let div = document.createElement('div');
            div.className = "info-card";

            let instructions = document.createElement('li');
            let iString = 'Instructions: '
            !!exercise.instructions ? instructions.innerText = iString + exercise.instructions : instructions.innerText = iString + exercise[3]

            let reps = document.createElement('li');
            let rString = 'Reps: '
            !!exercise.reps ? reps.innerText = rString + exercise.reps : reps.innerText = rString + exercise[2];

            let muscleGroup = document.createElement('li');
            let mString = 'Muscle Group: '
            !!exercise.muscle_group ? muscleGroup.innerText = mString + exercise.muscle_group : muscleGroup.innerText = mString + exercise[1]

            div.appendChild(instructions);
            div.appendChild(muscleGroup);
            div.appendChild(reps);

            card.appendChild(div);
        }

        cardContainer.appendChild(card)
    }
}