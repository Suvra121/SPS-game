let btns = document.querySelectorAll("#btn");
let scr1 = document.querySelector("#youscr");
let scr2 = document.querySelector("#compscr");
let final = document.querySelector("#final_res");
console.log(scr1)
let your_scr = 0;
let comp_scr = 0;
let comp="";
let ran = 0;
btns.forEach((btn)=>{
    btn.addEventListener("click",()=>{
        /* console.log(btn.name); */
        let you = btn.name;
        ran = Math.random(3)*3;
        for(let i=0; i<=ran ; i++)
        {
            comp = btns[i].name;
            
        }
        /* console.log(comp); */
        
        if(you == "stone" && comp == "scissor")
        {
            scr1.innerText=++your_scr;
            final.style.backgroundColor="green";
            final.innerText= `!!!YOU WIN!!! Comp = ${comp}`;
            console.log("You Win...");
            console.log("Comp = ",comp);
        }
        if(you == "stone" && comp == "paper")
        {
            scr2.innerText=++comp_scr;
            final.style.backgroundColor="red";
            final.innerText= `!!!YOU LOSS!!! Comp = ${comp}`;
            console.log("You Loss...");
            console.log("Comp = ",comp);
        }
        if(you == "stone" && comp == "stone")
        {
            console.log("DRAW");
            final.innerText= `!!!DRAW!!!`;
            final.style.backgroundColor="yellow";
            console.log("Comp = ",comp);
        }
        if(you == "paper" && comp == "stone")
        {
            scr1.innerText=++your_scr;
            final.style.backgroundColor="green";
            final.innerText= `!!!YOU WON!!! Comp = ${comp}`;
            console.log("You Won...");
            console.log("Comp = ",comp);
        }
        if(you == "paper" && comp == "paper")
        {
            final.style.backgroundColor="red";
            final.innerText= `!!!DRAW!!!`;
            console.log("DRAW");
            console.log("Comp = ",comp);
        }
        if(you == "paper" && comp == "scissor")
        {
            scr2.innerText=++comp_scr;
            final.style.backgroundColor="red";
            final.innerText= `!!!YOU LOSS!!! Comp = ${comp}`;
            console.log("You Loss...");
            console.log("Comp = ",comp);
        }
        if(you == "scissor" && comp == "stone")
        {
            scr2.innerText=++comp_scr;
            final.style.backgroundColor="red";
            console.log("You Loss...");
            console.log("Comp = ",comp);
        }
        if(you == "scissor" && comp == "paper")
        {
            scr1.innerText=++your_scr;
            final.style.backgroundColor="green";
            final.innerText= `!!!YOU WON!!! Comp = ${comp}`;
            console.log("You Won...");
            console.log("Comp = ",comp);
        }
        if(you == "scissor" && comp == "scissor")
        {
            final.style.backgroundColor="red";
            final.innerText= `!!!DRAW!!!`;
            console.log("DRAW");
            console.log("Comp = ",comp);
        }


    })
})