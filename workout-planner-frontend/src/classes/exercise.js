class Exercise {
    constructor(name, muscleGroup, reps, instructions) {
        this.name = name;
        this.muscleGroup = muscleGroup;
        this.reps = reps;
        this.instructions = instructions;
    }

    fillLists() {
        const selects = document.querySelectorAll('.select')
        for (let i = 0; i < selects.length; i++) {
            let option = document.createElement('option');
            option.innerHTML = this.name + " (" + this.muscleGroup + ")";
            option.value = this.name + "***" + this.muscleGroup + "***" + this.reps + "***" + this.instructions
            selects[i].appendChild(option);
        }
    }

}