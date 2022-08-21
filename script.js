//variables
const main  = document.querySelector('#main');
const rest  = document.querySelector('#rest'); 
const times = document.querySelector('#times'); 

const add = document.querySelector('#add');
const start = document.querySelector('#start');
const timerDiv = document.querySelector('#timer');
let timer = [];

add.addEventListener('click',()=>{
    console.log(main.value);
    console.log(rest.value);
    console.log(times.value);
    for(let i = 0; i<times.value; i++){
        timer.push(parseInt(main.value*1000));
        timer.push(parseInt(rest.value*1000));
    }
    console.log(timer);
});
let watch = [];
let changeWatch = [];
start.addEventListener('click',()=>{
    watch[0] = setInterval(updateTimer, 10,0);
    changeWatch[0] = setTimeout(nextTimer,timer[0],1);
});

function updateTimer(i){
    // console.log();
    console.log(timer[i]);
    deciSec = timer[i]%1000;
    sec = Math.floor(timer[i]/1000);
    sec = sec > 10 ? sec : '0' + sec;
    // deciSec = deciSec > 10 ? deciSec : '0' + deciSec;
    let timerType;
    if(i%2==0)
        timerType = "Main Timer";
    else 
        timerType = "Rest Timer";
    
    timerDiv.innerHTML = `<div>${timerType}</div>
    <div>${sec} : ${deciSec}</div>`
    timer[i]-=10;
    if(timer[i]<0){
        clearInterval(watch[i]);
    }
}

function nextTimer(i){
    if(i<timer.length){
        // clearTimeout(changeWatch[i-1]);
        let next= timer[i];
        watch[i] = setInterval(updateTimer, 10,i);
        changeWatch[i] = setTimeout(nextTimer,next,i+1);
    }
    else{
        // clearTimeout(changeWatch[i-1]);
        clearInterval(watch[i-1]);
    }
}