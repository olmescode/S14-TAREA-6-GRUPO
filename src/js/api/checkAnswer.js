// Wait for a specified amount of time using a Promise
function wait(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

// Check if the clicked button's image matches the correct animal
async function checkAnswer(event, selectedGame, soundPlayer) {
    const clickedButton = event.target;
    const imageKey = clickedButton.getAttribute('data-image-key');

    if (imageKey === selectedGame.currentAnimalKey) {
        message.innerHTML = selectedGame.dialogues.correctAnswer;
        removeButton(clickedButton);
        soundPlayer.removeSound(imageKey)

        await wait(2000)
        message.innerHTML = selectedGame.dialogues.question;
    } else {
        message.innerHTML = selectedGame.dialogues.incorrectAnswer;
        await wait(2000)
        message.innerHTML = selectedGame.dialogues.question;
    }

    if (checkGameCompletion(selectedGame.imageButtons)) {
        message.innerHTML = selectedGame.dialogues.victory;

        selectedGame.isGameInProgress = false;
    }
}

// Hide a button element
function removeButton(clickedButton) {
    clickedButton.style.display = 'none';
}

// Check if all game images are hidden, indicating game completion
function checkGameCompletion(imageButtons) {
    for (let i = 0; i < imageButtons.length; i++) {
        if (imageButtons[i].style.display !== 'none') {
            return false;
        }
    }
    return true;
}

export {checkAnswer};