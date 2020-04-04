let msToSeconds = 1000;
let msToMinutes = msToSeconds * 60;
let msToHours = msToMinutes * 60;
let msToDays = msToHours * 24;

console.log(location.search);

// function setTime() {
// 	let now = new Date();
// 	let birthday = new Date("6/12/2003");
// 	let difference = now.getTime()-birthday.getTime()

// 	let days = Math.floor(difference/(1000*60*60*24));
// 	let hours = Math.floor((difference % (1000*60*60*24))/(1000*60*60));
// 	let minutes = Math.floor((difference % (1000*60*60))/(1000*60));
// 	let seconds = Math.floor((difference % (1000*60))/1000);
// 	document.getElementById("demo").innerHTML =  days + " days " + hours + " hours " + minutes + " minutes " + seconds + " seconds ";
// }

setInterval(setTime, 1000)

//Times and stuff
function setTime() {
	let now = new Date();
	let birthday = new Date(location.search);
	let difference = now.getTime()-birthday.getTime()
	console.log(location.search)

	let days = Math.floor(difference/(1000*60*60*24));
	let hours = Math.floor((difference % (1000*60*60*24))/(1000*60*60));
	let minutes = Math.floor((difference % (1000*60*60))/(1000*60));
	let seconds = Math.floor((difference % (1000*60))/1000);
	document.getElementById("demo").innerHTML =  days + " days " + hours + " hours " + minutes + " minutes " + seconds + " seconds ";
}

//Buttons and Inputs
let inputField = document.getElementById("inputField");
let inputButton = document.getElementById("inputButton")

inputButton.addEventListener("click",getInput);

function getInput() {
	alert(inputField.value);
}
