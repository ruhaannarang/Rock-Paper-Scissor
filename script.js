
let options = document.body.querySelectorAll(".opt")
function randomOpt() {
    let computer = document.createElement("div")
    let optContainer=document.body.querySelector(".options")
    optContainer.appendChild(computer)
    computer.classList.add("opt")
    computer.classList.add("computerGenerated")
    let computerChoice=document.body.querySelector(".computerGenerated")
    let a = Math.random()
    if (a > 0.67) {
        computer.classList.add("scissors")
        computerChoice.innerHTML=`<img src="./icons8-scissors-100.png" alt="">`
        
    }
    else if (a < 0.34) {
        computer.classList.add("rock")
        computerChoice.innerHTML=`<img  src="./icons8-rock-96.png" alt="">`
    }
    else {
        computer.classList.add("paper")
        computerChoice.innerHTML=` <img src="./icons8-paper-waste-100.png" alt="">`
    }
}

function del() {
    document.body.querySelector(".select").innerHTML = ""
    options.forEach(optionDel => {

        // let OptDelete=document.body.querySelectorAll(".opt")
        if (optionDel.classList.contains("selected")) {

        }
        else {
            optionDel.style.display="none"
        }
    }
    )
    document.body.querySelector(".btn").innerHTML = ""
}

options.forEach(option => {
    option.addEventListener("click", () => {
        options.forEach(opt => {
            opt.classList.remove("selected")
        });
        option.classList.add("selected")
        console.log(option.classList)
    }
    )

});

function main() {
    const next = document.body.querySelector(".next")
    next.addEventListener("click", () => {
        //  const del = document.body.querySelector(".mainChiz")
        //   del.innerHTML=""
        document.body.querySelector(".next").classList.remove("next")
        del()
        randomOpt()
        document.body.querySelector(".selected").insertAdjacentHTML("beforeend",`<p class="choices" >Your Choice </p>`)
        document.body.querySelector(".computerGenerated").insertAdjacentHTML("beforeend",`<p class="choices" >Computer's <br> Choice </p>`)
        let selected = document.querySelector(".selected");
        let computer = document.querySelector(".computerGenerated");

        if (selected && computer &&
            selected.classList.contains("rock") &&
            computer.classList.contains("rock")) {
            document.querySelector(".playbtn").innerHTML = "It's a tie";
        }
        else if (selected && computer &&
            selected.classList.contains("paper") &&
            computer.classList.contains("paper")) {
            document.querySelector(".playbtn").innerHTML = "It's a tie";
        }
        else if (selected && computer &&
            selected.classList.contains("scissors") &&
            computer.classList.contains("scissors")) {
            document.querySelector(".playbtn").innerHTML = "It's a tie😅";
        }

        else if (selected && computer &&
            selected.classList.contains("paper") &&
            computer.classList.contains("rock")) {
            document.querySelector(".playbtn").innerHTML = "You won!!!🥳";
        }
        else if (selected && computer &&
            selected.classList.contains("paper") &&
            computer.classList.contains("scissors")) {
            document.querySelector(".playbtn").innerHTML = "You lost😥";
        }
        else if (selected && computer &&
            selected.classList.contains("rock") &&
            computer.classList.contains("scissors")) {
            document.querySelector(".playbtn").innerHTML = "You won!!!🥳";
        }
        else if (selected && computer &&
            selected.classList.contains("rock") &&
            computer.classList.contains("paper")) {
            document.querySelector(".playbtn").innerHTML = "You lost😥";
        }
        else if (selected && computer &&
            selected.classList.contains("scissors") &&
            computer.classList.contains("paper")) {
            document.querySelector(".playbtn").innerHTML = "You won!!!🥳";
        }
        else if (selected && computer &&
            selected.classList.contains("scissors") &&
            computer.classList.contains("rock")) {
            document.querySelector(".playbtn").innerHTML = "You lost😥";
        }
        document.body.querySelector(".retry").style.display="block"
    }
    )


}
main()