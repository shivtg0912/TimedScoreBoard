import confetti from 'https://cdn.skypack.dev/canvas-confetti';
const p1btn=document.querySelector('#p1Button');
const p2btn=document.querySelector('#p2Button');
const res=document.querySelector('#reset');
const winScoreSel=document.querySelector('#upto');
let p1score=0;
let p2score=0;
let winScore=3;
let stop=false;
p1btn.addEventListener('click',function(){
    if(!stop) {
        p1score++;
        if(p1score===winScore) {
            stop=true;
            p1Disp.classList.add('win');
            p2Disp.classList.add('lose');
            confetti();
        }
        p1Disp.textContent=p1score;
    }
})
p2btn.addEventListener('click',function(){
    if(!stop) {
        p2score++;
        if(p2score===winScore) {
            stop=true;
            p2Disp.classList.add('win');
            p1Disp.classList.add('lose');
            confetti();
        }
        p2Disp.textContent=p2score;
    }
})
winScoreSel.addEventListener('change',function(){
    winScore=parseInt(this.value);
    reset();
})
res.addEventListener('click',reset)
function reset(){
    p1Disp.textContent='0';
    p2Disp.textContent='0';
    p1score=0;p2score=0;
    p1Disp.classList.remove('win','lose');
    p2Disp.classList.remove('win','lose');
    stop=false;
    countdownDuration=60;
    timerElement.textContent = countdownDuration;   
}
    let countdownDuration = 60;
    const timerElement = document.getElementById('timer');
    function updateTimer() {
        if(stop) countdownDuration=60;
        timerElement.textContent = countdownDuration;
        countdownDuration--;
        if (countdownDuration < 0) {
            stop=true;
            if(p1score===p2score)
                timerElement.textContent = 'GAME DRAWN';
            else if(p1score>p2score)
                timerElement.textContent = `winner is P1`;
            else
            timerElement.textContent = `winner is P2`;
        } else {
            setTimeout(updateTimer, 1000);
        }
    }
    updateTimer();
