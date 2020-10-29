// Globals
const mathExp = [];
let input = '';


// notes
// document.querySelector('.calc-display').innerHTML = 'this';
// document.querySelector('.calc-display').innerHTML = 'that';


// let input = '';
// console.log(input);
// input += '3';
// input += 4;
// console.log(input);
// test();
// console.log(input);
// function test(){
//     input = '';
// }


window.onload = function () {
    addBtnEvents();
    addKeyEvents();
}

function addBtnEvents() {
    for (let i = 0; i < 10; i++) {
        document.querySelector(`#btn-${i}`).addEventListener('click', function (event) {
            console.log(`clicked ${i}`);
        })
    }
}

function addKeyEvents() {
    let display = document.querySelector('.calc-display');
    let decimalPresent = false;
    window.addEventListener('keyup', event => {
        switch (event.key) {
            case '0':
                if (display.innerHTML.length != 0) display.innerHTML += '0';
                break;
            case '1':
                display.innerHTML += '1';
                break;
            case '2':
                display.innerHTML += '2';
                break;
            case '3':
                display.innerHTML += '3';
                break;
            case '4':
                display.innerHTML += '4';
                break;
            case '5':
                display.innerHTML += '5';
                break;
            case '6':
                display.innerHTML += '6';
                break;
            case '7':
                display.innerHTML += '7';
                break;
            case '8':
                display.innerHTML += '8';
                break;
            case '9':
                display.innerHTML += '9';
                break;
            case '.':
                if (!decimalPresent){ 
                    display.innerHTML += '.';
                    decimalPresent = true;
                } else {
                    console.log('Error!')
                }
                break;
            case '/':
                console.log('/');
                break;
            case '*':
                console.log('*');
                break;
            case '+':
                console.log('+');
                break;
            case '-':
                console.log('-');
                break;
            case 'Enter':
                console.log('Enter');
                break;
            case 'Backspace':
                console.log('backspace')
        }
    })
}