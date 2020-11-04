// Globals
// const mathExp = [];
// let input = '';

/*
TODO:
Need error for case where decimal has no number (ie 3+.-2)
Flash display window red color when try to do something wrong like 2 decimal points (ie 3.234.4 )

*/

function solveExpression(display) {
    display = display.filter(Boolean);
    let mathOperators = ['-', '*', '+', '÷'];
    if (mathOperators.includes(display[display.length - 1])) return 'Incomplete';
    if (display.length == 1) return display[0];
    else if (display.length == 2 && display[0] == '-') return ' - ' + display[1];

    let index = 0;
    for (let item in display) {
        if ((item == '-' && ['*', '÷'].includes(display[index - 1])) ||
            (item == '-' && index == 0)) {
            if (index == 0) {
                display.shift();
                display[0] = (Number(display[0]) * -1).toString();
            } else {
                display[index + 1] = (Number(display[index + 1]) * -1).toString();
                display.splice(index, 1);
            }
        }
        index++;
    }
    console.log(display)
    // let multiplication = display.indexOf('*') == -1 ? 0 : 4;
    // let division = display.indexOf('÷') == -1 ? 0 : 3;
    // let addition = display.indexOf('+') == -1 ? 0 : 2;
    // let subtraction =  display.indexOf('-') == -1 ? 0 : 1;

    // switch(Math.max(multiplication, division, addition, subtraction)){

    // }

    // console.log(multiplication, division, addition, subtraction);
}

// function addition() {

// }

// function subtraction() {

// }

// function multiplication() {

// }

// function division() {

// }




window.onload = () => {
    let display = document.querySelector('.calc-display');
    let currentDisplay = document.querySelector('.current-text');
    display.innerHTML = '0';
    clickEvents(display, currentDisplay);
    keyboardEvents(display, currentDisplay);
}

function clickEvents(display, currentDisplay) {
    let decimalPresent = false;

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
        if (display.innerHTML[display.innerHTML.length - 2] != '*' &&
            !['÷', '+', '-'].includes(display.innerHTML[display.innerHTML.length - 2])) {
            display.innerHTML += ' * ';
            decimalPresent = false;
        }
    })
    document.querySelector('#btn-add').addEventListener('click', () => {
        if (display.innerHTML[display.innerHTML.length - 2] != '+' &&
            !['÷', '*', '-'].includes(display.innerHTML[display.innerHTML.length - 2])) {
            display.innerHTML += ' + ';
            decimalPresent = false;
        }
    })
    document.querySelector('#btn-sub').addEventListener('click', () => {
        if (display.innerHTML[0] == '0') {
            display.innerHTML = ' - ';
        } else if (display.innerHTML[display.innerHTML.length - 2] != '-') {
            if (display.innerHTML[display.innerHTML.length - 2] == '+') {
                let deletedOperator = display.innerHTML.slice(0, display.innerHTML.length - 2);
                display.innerHTML = deletedOperator + ' - '
            } else {
                display.innerHTML += ' - ';
                decimalPresent = false;
            }
        } else if (display.innerHTML[display.innerHTML.length - 2] == '-' &&
            !['*', '÷'].includes(display.innerHTML[display.innerHTML.length - 5]) &&
            display.innerHTML.length != 3) {
            console.log(display.innerHTML.length)
            let deletedOperator = display.innerHTML.slice(0, display.innerHTML.length - 2);
            display.innerHTML = deletedOperator + ' + ';
        }
    })
    document.querySelector('#btn-divide').addEventListener('click', () => {
        if (display.innerHTML[display.innerHTML.length - 2] != '÷' &&
            !['*', '+', '-'].includes(display.innerHTML[display.innerHTML.length - 2])) {
            display.innerHTML += ' ÷ ';
            decimalPresent = false;
        }
    })
    document.querySelector('#btn-equal').addEventListener('click', () => {

        let solvedExp = solveExpression(display.innerHTML.trim().split(' '));
        if (solvedExp != 'Incomplete') {
            currentDisplay.innerHTML = display.innerHTML;
            display.innerHTML = solvedExp;
        } else {
            console.log('Create a red border to indicate error')
        }
    })
    document.querySelector('#btn-del').addEventListener('click', () => {
        if (display.innerHTML.length != 1 && display.innerHTML[display.innerHTML.length - 1] != '0') {
            let deletedOperator = display.innerHTML.slice(0, display.innerHTML.length - 2);
            display.innerHTML = deletedOperator;
        } else if (display.innerHTML.length == 1) {
            display.innerHTML = '0';
        }
    })
    document.querySelector('#btn-clear').addEventListener('click', () => {
        display.innerHTML = '0';
    })
}

function keyboardEvents(display, currentDisplay) {
    let decimalPresent = false;
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
                if (display.innerHTML[display.innerHTML.length - 1] != '*' &&
                    !['÷', '+', '-'].includes(display.innerHTML[display.innerHTML.length - 1])) {
                    display.innerHTML += '*';
                    decimalPresent = false;
                }
                break;
            case '+':
                if (display.innerHTML[display.innerHTML.length - 1] != '+' &&
                    !['÷', '*', '-'].includes(display.innerHTML[display.innerHTML.length - 1])) {
                    display.innerHTML += '+';
                    decimalPresent = false;
                }
                break;
            case '-':
                if (display.innerHTML[display.innerHTML.length - 1] != '-') {
                    if (display.innerHTML[display.innerHTML.length - 1] == '+') {
                        let deletedOperator = display.innerHTML.slice(0, display.innerHTML.length - 1);
                        display.innerHTML = deletedOperator + '-'
                    } else {
                        display.innerHTML += '-';
                        decimalPresent = false;
                    }
                } else if (display.innerHTML[display.innerHTML.length - 1] == '-' &&
                    !['*', '÷'].includes(display.innerHTML[display.innerHTML.length - 2])) {
                    let deletedOperator = display.innerHTML.slice(0, display.innerHTML.length - 1);
                    display.innerHTML = deletedOperator + '+';
                }
                break;
            case 'Enter':
                currentDisplay.innerHTML = display.innerHTML;
                parseExpression(currentDisplay);
                display.innerHTML = '999';
                break;
        }
    })
    window.addEventListener('keydown', event => {
        if (event.key === '/') {
            event.preventDefault();
            if (display.innerHTML[display.innerHTML.length - 1] != '÷' &&
                !['*', '+', '-'].includes(display.innerHTML[display.innerHTML.length - 1])) {
                display.innerHTML += '÷';
                decimalPresent = false;
            }
        }
    })
    window.addEventListener('keydown', event => {
        if (event.key === 'Backspace') {
            if (display.innerHTML.length != 1 && display.innerHTML[display.innerHTML.length - 1] != '0') {
                let deletedOperator = display.innerHTML.slice(0, display.innerHTML.length - 1);
                display.innerHTML = deletedOperator;
            } else if (display.innerHTML.length == 1) {
                display.innerHTML = '0';
            }
        }
    })
}