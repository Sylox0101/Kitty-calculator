const display = document.getElementById('display');


function appendNumber(number) {
    if (display.value === '0') {
        display.value = number;
    } else {
        display.value += number;
    }
}

function appendOperator(operator) {
    const lastChar = display.value.slice(-1);
    
    if (['+', '-', '*', '/'].includes(lastChar)) {
        display.value = display.value.slice(0, -1) + operator;
    } else if (display.value !== '') {
        display.value += operator;
    }
}

function clearDisplay() {
    display.value = '';
}

function calculate() {
    try {
        
        if (display.value !== '') {
            display.value = eval(display.value);
        }
    } catch (error) {
        display.value = 'Error'; 
    }
}