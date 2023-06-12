const start = document.getElementById('start')
const dice = document.getElementById('dice');
const point = document.getElementById('point');

start.addEventListener('click', function () {
    // 產生1-6隨機數字
    const rand = Math.floor(Math.random() * 6) + 1

    let diceType = ''

    switch (rand) {
        case 1:
            diceType = 'one';
            break;
        case 2:
            diceType = 'two';
            break;
        case 3:
            diceType = 'three';
            break;
        case 4:
            diceType = 'four';
            break;
        case 5:
            diceType = 'five';
            break;
        case 6:
        default:
            diceType = 'six';
            break;

    }

    dice.innerHTML = `<i class="fas fa-dice-${diceType}"></i>`
    point.innerText = rand + ' 點'
})