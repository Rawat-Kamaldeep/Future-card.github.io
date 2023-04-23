const blob = document.getElementById("blob")

document.body.onpointermove = event =>{
    const {clientX, clientY} = event;

    blob.animate({
        left: `${clientX}px`,
        top: `${clientY}px`,
    },{duration: 3000, fill: "forwards"});
}


// const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
// let interval = null;
// const screen = document.querySelector(".screen"), name = document.querySelector(".name");

// screen.onmouseenter = event =>{
//     let iterations = 0
    
//     clearInterval(interval);
//     interval = setInterval(()=>{
//         event.target.innerText = event.target.innerText.split("")
//         .map((letter, index) => {
//             if(index<iterations){
//                 return event.target.dataset.value[index];
//             }
            
//             return letters[Math.floor(Math.random()*26)]
//         })
//         .join("");

//         if (iterations >= event.dataset.value.length) {clearInterval(interval);}

//         iterations += 1 / 3;
//     }, 30);
// }

const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

let interval = null;

const screen = document.querySelector(".screen");
const nameElement = document.querySelector(".name");

screen.onmouseenter = event => {  
  let iteration = 0;
  
  clearInterval(interval);
  
  interval = setInterval(() => {
    nameElement.innerText = nameElement.innerText
      .split("")
      .map((letter, index) => {
        if(index < iteration) {
          return nameElement.dataset.value[index];
        }
      
        return letters[Math.floor(Math.random() * 26)]
      })
      .join("");
    
    if(iteration >= nameElement.dataset.value.length){ 
      clearInterval(interval);
    }
    
    iteration += 1 / 3;
  }, 30);
}