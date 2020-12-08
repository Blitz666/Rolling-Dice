const dot0 = document.querySelector(".dot0");
const dot1 = document.querySelector(".dot1");
const dot2 = document.querySelector(".dot2");
const dot3 = document.querySelector(".dot3");
const dot4 = document.querySelector(".dot4");
const dot5 = document.querySelector(".dot5");
const dot6 = document.querySelector(".dot6");
const dot7 = document.querySelector(".dot7");
const dot8 = document.querySelector(".dot8");
const result = document.getElementById("result");
const rollBtn = document.querySelector(".btn");



function createRandomNumber () {
const randomNumber = Math.floor(Math.random() * 6 + 1);
result.textContent = randomNumber;

if (randomNumber === 1) {
    
    dot0.style.backgroundColor = "#EFE5DC";
    dot1.style.backgroundColor = "#EFE5DC";
    dot2.style.backgroundColor = "#EFE5DC";
    dot3.style.backgroundColor = "#EFE5DC";
    dot4.style.backgroundColor = "black";
    dot5.style.backgroundColor = "#EFE5DC";
    dot6.style.backgroundColor = "#EFE5DC";
    dot7.style.backgroundColor = "#EFE5DC";
    dot8.style.backgroundColor = "#EFE5DC";
    
}

if (randomNumber === 2) {
    
    dot0.style.backgroundColor = "#EFE5DC";
    dot1.style.backgroundColor = "#EFE5DC";
    dot2.style.backgroundColor = "black";
    dot3.style.backgroundColor = "#EFE5DC";
    dot4.style.backgroundColor = "#EFE5DC";
    dot5.style.backgroundColor = "#EFE5DC";
    dot6.style.backgroundColor = "black";
    dot7.style.backgroundColor = "#EFE5DC";
    dot8.style.backgroundColor = "#EFE5DC";
    
}

if (randomNumber === 3) {
    
    dot0.style.backgroundColor = "#EFE5DC";
    dot1.style.backgroundColor = "#EFE5DC";
    dot2.style.backgroundColor = "black";
    dot3.style.backgroundColor = "#EFE5DC";
    dot4.style.backgroundColor = "black";
    dot5.style.backgroundColor = "#EFE5DC";
    dot6.style.backgroundColor = "black";
    dot7.style.backgroundColor = "#EFE5DC";
    dot8.style.backgroundColor = "#EFE5DC";
    
}

if (randomNumber === 4) {
        
    dot0.style.backgroundColor = "black";
    dot1.style.backgroundColor = "#EFE5DC";
    dot2.style.backgroundColor = "black";
    dot3.style.backgroundColor = "#EFE5DC";
    dot4.style.backgroundColor = "#EFE5DC";
    dot5.style.backgroundColor = "#EFE5DC";
    dot6.style.backgroundColor = "black";
    dot7.style.backgroundColor = "#EFE5DC";
    dot8.style.backgroundColor = "black";

}

if (randomNumber === 5) {
    
    dot0.style.backgroundColor = "black";
    dot1.style.backgroundColor = "#EFE5DC";
    dot2.style.backgroundColor = "black";
    dot3.style.backgroundColor = "#EFE5DC";
    dot4.style.backgroundColor = "black";
    dot5.style.backgroundColor = "#EFE5DC";
    dot6.style.backgroundColor = "black";
    dot7.style.backgroundColor = "#EFE5DC";
    dot8.style.backgroundColor = "black";

}

if (randomNumber === 6) {
    
    dot0.style.backgroundColor = "black";
    dot1.style.backgroundColor = "#EFE5DC";
    dot2.style.backgroundColor = "black";
    dot3.style.backgroundColor = "black";
    dot4.style.backgroundColor = "#EFE5DC";
    dot5.style.backgroundColor = "black";
    dot6.style.backgroundColor = "black";
    dot7.style.backgroundColor = "#EFE5DC";
    dot8.style.backgroundColor = "black";
}

}

rollBtn.addEventListener('click', createRandomNumber);