const channel1: any[] = [];
let clapAudio: HTMLAudioElement; 
let boomAudio: HTMLAudioElement;
let hihatAudio: HTMLAudioElement;
let sounds={
    'boom':'q',
    'clap':'w',
    'hihat':'e',
    'kick':'a',
    'openhat':'s',
    'ride':'d',
    'snare':'z',
    'tink':'x',
    'tom':'c',
}
appStart();
function appStart(): void{
    const playChannel1Btn: HTMLButtonElement = document.querySelector('#playChannel1');

document.body.addEventListener('keypress', onKeyDown);
playChannel1Btn.addEventListener('click', onPlayChannel1);
getSounds();
}


function getSounds(){
    clapAudio=document.querySelector('[data-sound="clap"]');
    boomAudio=document.querySelector('[data-sound="boom"]');
    hihatAudio=document.querySelector('[data-sound="hihat"]');
}

function onKeyDown(ev: KeyboardEvent): void {

    const key = ev.key;
    const time = ev.timeStamp;

    channel1.push({
        key,
        time
    });

    playSound(key);
    console.log(channel1)
}

function playSound(key: string):void {
    switch (key){
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

function onPlayChannel1(): void {
    playChanne1();
}

function playChanne1(): void {
    let prevTime = 0;
    channel1.forEach(sound => {
        const timeout = sound.time - prevTime;
        setTimeout(() => playSound(sound.key), timeout);
    });
}