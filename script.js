let options = document.body.querySelectorAll(".opt")
function randomOpt() {
    let a=Math.random()
    if (a>0.67){
        options.classList.add("scissors")
    }
    else if(a<0.34){
        options.classList.add("rock")
    }
    else{
        options.classList.add("paper")
    }
}

options.forEach(option => {
    option.addEventListener("click",() => {
        options.forEach(opt => {
            opt.classList.remove("selected")
        });
    option.classList.add("selected")
    console.log(option.classList)
    }
     )
    
});

async function main() {
    const next=document.body.querySelector(".next")
    next.addEventListener("click",() => {
     const del = document.body.querySelector(".mainChiz")
    //   del.innerHTML=""
    }
    )


}
main()