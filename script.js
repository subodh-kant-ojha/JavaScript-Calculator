let input = document.getElementById('inputBox');
let buttons = document.querySelectorAll('button');
let string ="";
let arr = Array.from(buttons);
// Function to update input value and string
function updateInput(value) {
    string += value;
    input.value = string;
}

// Event listener for keyboard input
document.addEventListener('keydown', (event) => {
    const key = event.key;
    // Check if the pressed key is a number, operator, or special key
    if (!isNaN(key) || key === '.' || key === '+' || key === '-' || key === '*' || key === '/' || key === '=') {
        event.preventDefault(); // Prevent default action of keyboard input
        if (key === '=') {
            string = eval(string);
            input.value = string;
        } else if (key === 'Backspace') {
            string = string.substring(0, string.length - 1);
            input.value = string;
        } else if (key === 'Escape') {
            string = "";
            input.value = string;
        } else {
            updateInput(key);
        }
    }
});
arr.forEach(button => {
    button.addEventListener('click',(e) =>{
        if(e.target.innerHTML == '='){
            string = eval(string);
            input.value = string;
        }
        else if(e.target.innerHTML == 'AC'){
            string = "";
            input.value =string;
        }
        else if(e.target.innerHTML == 'DEL'){
            string = string.substring(0, string.length-1);
            input.value = string
        }
        else{
            string += e.target.innerHTML;
             input.value = string;
        }

    })
})