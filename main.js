point = 0
if (localStorage.getItem('score')) {
    var score = localStorage.getItem('score');
}
else {
    var score = 0
    localStorage.setItem('score', '0')
}

document.getElementById('score').innerHTML = score
const options = ['rock', 'paper', 'scissors'];
const optionsHTML = ['<div class="options rock selected" id="rock"><img src="./images/icon-rock.svg" alt=""></div>', '<div class="options paper selected" id="paper"><img src="./images/icon-paper.svg" alt=""></div>', 
'<div class="options scissors selected" id="scissors"><img src="./images/icon-scissors.svg" alt=""></div>']

document.querySelectorAll('.options').forEach(el => {
    el.addEventListener('click', () => {
        let state;
        const computerChoice = options[Math.floor(Math.random()*options.length)];

        if (el.id.toLowerCase()==computerChoice.toLowerCase()) {
            state = 'DRAW';
            score = score
        }
        else if (el.id.toLowerCase()== 'paper' && computerChoice.toLowerCase() == 'rock') {
            state = 'YOU WIN';
            score++
        }
        else if (el.id.toLowerCase()== 'paper' && computerChoice.toLowerCase() == 'scissors') {
            state = 'YOU LOSE';
            score--
        }
        else if (el.id.toLowerCase()== 'scissors' && computerChoice.toLowerCase() == 'rock') {
            state = 'YOU LOSE';
            score--
        }
        else if (el.id.toLowerCase()== 'scissors' && computerChoice.toLowerCase() == 'paper') {
            state = 'YOU WIN';
            score++
        }
        else if (el.id.toLowerCase()== 'rock' && computerChoice.toLowerCase() == 'paper') {
            state = 'YOU LOSE';
            score--
        }
        else if (el.id.toLowerCase()== 'rock' && computerChoice.toLowerCase() == 'scissors') {
            state = 'YOU WIN';
            score++
        }

        localStorage.setItem('score', score)
        choice(optionsHTML[options.indexOf(el.id)], optionsHTML[options.indexOf(computerChoice)], state, score);


    })
})

function choice(yourChoice, computerChoice, outcome, score) {
    document.getElementById('game-options').classList.toggle('hide');
    document.getElementById("choices").classList.toggle('choices');
    document.getElementById('your-choice').innerHTML = yourChoice;
    setTimeout(() => {
        document.getElementById('computer-choice').innerHTML = computerChoice;
    }, 1000)
    setTimeout(() => {
        let result = document.getElementById('win-or-lose');
        result.innerHTML = outcome;
        document.getElementById("outcome").classList.toggle('show')
        document.getElementById('score').innerHTML = score
    }, 2000)
    
}

function reloader() {
    location.reload()
}

function closeModal() {
    document.getElementById('modal-container').style.display = 'none'
}
function openModal() {
    console.log('i')
    document.getElementById('modal-container').style.display = 'block'
}