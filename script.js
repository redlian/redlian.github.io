const background = document.querySelector(".background");
const checkgreeting = document.querySelector(".check_greeting");
const icon = document.querySelector(".icon");

// add class name on .background Elemen
background.classList.add("bg-day");
background.classList.add("day");

// icon
// icon.src = "./assets/svg/icon-sun.svg";
// icon.setAttribute("alt", "sun icon");
icon.setAttribute("width", "100");
icon.setAttribute("heigth", "100");

Vue.filter("dateFormatFilter", function (value, formatStr) {
  return value.format(formatStr);
});
let now = new Date();
var dateApp = new Vue({
  el: "#localdate",
  data: {
    dateClock: new Date(),
  },
  mounted() {
    this.dateClock = new Date();
    /*The setInterval() method, offered on the Window and Worker interfaces, repeatedly calls a function or executes a code snippet, with a fixed time delay between each call.*/
    setInterval(() => {
      this.dateClock = new Date();
    }, 1000);
  },
});
var timeApp = new Vue({
  el: "#time",
  data: {
    dateClock: new Date(),
  },
  mounted() {
    this.dateClock = new Date();
    /*The setInterval() method, offered on the Window and Worker interfaces, repeatedly calls a function or executes a code snippet, with a fixed time delay between each call.*/
    setInterval(() => {
      this.dateClock = new Date();
    }, 1000);
  },
});


///
var hour = now.getHours();
let msg = "";
console.log("-------" + now);
if (hour >= 5 && hour <= 11) {
  icon.src = "./assets/svg/icon-sun.svg";
  icon.setAttribute("alt", "sun icon");
  msg = "Morning ☁";
} else if (hour >= 12 && hour <= 17) {
  icon.src = "./assets/svg/night_moon_icon.svg";
  icon.setAttribute("alt", "noon icon");
  msg = "Afternoon ༄ ࿓";
} else {
  icon.src = "./assets/svg/night_moon_icon.svg";
  icon.setAttribute("alt", "moon icon");
  msg = "Evening ☽";
}
checkgreeting.textContent = `Good ${msg}`;

// Origin Component, applicate greeting
var labApp = new Vue({
  el: "#lab",
  data: {
    greetingData: "Hello World !!",
  },

  methods: {},
  mounted() {
    /*The global setTimeout() method sets a timer which executes a function or specified piece of code once the timer expires.*/
    this.dateData = new Date();
    setTimeout(() => {
      this.dateData = new Date();
    }, 500);
  },
});