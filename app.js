//Countdown

var target_date = new Date("2025-07-21T08:00:00"); // set the countdown date
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
        days = "69";
        hours = "12";
        minutes = "5";
        seconds = "20";
    }
	// format countdown string + set tag value
	countdown.innerHTML = "<span>" + days + "</span><span>" + hours + "</span><span>" + minutes + "</span><span>" + seconds + "</span>"; 
}

function pad(n) {
	return (n < 10 ? '0' : '') + n;
}



//fin countdown
const anotados = [
    {nombre: "Ian", img:"src/JazakimPersonas2.0.png"},
    {nombre: "Miju", img:"src/JazakimPersonas2.0.png"},
   //{nombre: "Ian", img:"src/JazakimPersonas2.0.png"},
   //{nombre: "Ian", img:"src/JazakimPersonas2.0.png"},
   //{nombre: "Ian", img:"src/JazakimPersonas2.0.png"},
   //{nombre: "Ian", img:"src/JazakimPersonas2.0.png"},
   //{nombre: "Ian", img:"src/JazakimPersonas2.0.png"},
   //{nombre: "Ian", img:"src/JazakimPersonas2.0.png"},
   //{nombre: "Ian", img:"src/JazakimPersonas2.0.png"},
   // {nombre: "Ian", img:"src/JazakimPersonas2.0.png"},
   // {nombre: "Ian", img:"src/JazakimPersonas2.0.png"},
   // {nombre: "Ian", img:"src/JazakimPersonas2.0.png"},
   // {nombre: "Ian", img:"src/JazakimPersonas2.0.png"},
   // {nombre: "Ian", img:"src/JazakimPersonas2.0.png"},
   // {nombre: "Ian", img:"src/JazakimPersonas2.0.png"},
   // {nombre: "Ian", img:"src/JazakimPersonas2.0.png"},
   // {nombre: "Ian", img:"src/JazakimPersonas2.0.png"},
   // {nombre: "Ian", img:"src/JazakimPersonas2.0.png"},
   // {nombre: "Ian", img:"src/JazakimPersonas2.0.png"},
   // {nombre: "Ian", img:"src/JazakimPersonas2.0.png"},
   // {nombre: "Ian", img:"src/JazakimPersonas2.0.png"},
   // {nombre: "Ian", img:"src/JazakimPersonas2.0.png"},

   
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


