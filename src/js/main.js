// DOM elements
const startButton = document.getElementById('startButton');
const loginButton = document.getElementById('loginButton');

// Pages
const MENU_PAGE = '/src/pages/menu_page.html'
//const MENU_PAGE = '../../index.html'

function changePage(page) {
    location.href = page;
};

// Event listener for the start Button
startButton.addEventListener('click', function(){
    changePage(MENU_PAGE)
});

// Event listener for the login Button
loginButton.addEventListener('click', function(){
    changePage(MENU_PAGE)
});
