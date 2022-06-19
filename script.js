total_time = 0
btn1 = document.getElementById('btn1');
btn1.addEventListener("click", () => getTime(1,0));

btn2 = document.getElementById('btn2');
btn2.addEventListener('click', () => getTime(2,0));

btn5 = document.getElementById('btn5');
btn5.addEventListener('click', () => getTime(5,0));

btn10 = document.getElementById('btn10');
btn10.addEventListener('click', () => getTime(10,0));

btn15 = document.getElementById('btn15');
btn15.addEventListener('click', () => getTime(15,0));

btn20 = document.getElementById('btn20');
btn20.addEventListener('click', () => getTime(20,0));

function getTime(x,y){
    text = document.getElementById('timer-text');
    text.innerHTML = 'Started';

    var min = x;
    var sec = y;
    total_time = (min*60) + sec;
    setInterval(()=>{
        timerText = document.getElementById('timer-text');
        if(total_time<=0){
            timerText.innerHTML = 'TIME OUT!';
            clearInterval();
            return;
        }
        let minText = Math.floor(total_time/60);
        if(minText<10){
            minText = '0' + minText;
        }
        let secText = (total_time%60);
        if(secText<10){
            secText = '0'+secText;
        }
        timerText.innerHTML = minText +" : "+ secText;
        total_time = total_time - 1;

    }, 1000)
}

