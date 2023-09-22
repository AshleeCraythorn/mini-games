const headsButton = document.querySelector('#heads');
const tailsButton = document.querySelector('#tails');
const coinimg = document.querySelector('#coinimg');
const coinResult = document.querySelector('.coinResult');
const coin = document.querySelector('.coin');
const tracking = document.querySelector('.tracking');
const coinForm = document.querySelector('.coinForm');
const options = ['heads', 'tails'];
let wins = parseInt(0);
let losses = parseInt(0);

coinForm.addEventListener('click', function (e) {
    e.preventDefault();

    const tossNumber = Math.round(Math.random() * 1);

    const toss = options[tossNumber];

    const choice = e.target.value;


    if (toss === 'heads') {
        coinimg.src = 'img/heads.jpg';
    }
    else {
        coinimg.src = 'img/tails.jpg';
    }



    if (choice === toss) {
        coinResult.innerHTML = `You chose ${choice} <br> 
    The toss is ${toss} <br>
    You chose wisely`;
        wins += 1;
    }

    else {
        coinResult.innerHTML = `You chose ${choice} <br> 
    The toss is ${toss} <br>
    Sorry, wrong choice`;
        losses += 1;
    }


    tracking.innerHTML = `Wins = ${wins} Losses = ${losses}`;
})