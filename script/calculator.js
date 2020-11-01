// Globals
// const mathExp = [];
// let input = '';



function parseExpression(currentDisplay) {
    // console.log(currentDis1+play, operator);
    let expression = currentDisplay.innerHTML;
    console.log(expression);
}

function addition() {

}

function subtraction() {

}

function multiplication() {

}

function division() {

}




window.onload = () => {
    let display = document.querySelector('.calc-display');
    let currentDisplay = document.querySelector('.current-text');
    display.innerHTML = '0';
    clickEvents(display, currentDisplay);
    keyboardEvents(display, currentDisplay);
}

function clickEvents(display, currentDisplay) {
    let decimalPresent = false;
    let mathOperators = ['*', '+', '-', '÷'];

    for (let i = 0; i < 10; i++) {
        document.querySelector(`#btn-${i}`).addEventListener('click', () => {
            if (display.innerHTML.length === 1 && display.innerHTML === '0') display.innerHTML = `${i}`;
            else display.innerHTML += `${i}`
        })
    }
    document.querySelector('#btn-period').addEventListener('click', () => {
        if (!decimalPresent) {
            display.innerHTML += '.';
            decimalPresent = true;
        } else {
            console.log('Error!')
        }
    })
    document.querySelector('#btn-multi').addEventListener('click', () => {
        if (currentDisplay.innerHTML[currentDisplay.innerHTML.length - 1] == undefined 
            || mathOperators.includes(currentDisplay.innerHTML[currentDisplay.innerHTML.length - 2])) {
            display.innerHTML += ' * ';
            decimalPresent = false;
        }
    })
    document.querySelector('#btn-add').addEventListener('click', () => {
        if (currentDisplay.innerHTML[currentDisplay.innerHTML.length - 1] == undefined
            || mathOperators.includes(currentDisplay.innerHTML[currentDisplay.innerHTML.length - 2])) {
                display.innerHTML += ' + ';
            decimalPresent = false;
        }
    })
    document.querySelector('#btn-sub').addEventListener('click', () => {
        if (currentDisplay.innerHTML[currentDisplay.innerHTML.length - 1] == undefined
            || mathOperators.includes(currentDisplay.innerHTML[currentDisplay.innerHTML.length - 2])) {
                display.innerHTML += ' - ';
            decimalPresent = false;
        }
    })
    document.querySelector('#btn-divide').addEventListener('click', () => {
        if (currentDisplay.innerHTML[currentDisplay.innerHTML.length - 1] == undefined
            || mathOperators.includes(currentDisplay.innerHTML[currentDisplay.innerHTML.length - 2])) {
                display.innerHTML += ' ÷ ';
            decimalPresent = false;
        }
    })
}

function keyboardEvents(display, currentDisplay) {
    let decimalPresent = false;
    let mathOperators = ['*', '+', '-', '÷'];
    window.addEventListener('keyup', event => {
        // becasue '/' key is a hotkey for firefox
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
                if (currentDisplay.innerHTML[currentDisplay.innerHTML.length - 1] == undefined
                    || mathOperators.includes(currentDisplay.innerHTML[currentDisplay.innerHTML.length - 2])) {
                    display.innerHTML += ' * ';
                    decimalPresent = false;
                }
                break;
            case '+':
                if (currentDisplay.innerHTML[currentDisplay.innerHTML.length - 1] == undefined
                    || mathOperators.includes(currentDisplay.innerHTML[currentDisplay.innerHTML.length - 2])) {
                    display.innerHTML += ' + ';
                    decimalPresent = false;
                }
                break;
            case '-':
                if (currentDisplay.innerHTML[currentDisplay.innerHTML.length - 1] == undefined
                    || mathOperators.includes(currentDisplay.innerHTML[currentDisplay.innerHTML.length - 2])) {
                    display.innerHTML += ' - ';
                    decimalPresent = false;
                }
                break;
            case 'Enter':
                // console.log('Enter');
                currentDisplay.innerHTML += display.innerHTML + ' = ';
                display.innerHTML = '';
                parseExpression(currentDisplay);
                break;
            case 'Backspace':
                console.log('backspace')
        }
    })
    window.addEventListener('keydown', event => {
        if (event.key === '/') {
            event.preventDefault();
            if (currentDisplay.innerHTML[currentDisplay.innerHTML.length - 1] == undefined
                || mathOperators.includes(currentDisplay.innerHTML[currentDisplay.innerHTML.length - 2])) {
                display.innerHTML += ' ÷ ';
                decimalPresent = false;
            }
        }
    })
}