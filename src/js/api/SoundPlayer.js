class SoundPlayer {
    constructor() {
        this.randomSound = null;
        this.usedSounds = [];
    }

    removeSound(soundKey) {
        this.usedSounds.push(soundKey);
    }

    getUsedSounds() {
        return this.usedSounds;
    }

    playRandomSound(selectedGame) {
        if (selectedGame && selectedGame.gameInProgress) {
            let sounds = selectedGame['sounds'];
            const soundKeys = Object.keys(sounds);

            const availableSounds = soundKeys.filter((soundKey) => !this.usedSounds.includes(soundKey));

            const randomIndex = Math.floor(Math.random() * availableSounds.length);
            const randomSoundKey = availableSounds[randomIndex];

            this.randomSound = new Audio(sounds[randomSoundKey]);
            this.randomSound.volume = 0.2;
            this.randomSound.play();

            return randomSoundKey;
        }
    }
}

export default SoundPlayer;
