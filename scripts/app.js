let editedPlayer = 0;

const players = [
    {
        name: '',
        Symbol: 'X'
    },
    {
        name: '',
        Symbol: 'O'
    }
];


const playerConfigOverlayElement = document.getElementById('config-overlay');
const backdropElement = document.getElementById('backdrop');
const formElement = document.getElementById('name-input');
const errorsOutput = document.getElementById('config-errors');

const editPlayer1BtnElement = document.getElementById('edit-player-1-btn');
const editPlayer2BtnElement = document.getElementById('edit-player-2-btn');
const cancelConfigBtnElement =document.getElementById('cancel-config-btn');


editPlayer1BtnElement.addEventListener('click', openPlayerConfig);
editPlayer2BtnElement.addEventListener('click', openPlayerConfig);
cancelConfigBtnElement.addEventListener('click', closePlayerConfig);
backdropElement.addEventListener('click' , closePlayerConfig);
formElement.addEventListener('submit', savePlayerConfig)