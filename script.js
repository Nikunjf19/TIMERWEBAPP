let timerDurationInput;
let timerDuration;
function displayUpdate(){
	timerDurationInput = document.getElementById("timerDuration").value;
	if(timerDurationInput == ""){
		document.getElementById("timerCountdownDisplay").textContent = `25:00`;
	} else {
		document.getElementById("timerCountdownDisplay").textContent = `${timerDurationInput.padStart(2, "0")}:00`;
	}
}
setInterval(displayUpdate, 1);
console.log("working!");
