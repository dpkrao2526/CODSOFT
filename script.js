document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.btn');
    const display = document.getElementById('display');
    let currentInput = '';
    let operator = '';
    let firstValue = '';
    let secondValue = '';
    let result = '';

    buttons.forEach(button => {
        button.addEventListener('click', function() {
            const value = this.getAttribute('data-value');
            if (value === 'C') {
                currentInput = '';
                operator = '';
                firstValue = '';
                secondValue = '';
                result = '';
                display.innerText = '0';
            } else if (value === '=') {
                secondValue = currentInput;
                if (firstValue && operator && secondValue) {
                    result = eval(firstValue + operator + secondValue);
                    display.innerText = result;
                    firstValue = result;
                    secondValue = '';
                    currentInput = '';
                }
            } else if (['+', '-', '*', '/'].includes(value)) {
                if (firstValue && operator && currentInput) {
                    secondValue = currentInput;
                    result = eval(firstValue + operator + secondValue);
                    display.innerText = result;
                    firstValue = result;
                    secondValue = '';
                    currentInput = '';
                } else {
                    firstValue = currentInput;
                }
                operator = value;
                currentInput = '';
            } else {
                currentInput += value;
                display.innerText = currentInput;
            }
        });
    });
});
