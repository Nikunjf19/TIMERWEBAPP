let timerDurationInput;
let timerSecondsRemaining = 00;
let m;
let s;
let interval;
function displayUpdate(){
	timerDurationInput = document.getElementById("timerDuration").value;
	if(timerDurationInput == ""){
		timerDurationInput = 25;
		document.getElementById("timerCountdownDisplay").textContent = `25:00`;
	} else {
		document.getElementById("timerCountdownDisplay").textContent = `${timerDurationInput.padStart(2, "0")}:${timerSecondsRemaining}`;
	}
}
interval = setInterval(displayUpdate, 1);
document.getElementById("startButton").onclick = function(){
	document.getElementById("timerStatus").textContent = `Status: Work time!`
	clearInterval(interval);
	m = Number(timerDurationInput);
	s = 00;
	function timerCountdown(){
	if (s == 0){
		m--;
		s = 59;
		document.getElementById("timerCountdownDisplay").textContent = `${String(m).padStart(2,"0")}:${String(s).padStart(2, "0")}`;
	} else if (m != 0){
		s--;
		document.getElementById("timerCountdownDisplay").textContent = `${String(m).padStart(2,"0")}:${String(s).padStart(2, "0")}`;
	} else {
		document.getElementById("timerStatus").textContent = `Status: Break time!`
		document.getElementById("timerCountdownDisplay").textContent =`Break time`;
	}
	}
	setInterval(timerCountdown, 0);
}
console.log("working!");
