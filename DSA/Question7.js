// Create a timer whose by default value is 10 and value should decrease by 1 per second

let timerValue = 10;

const timer = setInterval(() => {
  console.log(timerValue);
  timerValue--;

  if (timerValue < 0) {
    clearInterval(timer);
    console.log("Timer finished!");
  }
}, 1000);
