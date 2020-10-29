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
    let display = document.querySelector('.calc-display');
    let currentDisplay = document.querySelector('.current-text');
    display.innerHTML = '0'
    addBtnEvents(display);
    addKeyEvents(display, currentDisplay);
}

function addBtnEvents(display) {
    for (let i = 0; i < 10; i++) {
        document.querySelector(`#btn-${i}`).addEventListener('click', function (event) {
            if (display.innerHTML.length === 1 && display.innerHTML === '0') display.innerHTML = `${i}`;
            else display.innerHTML += `${i}`
        })
    }
}

function addKeyEvents(display, currentDisplay) {
    let decimalPresent = false;
    window.addEventListener('keyup', event => {
        event.preventDefault();
        switch (event.key) {
            case '0':
                if (display.innerHTML.length != 0) display.innerHTML += '0';
                break;
            case '1':
                if (display.innerHTML.length === 1 && display.innerHTML === '0') display.innerHTML = '1';
                else display.innerHTML += '1';
                break;
            case '2':
                if (display.innerHTML.length === 1 && display.innerHTML === '0') display.innerHTML = '2';
                else display.innerHTML += '2';
                break;
            case '3':
                if (display.innerHTML.length === 1 && display.innerHTML === '0') display.innerHTML = '3';
                else display.innerHTML += '3';
                break;
            case '4':
                if (display.innerHTML.length === 1 && display.innerHTML === '0') display.innerHTML = '4';
                else display.innerHTML += '4';
                break;
            case '5':
                if (display.innerHTML.length === 1 && display.innerHTML === '0') display.innerHTML = '5';
                else display.innerHTML += '5';
                break;
            case '6':
                if (display.innerHTML.length === 1 && display.innerHTML === '0') display.innerHTML = '6';
                else display.innerHTML += '6';
                break;
            case '7':
                if (display.innerHTML.length === 1 && display.innerHTML === '0') display.innerHTML = '7';
                else display.innerHTML += '7';
                break;
            case '8':
                if (display.innerHTML.length === 1 && display.innerHTML === '0') display.innerHTML = '8';
                else display.innerHTML += '8';
                break;
            case '9':
                if (display.innerHTML.length === 1 && display.innerHTML === '0') display.innerHTML = '9';
                else display.innerHTML += '9';
                break;
            case '.':
                if (!decimalPresent) {
                    display.innerHTML += '.';
                    decimalPresent = true;
                } else {
                    console.log('Error!')
                }
                break;
            case '*':
                if (currentDisplay.innerHTML[currentDisplay.innerHTML.length - 1] == undefined) {
                    currentDisplay.innerHTML = display.innerHTML + ' * ';
                    display.innerHTML = '0';
                    decimalPresent = false;
                }
                break;
            case '+':
                if (currentDisplay.innerHTML[currentDisplay.innerHTML.length - 1] == undefined) {
                    currentDisplay.innerHTML = display.innerHTML + ' + ';
                    display.innerHTML = '0';
                    decimalPresent = false;
                }
                break;
            case '-':
                if (currentDisplay.innerHTML[currentDisplay.innerHTML.length - 1] == undefined) {
                    currentDisplay.innerHTML = display.innerHTML + ' - ';
                    display.innerHTML = '0';
                    decimalPresent = false;
                }
                break;
            case 'Enter':
                console.log('Enter');
                break;
            case 'Backspace':
                console.log('backspace')
        }
    })
    window.addEventListener('keydown', event => {
        if (event.key === '/') {
            event.preventDefault();
            if (currentDisplay.innerHTML[currentDisplay.innerHTML.length - 1] == undefined) {
                currentDisplay.innerHTML = display.innerHTML + ' / ';
                display.innerHTML = '0';
                decimalPresent = false;
            }
        }
    })
}