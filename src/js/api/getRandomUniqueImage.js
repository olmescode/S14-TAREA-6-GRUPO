// Get a random unique image key and URL from the provided images
const usedImages = [];

function getRandomUniqueImage(images) {
    const imageKeys = Object.keys(images);

    const availableImages = imageKeys.filter((imageKey) => !usedImages.includes(imageKey));

    if (availableImages.length === 0) {
        usedImages.length = 0;
    }

    const randomIndex = Math.floor(Math.random() * availableImages.length);
    const randomImageKey = availableImages[randomIndex];

    usedImages.push(randomImageKey);

    return { key: randomImageKey, image: images[randomImageKey] };
}

export {getRandomUniqueImage};