const bgSound = new Audio('./sound/bg.mp3');
const alertSound = new Audio('./sound/game_win.mp3');
const carrotSound = new Audio('./sound/carrot_pull.mp3');
const bugSound = new Audio('./sound/bug_pull.mp3');

export function playCarrot() {
    playSound(carrotSound);
};

export function playBug() {
    playSound(bugSound);
};

export function playAlert() {
    playSound(alertSound);
};

export function playBG() {
    playSound(bgSound);
};

export function stopBG() {
    pauseSound(bgSound);
};

const playSound = (sound) => {
    sound.currentTime = 0;
    sound.play();
};

const pauseSound = (sound) => {
    sound.pause();
};

