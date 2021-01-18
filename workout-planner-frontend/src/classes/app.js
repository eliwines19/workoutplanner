class App {

    static hideAndSeek = (btn, element, disableBtn) => {
        let num = 0;
        btn.addEventListener('click', function() {
            num++;
            if (num % 2 !== 0) {
                element.style.display = "block"
                disableBtn.disabled = true
            } else {
                element.style.display = "none"
                disableBtn.disabled = false
            }
        })
    };

    static validateForm = func => {
        let form = event.target.parentElement
        let inputs = [];
        for (let i = 0; i < form.length - 1; i++) {
            inputs.push(form[i].value === "")
        }
        if (inputs.some(el => {return el === true})) {
            alert("All fields must be filled out")
        } else {
            func();
        }
    }

    static extendWorkoutCard = () => {
        let cardContainer = document.getElementById("card-container");
        console.log(cardContainer.childNodes.length)
        // for(let i = 0;i<cards.length;i++){
        //     console.log(cards)
        // }
        // document.addEventListener("Click", () => {
        //     console.log("clicked")
        // })
    }

}