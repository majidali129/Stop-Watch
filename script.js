let hour = document.querySelector(".hr"),
  minut = document.querySelector(".min"),
  second = document.querySelector(".sec"),
  counter = document.querySelector(".count"),
  timer = false,
  hr = 0,
  mint = 0,
  sec = 0,
  count = 0;

function start() {
  timer = true;
  stopWatch();
  console.log(count);
}
function stop() {
  timer = false;
}
function reset() {
  timer = false;
  hr = 0;
  mint = 0;
  sec = 0;
  count = 0;
  hour.innerHTML = "00";
  minut.innerHTML = "00";
  second.innerHTML = "00";
  counter.innerHTML = "00";
}
function stopWatch() {
  if (timer == true) {
    count = count + 1;
    if (count == 100) {
      sec = sec + 1;
      count = 0;
    }
    if (sec == 60) {
      mint = mint + 1;
      sec = 0;
    }
    if (mint == 60) {
      hr = hr + 1;
      sec = 0;
      mint = 0;
    }

    let hString = hr;
    let mString = mint;
    let sString = sec;
    let cString = count;

    if (hr < 10) {
      hString = "0" + hString;
    }
    if (sec < 10) {
      sString = "0" + sString;
    }
    if (mint < 10) {
      mString = "0" + mString;
    }
    if (count < 10) {
      cString = "0" + cString;
    }

    second.innerHTML = sString;
    minut.innerHTML = mString;
    hour.innerHTML = hString;
    counter.innerHTML = cString;
    setTimeout("stopWatch()", 10);
  }
}

document.getElementById("start").addEventListener("click", start);
document.getElementById("stop").addEventListener("click", stop);
document.getElementById("reset").addEventListener("click", reset);
