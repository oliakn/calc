let out = document.querySelector('.output')
let buttons = document.querySelectorAll('.calculator button')

let num = ''
let expression = ''
let checkNum = false
let operation = ['+', '-', '/', '*']

buttons.forEach((btn) => {
    btn.addEventListener('click', () => {
        let currentValue = btn.textContent
        if (currentValue === 'c') {
            num = ''
            expression = ''
            out.textContent = '0'
        } else if (currentValue === '=') {
            num =''
            out.textContent = eval(expression) ||0
        } else if (operation.includes(currentValue)) {
            if (operation.includes(expression[expression.length -1])) {
                expression = expression.slice(0, expression.length - 1) + currentValue
            } else {
                if (checkNum === false) {
                    expression = expression + currentValue
                    checkNum = true
                } else {
                    out.textContent = eval(expression)
                    expression = eval(expression) + currentValue
                }
            }
            num = ''
        } else {
            expression = expression + currentValue
            num = num + currentValue
            out.textContent = num
        }
    })
})