import { storeSelectedButtonName, getSelectedButtonName} from './appState.js'

// DOM elements
const juegoDeSonidosButton = document.getElementById('juegoDeSonidosButton');
const juegoDeColoresButton = document.getElementById('juegoDeColoresButton');
const game3Button = document.getElementById('game3Button');
const returnButton = document.getElementById('returnButton');

// Pages
const MAIN_PAGE = '/src/index.html'
const GAME_APP = '/src/pages/game_app.html'
//const MENU_PAGE = '../../index.html'

function changePage(page) {
    location.href = page;
};

function handleButtonClick(event) {
    storeSelectedButtonName(event.target.id);
    changePage(GAME_APP);
};

// Event listeners for buttons
juegoDeSonidosButton.addEventListener('click', handleButtonClick)
juegoDeColoresButton.addEventListener('click', handleButtonClick)


returnButton.addEventListener('click', function(){
    changePage(MAIN_PAGE)
});
