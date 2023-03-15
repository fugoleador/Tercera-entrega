const input = document.getElementById('input');
const buttons = document.querySelectorAll('button');
let operand1 = null;
let operand2 = null;
let operator = null;

buttons.forEach(button => {
    button.addEventListener('click', () => {
        if (button.classList.contains('number')) {
            input.value += button.textContent;
        }

        if (button.classList.contains('operator')) {
            if (operator !== null) {
                operand2 = parseFloat(input.value);
                input.value = calculate(operand1, operand2, operator);
                operand1 = parseFloat(input.value);
                operand2 = null;
                operator = button.textContent;
            } else {
                operand1 = parseFloat(input.value);
                operator = button.textContent;
                input.value = '';
            }
        }

        if (button.id === 'decimal') {
            if (!input.value.includes('.')) {
                input.value += '.';
            }
        }

        if (button.id === 'negate') {
            input.value = parseFloat(input.value) * -1;
        }

        if (button.id === 'percentage') {
            input.value = parseFloat(input.value) / 100;
        }

        if (button.id === 'equals') {
            operand2 = parseFloat(input.value);
            input.value = calculate(operand1, operand2, operator);
            operand1 = null;
            operand2 = null;
            operator = null;
        }

        if (button.id === 'clear') {
            operand1 = null;
            operand2 = null;
            operator = null;
            input.value = '';
        }

        if (button.id === 'backspace') {
            input.value = input.value.slice(0, -1);
        }
    });
});

function calculate(operand1, operand2, operator) {
    switch (operator) {
        case '+':
            return operand1 + operand2;
        case '-':
            return operand1 - operand2;
        case '*':
            return operand1 * operand2;
        case '/':
            return operand1 / operand2;
        default:
            return operand2;
    }
}