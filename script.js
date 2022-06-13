
var id;
var playStop = 0;

function playFun() {
    playStop++;

    if (playStop === 1) {
        play();
        document.getElementById("play").innerText = "Pause";
    } else {
        stop();
        playStop = 0;
    }
}

var millisecond = 0;
var second = 0;
var minute = 0;
var hour = 0;

function play() {
    id = setInterval(() => {
        ++millisecond;
        ms = updateTime(millisecond);
        document.getElementById("millisecond").innerText = ms;
        if (millisecond === 100) {
            ++second;
            millisecond = 0;
        }
        sc = updateTime(second);
        document.getElementById("second").innerText = sc;
        if (second === 60) {
            ++minute;
            second = 0;
        }
        mn = updateTime(minute);
        document.getElementById("minute").innerText = mn;
        if (minute === 60) {
            ++hour;
            minute = 0;
        }
        hr = updateTime(hour);
        document.getElementById("hour").innerText = hr;
        if(hour === 12){
            reset();
        }
    }, 10);
}

function reset(){
    stop();
    document.getElementById("millisecond").innerText = "00";
    document.getElementById("second").innerText = "00";
    document.getElementById("minute").innerText = "00";
    document.getElementById("hour").innerText = "00";
}

function stop() {
    clearInterval(id);
    document.getElementById("play").innerText = "Play";
}

function updateTime(time){
      if(time < 10){
        return "0"+time;
      }
      return time;
}