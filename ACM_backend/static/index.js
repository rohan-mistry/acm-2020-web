let i=0;
let txt = "CODE ";
var final = new Date(2020, 1, 9, 23, 59, 59).getTime();
setInterval(() => {
  var present = new Date().getTime();
  var remainingTime = final - present;
  var days = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
  var hours = Math.floor((remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);
  document.getElementById("countdown").innerHTML = days + "d " + hours + "h " +
    minutes + "m " + seconds + "s ";
  if (remainingTime < 0) {
    document.getElementById("countdown").innerHTML = "";
  }
}, 1000);

function getTimeRemaining(endtime) {
  var t = Date.parse(endtime) - Date.parse(new Date());
  var seconds = Math.floor((t / 1000) % 60);
  var minutes = Math.floor((t / 1000 / 60) % 60);
  var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
  var days = Math.floor(t / (1000 * 60 * 60 * 24));
  return {
    'total': t,
    'days': days,
    'hours': hours,
    'minutes': minutes,
    'seconds': seconds
  };
}

function initializeClock(id, endtime) {
  var clock = document.getElementById(id);
  var daysSpan = clock.querySelector('.days');
  var hoursSpan = clock.querySelector('.hours');
  var minutesSpan = clock.querySelector('.minutes');
  var secondsSpan = clock.querySelector('.seconds');

  function updateClock() {
    var t = getTimeRemaining(endtime);

    daysSpan.innerHTML = t.days;
    hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
    minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
    secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);

    if (t.total <= 0) {
      clearInterval(timeinterval);
    }
  }

  updateClock();
  var timeinterval = setInterval(updateClock, 1000);
}

var deadline = new Date(2020, 1, 22, 23, 59, 59);
initializeClock('clockdiv', deadline);

var coll = document.getElementsByClassName("collapsible");
var j;

for (j = 0; j < coll.length; j++) {
  coll[j].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      for(var k = 0; k < j; k++){
        document.getElementsByClassName("collapsible")[k].nextElementSibling.style.maxHeight=null;
        document.getElementsByClassName("collapsible")[k].classList.remove("active");
        content.style.maxHeight = content.scrollHeight + "px";
        this.classList.add("active");
      }
    } 
  });
}


const words = ["DJ ACM","Presents","LOC 2.0"];
let a = 0;
let timer;

function typingEffect() {
    document.getElementById('word').innerHTML = "";
	let word = words[a].split("");
	var loopTyping = function() {
		if (word.length > 0) {
			document.getElementById('word').innerHTML += word.shift();
		} else {
			deletingEffect();
			return false;
		};
		timer = setTimeout(loopTyping, 258);
	};
	loopTyping();
};

function deletingEffect() {
	let word = words[a].split("");
	var loopDeleting = function() {
		if (word.length > 0) {
			word.pop();
			document.getElementById('word').innerHTML = word.join("");
		} else {
			if (words.length > (a + 1)) {
				a++;
			} else {
				a = 0;
			};
			typingEffect();
			return false;
		};
		timer = setTimeout(loopDeleting, 120);
	};
	loopDeleting();
};

//typingEffect();

