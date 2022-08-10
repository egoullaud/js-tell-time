var time = new Date().getHours();
// console.log(time);

var greeting = "Hiya";
var name = "Elizabeth";

// Your conditional statements here
if (time < 12) {
  greeting = "Good Morning";
} else if (time <= 18) {
  greeting = "Good Afternoon";
} else if (time <= 22) {
  greeting = "Good Evening";
} else {
  greeting = "Get your ass to bed, NOW";
}

// alert()
alert(`${greeting}, ${name}!`);
