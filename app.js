// chrome.webRequest.onBeforeRequest.addListener(
//  function(details) {
//   console.log("blocking:", details.url);
//   return { cancel: true };
//  },
//  { urls: ["*://*.youtube.com/"] },
//  ["blocking"]
// );

let minutes = 25;
document.getElementById("starter").addEventListener("click", myTimer);

function myTimer() {
 let currSec = 60;
 let mins = minutes;

 const tick = () => {
  // decrement current mins by one when func runs every minute
  let currMins = mins - 1;

  // decrement seconds on each invocation
  currSec--;

  //grab timer element for countdown manipulation
  let timer = document.getElementById("timer");

  // reassign value for counter on each invocation
  timer.innerHTML =
   currMins.toString() + ":" + (currSec < 10 ? "0" : "") + String(currSec);

  // continue decrementing seconds while > 0
  if (currSec > 0) {
   setTimeout(tick, 1000);
  } else {
   // when sec = 0, decrease min and run Timer func
   if (mins > 1) {
    myTimer(mins - 1);
   } else {
    alert("Time is up, go check those DMs!");
   }
  }
 };

 tick();
}
