const button = document.querySelector('.btn');
const input = document.querySelector('#num');
const helper = document.querySelector('.help');
const helpText = document.querySelector('.helpText');
const amount = document.querySelector('.amount');

let number = Math.round(Math.random() * 100);
let count = 0;

const disable = () => {
    input.setAttribute("disabled", "disabled");
    button.setAttribute("disabled", "disabled");
}

const enable = () => {
    input.removeAttribute("disabled");
    button.removeAttribute("disabled");
}


const startNew = (e) => {
    const nodes = document.querySelectorAll('.hp');
    number = Math.round(Math.random() * 100);
    input.value = '';
    helper.removeChild(e.currentTarget)
    for(const node of nodes) {
        node.innerHTML = '';
    }
    enable();
}

const reset = () => {
    const startNewGame = document.createElement('button');
    startNewGame.innerHTML = 'Начать новую игру';
    helper.append(startNewGame);
    startNewGame.onclick = startNew;
    count = 0;
    disable()
}

const game = (num) => {

    if(input.value === num.toString()) {
        helpText.innerText = 'Отлично! Вы угадали число = ' + num;
        helpText.style.color = 'green';
        reset();
    } else if (input.value < num.toString()) {
        helpText.innerHTML = 'Слишком мало';
        helpText.style.color = 'red';
    } else if(input.value > num.toString()) {
        helpText.innerHTML = 'Слишком много';
        helpText.style.color = 'red';
    }

    count ++;
    count === 1
        ? amount.innerHTML += 'Прошлые попытки: ' + input.value
        : amount.innerHTML += ' ' + input.value
    helper.append(amount)

    if(count === 10) {
        helpText.innerText = 'Вы неугадали, попробуйте снова';
        reset();
    }

    input.focus();
}



button.addEventListener('click', () => game(number));

