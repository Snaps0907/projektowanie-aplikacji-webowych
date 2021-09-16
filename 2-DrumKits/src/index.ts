let clapSound: HTMLAudioElement;
let boomSound: HTMLAudioElement;
let hihatSound: HTMLAudioElement;
let kickSound: HTMLAudioElement;
let openhatSound: HTMLAudioElement;
let rideSound: HTMLAudioElement;
let snareSound: HTMLAudioElement;
let tinkSound: HTMLAudioElement;
let tomSound: HTMLAudioElement;
const btnRecordChannel: NodeListOf<Element> = document.querySelectorAll(".recordChannel button");
const btnPlayChannel: NodeListOf<Element> = document.querySelectorAll(".playchannel button");
const btnTimer1: HTMLButtonElement = document.querySelector(".timer1");
const btnTimer2: HTMLButtonElement = document.querySelector(".timer2");
const btnTimer3: HTMLButtonElement = document.querySelector(".timer3");


const channel1: any[] = [];
const channel2: any[] = [];
const channel3: any[] = [];
const channel4: any[] = [];
let recordTime1: number;
let recordTime2: number;
let recordTime3: number;
let recordTime4: number;
let recordingChannel: number;
let timer: number;
appStart();

function appStart(): void {
    for (let i = 0; i < btnRecordChannel.length; i++) {
        btnRecordChannel[i].addEventListener("click", function () {
            recordChannel1(i + 1)
            record;
            this.classList.add("active");
            setTimeout(function () {
                btnRecordChannel[i].classList.remove("active");
            }, timer);
        });
        btnRecordChannel[i].addEventListener("click", record);
    }
    getAudioTags();
    setTimer();
    noRecordPlay();
}
function setTimer() {
    timer = 3000;
    removeActive();
    btnTimer1.classList.add("active");
    btnTimer1.addEventListener("click", function () {
        timer = 3000;
        removeActive();
        this.classList.add("active");
    })
    btnTimer2.addEventListener("click", function () {
        timer = 6000;
        removeActive();
        this.classList.add("active");
    })
    btnTimer3.addEventListener("click", function () {
        timer = 10000;
        removeActive();
        this.classList.add("active");
    })
}
function removeActive() {
    const btnTimer = document.querySelectorAll(".timer button")
    btnTimer.forEach(element => {
        element.classList.remove("active")
    });
}

function onPlayChannel1(elem:any) {
    if (elem == 1) {
        channel1.forEach(sound => {
            setTimeout(() => playSound(sound.key), sound.time)
        })
    } else if (elem == 2) {
        channel2.forEach(sound => {
            setTimeout(() => playSound(sound.key), sound.time)
        })
    } else if (elem == 3) {
        channel3.forEach(sound => {
            setTimeout(() => playSound(sound.key), sound.time)
        })
    } else if (elem == 4) {
        channel4.forEach(sound => {
            setTimeout(() => playSound(sound.key), sound.time)
        })
    }
}

function record(ev: MouseEvent): void {
    if (recordingChannel == 1) {
        recordTime1 = ev.timeStamp;
        channel1.length = 0;
    } else if (recordingChannel == 2) {
        recordTime2 = ev.timeStamp;
        channel2.length = 0;
    } else if (recordingChannel == 3) {
        recordTime3 = ev.timeStamp;
        channel3.length = 0;
    } else if (recordingChannel == 4) {
        recordTime4 = ev.timeStamp;
        channel4.length = 0;
    }
}

function onKeyDown(ev: KeyboardEvent): void {
    const key = ev.key;
    if (recordingChannel == 1) {
        const time = ev.timeStamp - recordTime1;
        channel1.push({ key, time });
    } else if (recordingChannel == 2) {
        const time = ev.timeStamp - recordTime2;
        channel2.push({ key, time });
    } else if (recordingChannel == 3) {
        const time = ev.timeStamp - recordTime3;
        channel3.push({ key, time });
    } else if (recordingChannel == 4) {
        const time = ev.timeStamp - recordTime4;
        channel4.push({ key, time });
    }
    playSound(key);
}
function recordChannel1(elem: number) {
    recordingChannel = elem;
    window.addEventListener("keypress", onKey);
    setTimeout(function () {
        window.removeEventListener("keypress", onKey);
    }, timer);
    const recordingChannel2 = "#playChannel" + elem;
    const btnPlayChannel = document.querySelector(recordingChannel2);
    btnPlayChannel.addEventListener("click", function () {
        onPlayChannel1(elem)
    });
    function onKey(ev: KeyboardEvent) {
        onKeyDown(ev);
    }
}
function noRecordPlay(){
    window.addEventListener("keypress", onKey);
    function onKey(ev: KeyboardEvent) {
        onKeyDown(ev);
    }
}
function getAudioTags() {
    clapSound = document.querySelector('[data-audio="clap"]');
    boomSound = document.querySelector('[data-audio="boom"]');
    hihatSound = document.querySelector('[data-audio="hihat"]');
    kickSound = document.querySelector('[data-audio="kick"]');
    openhatSound = document.querySelector('[data-audio="openhat"]');
    snareSound = document.querySelector('[data-audio="snare"]');
    rideSound = document.querySelector('[data-audio="ride"]');
    tinkSound = document.querySelector('[data-audio="tink"]');
    tomSound = document.querySelector('[data-audio="tom"]');
}

function playSound(key: string) {
    switch (key) {
        case "a":
            clapSound.currentTime = 0;
            clapSound.play();
            break;
        case "s":
            boomSound.currentTime = 0;
            boomSound.play();
            break;
        case "d":
            hihatSound.currentTime = 0;
            hihatSound.play();
            break;
        case "f":
            kickSound.currentTime = 0;
            kickSound.play();
            break;
        case "g":
            openhatSound.currentTime = 0;
            openhatSound.play();
            break;
        case "h":
            rideSound.currentTime = 0;
            rideSound.play();
            break;
        case "j":
            tinkSound.currentTime = 0;
            tinkSound.play();
            break;
        case "k":
            tomSound.currentTime = 0;
            tomSound.play();
            break;
    }
}