import { Sounds } from './Sounds.js'
import { Images } from './Images.js'
import { Dialogues } from './Dialogues.js';

// Dictionary of main functions, titles and messages
const PlayButtonsDictionary = {
    juegoDeSonidosButton: {
        title: "Juego de Sonidos y Animales",
        mainImage: '../images/GameMini.png',
        containers: 6,
        dialogues: Dialogues.juegoDeSonidosDialogues,
        sounds: Sounds.juegoDeSonidosSounds,
        images: Images.juegoDeSonidosImages,
        selectedGame: [],
        gameInProgress: true,
        currentAnimalKey: "",
        imageButtons: []
    },
    juegoDeColoresButton: {
        title: "Juego de Sonidos y Colores",
        mainImage: '../images/GameMini2.png',
        containers: 6,
        dialogues: Dialogues.juegoDeColoresDialogues,
        sounds: Sounds.juegoDeColoresSounds,
        images: Images.juegoDeColoresImages,
        selectedGame: [],
        gameInProgress: true,
        currentAnimalKey: "",
        imageButtons: []
    },

    // ... (rest of the buttons)
};

export { PlayButtonsDictionary }
//module.exports = playButtons;
