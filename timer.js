//POMODORO LOGIC
class Timer {
 constructor(durationInput, startButton, pauseButton, callbacks) {
  this.durationInput = durationInput;
  this.startButton = startButton;
  this.pauseButton = pauseButton;
  if (callbacks) {
   this.onStart = callbacks.onStart;
   this.onTick = callbacks.onTick;
   this.onComplete = callbacks.onComplete;
  }

  this.startButton.addEventListener("click", this.start);
  this.pauseButton.addEventListener("click", this.pause);
 }

 start = () => {
  if (this.onStart) {
   this.onStart(this.timeRemaining);
  }
  //when started, immediate run one tick, then start the interval ticks after 1s
  this.tick();
  this.interval = setInterval(this.tick, 50);
  //this.interval allows interval to be referenced within other methods (pause)
 };

 tick = () => {
  if (this.timeRemaining <= 0) {
   this.pause();
   if (this.onComplete) {
    this.onComplete();
   }
  } else {
   this.timeRemaining = this.timeRemaining - 0.05;
   if (this.onTick) {
    this.onTick(this.timeRemaining);
   }
  }
 };

 get timeRemaining() {
  //getter function
  return parseFloat(this.durationInput.value);
 }

 set timeRemaining(time) {
  //setter function
  this.durationInput.value = time.toFixed(2);
 }

 pause = () => {
  clearInterval(this.interval); //to stop timer
 };
}

/* TIMER LOGIC
const durationInput = document.querySelector('#duration');
const startButton = document.querySelector('#start');
const pauseButton = document.querySelector('#pause');
const circle = document.querySelector('circle');

const perimeter = circle.getAttribute('r') * 2 * Math.PI;
circle.setAttribute('stroke-dasharray', perimeter);

let duration;
const timer = new Timer(durationInput, startButton, pauseButton, {
	onStart(totalDuration) {
		duration = totalDuration;
	},
	onTick(timeRemaining) {
		circle.setAttribute('stroke-dashoffset', perimeter * timeRemaining / duration - perimeter);
	},
	onComplete() {
		console.log('Timer is completed.');
	}
});

*/
