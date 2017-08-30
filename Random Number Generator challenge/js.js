var endValue = prompt("From 1 to what number generated?");

endValue = parseInt(endValue);
var RNumber = Math.floor(Math.random()*endValue)+1;

document.write("Random number generated:" + RNumber);