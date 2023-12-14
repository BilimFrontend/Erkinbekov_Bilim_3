//DEFINITION GMAIL
const form_gmail = document.querySelector(".form_gmail");
const [gmail_label,gmail_input,gmail_button,gmail_result] = [...form_gmail.querySelectorAll("#gmail_label, #gmail_input, #gmail_button, #gmail_result")]

const regExp = /\w@gmail.com+$/

gmail_button.onclick = () => {
    if (regExp.test(gmail_input.value)){
        gmail_input.style.boxShadow = `0 0 20px green, 0 0 50px green`;
    }else{
        gmail_input.style.boxShadow = `0 0 20px red, 0 0 50px red`;
    }
}





//MOVE BLOCK
const child_block = document.querySelector(".child_block");

const parentFreeWidth = 449;
const moveSpeedChildBlock = 10;
let positionX = 0;
let positionY = 0;



const moveBlock = () => {
    if (positionX < parentFreeWidth && positionY === 0){
        positionX++
        child_block.style.left = `${positionX}px`
        setTimeout(moveBlock, moveSpeedChildBlock)
    }else if(positionX >= parentFreeWidth && positionY < parentFreeWidth){
        positionY++
        child_block.style.top = `${positionY}px`
        setTimeout(moveBlock, moveSpeedChildBlock)
    }else if(positionY >= parentFreeWidth && positionX !== 0){
        positionX--
        child_block.style.left = `${positionX}px`
        setTimeout(moveBlock, moveSpeedChildBlock)
    }else if (positionX === 0){
        positionY--
        child_block.style.top = `${positionY}px`
        setTimeout(moveBlock, moveSpeedChildBlock)
    }
}

moveBlock()

//TIMER
const time = document.querySelector(".time")
let seconds = 0;
let interval;
const time_buttons = document.querySelector(".time_buttons")
const [start,stop,reset] = [...time_buttons.querySelectorAll("button")]

const startTimer = () => {
    clearInterval(interval)
    interval = setInterval(() => {
        seconds++
        time.innerHTML = seconds
    }, 1000)
}

const stopTimer = () => {
    clearInterval(interval)
}

const resetTimer = () => {
    clearInterval(interval)
    seconds = 0;
    time.innerHTML = seconds
}


start.onclick = () => {startTimer()}

stop.onclick = () => {stopTimer()}

reset.onclick = () => {resetTimer()}



