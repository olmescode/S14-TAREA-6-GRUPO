import SoundPlayer from './api/SoundPlayer.js'
import { getSelectedButtonName } from './appState.js'
import { PlayButtonsDictionary } from './PlayButtonsDictionary.js'
import { checkAnswer } from './api/checkAnswer.js'
import { getRandomUniqueImage } from './api/getRandomUniqueImage.js'

// DOM elements
const titlePage = document.getElementById('titlePage');
const mainImage = document.getElementById('mainImage');
const message = document.getElementById('message');
const playButton = document.getElementById('playButton');
const restartButton = document.getElementById('restartButton');
const returnButton = document.getElementById('returnButton');
const imageButtons = document.getElementsByClassName('image-button');

// Pages
const MENU_PAGE = '/src/pages/menu_page.html'

// Crear una instancia de la clase
const soundPlayer = new SoundPlayer();
let selectedGame = null

// Initialize the game page on window load
function initializePage() {    
    let selectedButtonName = getSelectedButtonName();
    let usedSounds = soundPlayer.getUsedSounds()

    usedSounds.length = 0

    if (selectedButtonName) {
        selectedGame = PlayButtonsDictionary[selectedButtonName];
        let images = selectedGame['images']
        
        selectedGame.imageButtons = imageButtons
        selectedGame.gameInProgress = true

        //
        titlePage.innerText = selectedGame.title;
        mainImage.src = selectedGame.mainImage
        message.innerHTML = selectedGame.dialogues.question

        for (let i = 0; i <= selectedGame.containers; i++) {
            const currentImageButton = imageButtons[i];
            const { key: ImageKey, image: ImageUrl } = getRandomUniqueImage(images);

            currentImageButton.style.display = ''
            currentImageButton.style.backgroundImage = `url('${ImageUrl}')`;

            currentImageButton.setAttribute('data-image-key', ImageKey);
            currentImageButton.addEventListener('click', function(event) {
                checkAnswer(event, selectedGame, soundPlayer)
            })
        };
    }
}

// Event listeners
playButton.addEventListener('click', function() {
    let animalSoundKey = soundPlayer.playRandomSound(selectedGame)
    selectedGame.currentAnimalKey = animalSoundKey
});

restartButton.addEventListener('click', initializePage);

returnButton.addEventListener('click', function() {
    location.href = MENU_PAGE
});

window.addEventListener('load', initializePage);
