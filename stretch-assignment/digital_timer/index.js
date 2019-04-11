const digits = document.querySelector(".digits");
const secondTens = document.getElementById("secondTens");
const secondOnes = document.getElementById("secondOnes");
const msHundreds = document.getElementById("msHundreds");
const msTens = document.getElementById("msTens");

function Counter(elem, delay) {
  var value = (elem.innerHTML, 0);
  var interval;

  function increment() {
    return value += 1;
  }

  function updateDisplay(value) {
    elem.innerHTML = value;
  }

  function run() {
    updateDisplay(increment());
  }

  function start() {
    interval = window.setInterval(run, delay);
  }

  function end() {
    if(value >= 9) {
      clearInterval();
    }
  }

  // exports
  // This actually creates a function that our counter can call
  // you'll see it used below.
  //
  // The other functions above cannot be accessed from outside
  // this function.
  this.start = start;
}

var elem = document.getElementById("secondOnes");

counter = new Counter(elem, 1000);
counter.start();