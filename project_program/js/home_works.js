//Homework 1 part 1
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





//Homework 1 part 2
const child_block = document.querySelector(".child_block");

let block_left = 0;
const moveBlockLeft = () => {
    block_left++
    if (block_left <= 450){
        requestAnimationFrame(moveBlockLeft)
        child_block.style.left = `${block_left}px`
    }
}
moveBlockLeft()




