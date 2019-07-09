window.onload = function(){
	var count = 0;
	var ev1;
	var ev2;
	var ev3;
	var ev4;
	var ev5;
	var ev6;
	var ev7;
	var ev8;
	var value1 = -1;
	var value2 = 0;
	var value3 = 0;
	var value4 = 0;
	var value5 = 0;
	var value6 = 0;
	var value7 = 0;
	var value8 = 0;
	var w21 = 0;
	var w32 = 0;
	var w13 = 0;
	var t1 = 0;
	var t2 = 0;
	var t3 = 0;
	var n1 = -1;
	var n2 = -1;

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

	function hammDistance(value1, value2){
		var x = value1 ^ value2;
		var setBits = 0;
		while (x > 0) {
			setBits += x & 1;
			x >>= 1;
		}
		return setBits;
	}

	function energy1(){
		ev1 = "0 0 0";
		value1 = 0;
		document.getElementById("e1").innerHTML = "<span style='color: blue;'>0 0 0</span>";
		count = count + 1;

	}

	function energy2(){
		ev2 = "0 0 1";
		value2 = 1;
		document.getElementById("e2").innerHTML = "<span style='color: blue;'>0 0 1</span>";
		count = count + 1;
	}

	function energy3(){
		ev3 = "1 0 0";
		value3 = 4;
		document.getElementById("e3").innerHTML = "<span style='color: blue;'>1 0 0</span>";
		count = count + 1;
	}

	function energy4(){
		ev4 = "1 0 1";
		value4 = 5;
		document.getElementById("e4").innerHTML = "<span style='color: blue;'>1 0 1</span>";
		count = count + 1;
	}

	function energy5(){
		ev5 = "0 1 0";
		value5 = 2;
		document.getElementById("e5").innerHTML = "<span style='color: blue;'>0 1 0</span>";
		count = count + 1;
	}

	function energy6(){
		ev6 = "0 1 1";
		value6 = 3;
		document.getElementById("e6").innerHTML = "<span style='color: blue;'>0 1 1</span>";
		count = count + 1;
	}

	function energy7(){
		ev7 = "1 1 0";
		value7 = 6;
		document.getElementById("e7").innerHTML = "<span style='color: blue;'>1 1 0</span>";
		count = count + 1;
	}

	function energy8(){
		ev8 = "1 1 1";
		value8 = 7;
		document.getElementById("e8").innerHTML = "<span style='color: blue;'>1 1 1</span>";
		count = count + 1;
	}



	function submit(){
		if(count !== 2){
			alert("Please select 2 States!");
			alert("Refresh the page and Start again!");
			return 0;
		}

		var hd = hammDistance(value1, value4);
		if(hd < 2){
			alert("Hamming distance for energy states should be more than 1!");
			alert("Refresh the page and Start again!");
			return 0;
		}
		document.getElementById("p1").style.display = "none";
		document.getElementById("p2").style.display = "none";
		document.getElementById("p3").style.display = "none";
		document.getElementById("submit").style.display = "none";
		document.getElementById("image").style.display = "none";
		document.getElementById("title").textContent = "HINT -->> W12=0.5; W23=0.6; W31=-0.5; Th1=0.4; Th2=-0.6; Th3=0.5";
		document.getElementById("column3").style.visibility = "visible";
	}

	w12.innerHTML = slider1.value;
	slider1.oninput = function(){
		w21 = this.value;
		w12.textContent = this.value;
	}

	w23.innerHTML = slider2.value;
	slider2.oninput = function() {
		w32 = this.value;
		w23.textContent = this.value;
	}

	w31.innerHTML = slider3.value;
	slider3.oninput = function() {
		w13 = this.value;
		w31.textContent = this.value;
	}

	th1.innerHTML = slider4.value;
	slider4.oninput = function() {
		t1 = this.value;
		th1.textContent = this.value;
	}

	th2.innerHTML = slider5.value;
	slider5.oninput = function() {
		t2 = this.value;
		th2.textContent = this.value;
	}

	th3.innerHTML = slider6.value;
	slider6.oninput = function() {
		t3 = this.value;
		th3.textContent = this.value;
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