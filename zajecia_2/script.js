var channel1 = [];
var clapAudio;
var boomAudio;
var hihatAudio;
var sounds = {
    'boom': 'q',
    'clap': 'w',
    'hihat': 'e',
    'kick': 'a',
    'openhat': 's',
    'ride': 'd',
    'snare': 'z',
    'tink': 'x',
    'tom': 'c'
};
appStart();
function appStart() {
    var playChannel1Btn = document.querySelector('#playChannel1');
    document.body.addEventListener('keypress', onKeyDown);
    playChannel1Btn.addEventListener('click', onPlayChannel1);
    getSounds();
}
function getSounds() {
    clapAudio = document.querySelector('[data-sound="clap"]');
    boomAudio = document.querySelector('[data-sound="boom"]');
    hihatAudio = document.querySelector('[data-sound="hihat"]');
}
function onKeyDown(ev) {
    var key = ev.key;
    var time = ev.timeStamp;
    channel1.push({
        key: key,
        time: time
    });
    playSound(key);
    console.log(channel1);
}
function playSound(key) {
    switch (key) {
        case 'a':
            clapAudio.currentTime = 0;
            clapAudio.play();
            break;
        case 's':
            boomAudio.currentTime = 0;
            boomAudio.play();
            break;
        case 'd':
            hihatAudio.currentTime = 0;
            hihatAudio.play();
            break;
    }
}
function onPlayChannel1() {
    playChanne1();
}
function playChanne1() {
    var prevTime = 0;
    channel1.forEach(function (sound) {
        var timeout = sound.time - prevTime;
        setTimeout(function () { return playSound(sound.key); }, timeout);
    });
}
