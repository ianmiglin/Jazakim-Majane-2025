//Countdown

var target_date = new Date("2024-07-16T08:00:00"); // set the countdown date
var days, hours, minutes, seconds; // variables for time units

var countdown = document.getElementById("tiles"); // get tag element

getCountdown();

// Check if countdown has reached 0



setInterval(function () { getCountdown(); }, 1000);

function getCountdown(){

	// find the amount of "seconds" between now and target
	var current_date = new Date().getTime();
	var seconds_left = (target_date - current_date) / 1000;

	days = pad( parseInt(seconds_left / 86400) );
	seconds_left = seconds_left % 86400;
		 
	hours = pad( parseInt(seconds_left / 3600) );
	seconds_left = seconds_left % 3600;
		  
	minutes = pad( parseInt(seconds_left / 60) );
	seconds = pad( parseInt( seconds_left % 60 ) );
    if (target_date <= new Date()) {
        days = "00";
        hours = "00";
        minutes = "00";
        seconds = "00";
    }
	// format countdown string + set tag value
	countdown.innerHTML = "<span>" + days + "</span><span>" + hours + "</span><span>" + minutes + "</span><span>" + seconds + "</span>"; 
}

function pad(n) {
	return (n < 10 ? '0' : '') + n;
}



//fin countdown
const anotados = [
    {nombre: "Dylan", img:"src/LeitzaGrupal.png"},
    {nombre: "Miju", img:"src/LeitzaGrupal.png"},
    {nombre: "Magui", img:"src/LeitzaGrupal.png"},
    {nombre: "Thiago", img:"src/LeitzaGrupal.png"},
    {nombre: "Tati", img:"src/LeitzaGrupal.png"},
    {nombre: "Valen", img:"src/LeitzaGrupal.png"},
    {nombre: "Juli B.", img:"src/LeitzaGrupal.png"},
    {nombre: "Perla", img:"src/LeitzaGrupal.png"},
    {nombre: "Zoe", img:"src/LeitzaGrupal.png"},
    {nombre: "Maylu", img:"src/LeitzaGrupal.png"},
    {nombre: "Marto", img:"src/LeitzaGrupal.png"},
    {nombre: "Vicky", img:"src/LeitzaGrupal.png"},
    {nombre: "Ionit", img:"src/LeitzaGrupal.png"},
    {nombre: "Naiu P.", img:"src/LeitzaGrupal.png"},
    {nombre: "Meli", img:"src/LeitzaGrupal.png"},
    {nombre: "Natu", img:"src/LeitzaGrupal.png"},
    {nombre: "Ela", img:"src/LeitzaGrupal.png"},
    {nombre: "Sofi G.", img:"src/LeitzaGrupal.png"},
    {nombre: "Ilu", img:"src/LeitzaGrupal.png"},
    {nombre: "Ori", img:"src/LeitzaGrupal.png"},
    {nombre: "Dan", img:"src/LeitzaGrupal.png"},
    {nombre: "....", img:"src/LeitzaGrupal.png"},
    {nombre: "Juli J.", img:"src/LeitzaGrupal.png"},
    {nombre: "Tobi", img:"src/LeitzaGrupal.png"},
    {nombre: "Leon", img:"src/LeitzaGrupal.png"},
    
];
anotados.forEach(function(element) {
        document.getElementById("gridContent").innerHTML += `
        <div class="card">
            <img src="${element.img}" alt="Card 1">
            <h3>${element.nombre}</h3>
        </div>`;
});
document.getElementById("nroNombres").innerText = anotados.filter(e=>e.nombre!="-").length;

document.getElementById("btnMicro").addEventListener("click", function(){
    const micro = document.querySelector(".contMicro")
    
    micro.classList.toggle("active")
    
})


