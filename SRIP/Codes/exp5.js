window.onload = function(){
	function energy1(){
		var ev1 = "0 0 0";
		//console.log(ev1);
	}
	function energy2(){
		var ev2 = "0 0 1";
		//console.log(ev2);
	}
	function energy3(){
		var ev3 = "1 0 0";
		//console.log(ev3);
	}
	function energy4(){
		var ev4 = "1 0 1";
		//console.log(ev4);
	}
	function energy5(){
		var ev5 = "0 1 0";
		//console.log(ev5);
	}
	function energy6(){
		var ev6 = "0 1 1";
		//console.log(ev6);
	}
	function energy7(){
		var ev7 = "1 1 0";
		//console.log(ev7);
	}
	function energy8(){
		var ev8 = "1 1 1";
		//console.log(ev8);
	}

	var e1 = document.getElementById("mc1");
	e1.addEventListener("click", energy1);
	var e2 = document.getElementById("mc2");
	e2.addEventListener("click", energy2);
	var e3 = document.getElementById("mc3");
	e3.addEventListener("click", energy3);
	var e4 = document.getElementById("mc4");
	e4.addEventListener("click", energy4);
	var e5 = document.getElementById("mc5");
	e5.addEventListener("click", energy5);
	var e6 = document.getElementById("mc6");
	e6.addEventListener("click", energy6);
	var e7 = document.getElementById("mc7");
	e7.addEventListener("click", energy7);
	var e8 = document.getElementById("mc8");
	e8.addEventListener("click", energy8);
};