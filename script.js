let timerDurationInput;
let timerSecondsRemaining = 00;
let m;
let s = 00;
let interval;
let interval2;
function displayUpdate(){
	timerDurationInput = document.getElementById("timerDuration").value;
	if(timerDurationInput == ""){
		timerDurationInput = 25;
		document.getElementById("timerCountdownDisplay").textContent = `25:00`;
	} else {
		document.getElementById("timerCountdownDisplay").textContent = `${timerDurationInput.padStart(2, "0")}:${String(timerSecondsRemaining).padStart(2, "0")}`;
	}
	m = Number(timerDurationInput);
}
interval = setInterval(displayUpdate, 1);
document.getElementById("startButton").onclick = function(){
	document.getElementById("timerStatus").textContent = `Status: Work time!`
	clearInterval(interval);
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
	interval2 = setInterval(timerCountdown, 1000);
}
document.getElementById("stopButton").onclick = function(){
	clearInterval(interval2);
}
document.getElementById("resetButton").onclick = function(){
	m = Number(timerDurationInput);
        s = 00;
	document.getElementById("timerCountdownDisplay").textContent = `${String(m).padStart(2,"0")}:${String(s).padStart(2, "0")}`;
	clearInterval(interval2);
}
console.log("worki!");
