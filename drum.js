let currentAudio = {}; 

function playSound(key) {
    let soundFile;

    switch (key) {
        case "w":
            soundFile = "amen-break-no-copyright-remake-120bpm-25924.mp3";
            break;
        case "a":
            soundFile = "beat-drums-4_4_120bpm-9sek-275095.mp3";
            break;
        case "s":
            soundFile = "drums-beat-302606.mp3";
            break;
        case "d":
            soundFile = "drums-beat-302606.mp3";
            break;
        case "j":
            soundFile = "trap-drums-loop-sound-effect-311578.mp3";
            break;
        case "k":
            soundFile = "drums-beat-302606.mp3";
            break;
        case "l":
            soundFile = "trap-drums-loop-sound-effect-311578.mp3";
            break;
        default:
            console.log("Unrecognized key: " + key);
            return;
    }

    const audio = new Audio(soundFile);
    audio.loop = true;
    audio.play();
    currentAudio[key] = audio;
}

function stopSound(key) {
    if (currentAudio[key]) {
        currentAudio[key].pause();
        currentAudio[key].currentTime = 0;
        delete currentAudio[key];
    }
}


document.querySelectorAll(".drum").forEach(function (button) {
    const key = button.id;

    button.addEventListener("mousedown", function () {
        if (!currentAudio[key]) {
            playSound(key);
        }
    });

    button.addEventListener("mouseup", function () {
        stopSound(key);
    });

    button.addEventListener("mouseleave", function () {
        stopSound(key);
    });
});


document.addEventListener("keydown", function (event) {
    const key = event.key.toLowerCase();
    if (!currentAudio[key]) {
        playSound(key);
    }
});

document.addEventListener("keyup", function (event) {
    const key = event.key.toLowerCase();
    stopSound(key);
});
