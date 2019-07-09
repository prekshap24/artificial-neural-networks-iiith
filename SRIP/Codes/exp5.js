window.onload = function(){
	var count=0;
	var ev1;
	var ev2;
	var ev3;
	var ev4;
	var ev5;
	var ev6;
	var ev7;
	var ev8;
	var w21;
	var w32;
	var w13;
	var t1;
	var t2;
	var t3;

	var slider1 = document.getElementById("w12");
	var w12 = document.getElementById("demo1");
	var slider2 = document.getElementById("w23");
	var w23 = document.getElementById("demo2");
	var slider3 = document.getElementById("w31");
	var w31 = document.getElementById("demo3");
	var slider4 = document.getElementById("th1");
	var th1 = document.getElementById("demo4");
	var slider5 = document.getElementById("th2");
	var th2 = document.getElementById("demo5");
	var slider6 = document.getElementById("th3");
	var th3 = document.getElementById("demo6");

	function energy1(){
		ev1 = "0 0 0";
		//console.log(ev1);
		document.getElementById("e1").innerHTML = "<span style='color: blue;'>0 0 0</span>";
		count = count + 1;
		//console.log(count);
	}

	function energy2(){
		ev2 = "0 0 1";
		//console.log(ev2);
		document.getElementById("e2").innerHTML = "<span style='color: blue;'>0 0 1</span>";
		count = count + 1;
		//console.log(count);
	}

	function energy3(){
		ev3 = "1 0 0";
		//console.log(ev3);
		document.getElementById("e3").innerHTML = "<span style='color: blue;'>0 0 0</span>";
		count = count + 1;
		//console.log(count);
	}

	function energy4(){
		ev4 = "1 0 1";
		//console.log(ev4);
		document.getElementById("e4").innerHTML = "<span style='color: blue;'>0 0 0</span>";
		count = count + 1;
		//console.log(count);
	}

	function energy5(){
		ev5 = "0 1 0";
		//console.log(ev5);
		document.getElementById("e5").innerHTML = "<span style='color: blue;'>0 0 0</span>";
		count = count + 1;
		//console.log(count);
	}

	function energy6(){
		ev6 = "0 1 1";
		//console.log(ev6);
		document.getElementById("e6").innerHTML = "<span style='color: blue;'>0 0 0</span>";
		count = count + 1;
		//console.log(count);
	}

	function energy7(){
		ev7 = "1 1 0";
		//console.log(ev7);
		document.getElementById("e7").innerHTML = "<span style='color: blue;'>0 0 0</span>";
		count = count + 1;
		//console.log(count);
	}

	function energy8(){
		ev8 = "1 1 1";
		//console.log(ev8);
		document.getElementById("e8").innerHTML = "<span style='color: blue;'>0 0 0</span>";
		count = count + 1;
		//console.log(count);
	}

	function submit(){
		if(count != 2){
			alert("Please select 2 States!");
			alert("Refresh the page and Start again!");
			return 0;
		}
		document.getElementById("p1").style.display = "none";
		document.getElementById("p2").style.display = "none";
		document.getElementById("p3").style.display = "none";
		document.getElementById("submit").style.display = "none";
		document.getElementById("image").style.display = "none";
		document.getElementById("title").innerHTML = "HINT -->> W12=0.5; W23=0.6; W31=-0.5; Th1=0.4; Th2=-0.6; Th3=0.5";
		document.getElementById("column3").style.visibility = "visible";
	}

	w12.innerHTML = slider1.value;
	slider1.oninput = function(){
		w21 = this.value;
		w12.innerHTML = this.value;
	}

	w23.innerHTML = slider2.value;
	slider2.oninput = function() {
		w32 = this.value;
		w23.innerHTML = this.value;
	}

	w31.innerHTML = slider3.value;
	slider3.oninput = function() {
		w13 = this.value;
		w31.innerHTML = this.value;
	}

	th1.innerHTML = slider4.value;
	slider4.oninput = function() {
		t1 = this.value;
		th1.innerHTML = this.value;
	}

	th2.innerHTML = slider5.value;
	slider5.oninput = function() {
		t2 = this.value;
		th2.innerHTML = this.value;
	}

	th3.innerHTML = slider6.value;
	slider6.oninput = function() {
		t3 = this.value;
		th3.innerHTML = this.value;
	};

	function done(){
		/*console.log(w21);
		console.log(w32);
		console.log(w13);
		console.log(t1);
		console.log(t2);
		console.log(t3);*/
		document.getElementById("column3").style.visibility = "hidden";
	}

	var add = document.getElementById("e1");
	add.addEventListener("click", energy1);
	var add2 = document.getElementById("e2");
	add2.addEventListener("click", energy2);
	var add3 = document.getElementById("e3");
	add3.addEventListener("click", energy3);
	var add4 = document.getElementById("e4");
	add4.addEventListener("click", energy4);
	var add5 = document.getElementById("e5");
	add5.addEventListener("click", energy5);
	var add6 = document.getElementById("e6");
	add6.addEventListener("click", energy6);
	var add7 = document.getElementById("e7");
	add7.addEventListener("click", energy7);
	var add8 = document.getElementById("e8");
	add8.addEventListener("click", energy8);
	var sub = document.getElementById("submit");
	sub.addEventListener("click", submit);
	var don = document.getElementById("done");
	don.addEventListener("click", done);
};