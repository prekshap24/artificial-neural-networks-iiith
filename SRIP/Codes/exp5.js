/* 000 011
000 101
000 110
000 111
001 110
001 111
010 111
100 111 */
window.onload = function(){
	var count = 0;
	var n1 = 0;
	var n2 = 0;
	var w21 = 0;
	var w32 = 0;
	var w13 = 0;
	var t1 = 0;
	var t2 = 0;
	var t3 = 0;
	var all8 = [[0, 0, 0], [0, 0, 1], [0, 1, 0], [1, 0, 0], [0, 1, 1], [1, 0, 1], [1, 1, 0], [1, 1, 1]];
	var valenergy = [];
	var ansarray = [];
	var arr1 = [];
	var arr2 = [];

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
		document.getElementById("e1").innerHTML = "<span style='color: blue;'>0 0 0</span>";
		count = count + 1;
		ansarray.push(0);
		ansarray.push(0);
		ansarray.push(0);
	}

	function energy2(){
		document.getElementById("e2").innerHTML = "<span style='color: blue;'>0 0 1</span>";
		count = count + 1;
		ansarray.push(0);
		ansarray.push(0);
		ansarray.push(1);
	}

	function energy3(){
		document.getElementById("e3").innerHTML = "<span style='color: blue;'>0 1 0</span>";
		count = count + 1;
		ansarray.push(0);
		ansarray.push(1);
		ansarray.push(0);
	}

	function energy4(){
		document.getElementById("e4").innerHTML = "<span style='color: blue;'>1 0 0</span>";
		count = count + 1;
		ansarray.push(1);
		ansarray.push(0);
		ansarray.push(0);
	}

	function energy5(){
		document.getElementById("e5").innerHTML = "<span style='color: blue;'>0 1 1</span>";
		count = count + 1;
		ansarray.push(0);
		ansarray.push(1);
		ansarray.push(1);
	}

	function energy6(){
		document.getElementById("e6").innerHTML = "<span style='color: blue;'>1 0 1</span>";
		count = count + 1;
		ansarray.push(1);
		ansarray.push(0);
		ansarray.push(1);
	}

	function energy7(){
		document.getElementById("e7").innerHTML = "<span style='color: blue;'>1 1 0</span>";
		count = count + 1;
		ansarray.push(1);
		ansarray.push(1);
		ansarray.push(0);
	}

	function energy8(){
		document.getElementById("e8").innerHTML = "<span style='color: blue;'>1 1 1</span>";
		count = count + 1;
		ansarray.push(1);
		ansarray.push(1);
		ansarray.push(1);
	}

	function submit(){
		var j = 0;
		if(count !== 2){
			alert("Please select 2 States!");
			alert("Refresh the page and Start again!");
			return 0;
		}
		arr1[0] = ansarray[0];
		arr1[1] = ansarray[1];
		arr1[2] = ansarray[2];
		arr2[0] = ansarray[3];
		arr2[1] = ansarray[4];
		arr2[2] = ansarray[5];
		n1 = (4 * ansarray[0]) + (2 * ansarray[1]) + (1 * ansarray[2]);
		n2 = (4 * ansarray[3]) + (2 * ansarray[4]) + (1 * ansarray[5]);
		var hd = hammDistance(n1, n2);
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

	function showe(){
		if(arr2[0] === 0 && arr2[1] === 0 && arr2[2] === 0){
			document.getElementById("equation-2").textContent = "W12*(0) + W13*(0) <= th1 || W21*(0) + W23*(0) <= th2 || W31*(0) + W32*(0) <= th3";
		}
		else if(arr2[0] === 0 && arr2[1] === 0 && arr2[2] === 1){
			document.getElementById("equation-2").textContent = "W12*(0) + W13*(1) <= th1 || W21*(0) + W23*(1) <= th2 || W31*(0) + W32*(0) > th3";
		}
		else if(arr2[0] === 0 && arr2[1] === 1 && arr2[2] === 0){
			document.getElementById("equation-2").textContent = "W12*(1) + W13*(0) <= th1 || W21*(0) + W23*(0) > th2 || W31*(0) + W32*(1) <= th3";
		}
		else if(arr2[0] === 1 && arr2[1] === 0 && arr2[2] === 0){
			document.getElementById("equation-2").textContent = "W12*(0) + W13*(0) > th1 || W21*(1) + W23*(0) <= th2 || W31*(1) + W32*(0) <= th3";
		}
		else if(arr2[0] === 0 && arr2[1] === 1 && arr2[2] === 1){
			document.getElementById("equation-2").textContent = "W12*(1) + W13*(1) <= th1 || W21*(0) + W23*(1) > th2 || W31*(0) + W32*(1) > th3";
		}
		else if(arr2[0] === 1 && arr2[1] === 0 && arr2[2] === 1){
			document.getElementById("equation-2").textContent = "W12*(0) + W13*(1) > th1 || W21*(1) + W23*(1) <= th2 || W31*(1) + W32*(0) > th3";
		}
		else if(arr2[0] === 1 && arr2[1] === 1 && arr2[2] === 0){
			document.getElementById("equation-2").textContent = "W12*(1) + W13*(0) > th1 || W21*(1) + W23*(0) > th2 || W31*(1) + W32*(1) <= th3";
		}
		else if(arr2[0] === 1 && arr2[1] === 1 && arr2[2] === 1){
			document.getElementById("equation-2").textContent = "W12*(1) + W13*(1) > th1 || W21*(1) + W23*(1) > th2 || W31*(1) + W32*(1) > th3";
		}
	}

	function showequations(){
		if(arr1[0] === 0 && arr1[1] === 0 && arr1[2] === 0){
			document.getElementById("equation-1").textContent = "W12*(0) + W13*(0) <= th1 || W21*(0) + W23*(0) <= th2 || W31*(0) + W32*(0) <= th3";
		}
		else if(arr1[0] === 0 && arr1[1] === 0 && arr1[2] === 1){
			document.getElementById("equation-1").textContent = "W12*(0) + W13*(1) <= th1 || W21*(0) + W23*(1) <= th2 || W31*(0) + W32*(0) > th3";
		}
		else if(arr1[0] === 0 && arr1[1] === 1 && arr1[2] === 0){
			document.getElementById("equation-1").textContent = "W12*(1) + W13*(0) <= th1 || W21*(0) + W23*(0) > th2 || W31*(0) + W32*(1) <= th3";
		}
		else if(arr1[0] === 1 && arr1[1] === 0 && arr1[2] === 0){
			document.getElementById("equation-1").textContent = "W12*(0) + W13*(0) > th1 || W21*(1) + W23*(0) <= th2 || W31*(1) + W32*(0) <= th3";
		}
		else if(arr1[0] === 0 && arr1[1] === 1 && arr1[2] === 1){
			document.getElementById("equation-1").textContent = "W12*(1) + W13*(1) <= th1 || W21*(0) + W23*(1) > th2 || W31*(0) + W32*(1) > th3";
		}
		else if(arr1[0] === 1 && arr1[1] === 0 && arr1[2] === 1){
			document.getElementById("equation-1").textContent = "W12*(0) + W13*(1) > th1 || W21*(1) + W23*(1) <= th2 || W31*(1) + W32*(0) > th3";
		}
		else if(arr1[0] === 1 && arr1[1] === 1 && arr1[2] === 0){
			document.getElementById("equation-1").textContent = "W12*(1) + W13*(0) > th1 || W21*(1) + W23*(0) > th2 || W31*(1) + W32*(1) <= th3";
		}
		else if(arr1[0] === 1 && arr1[1] === 1 && arr1[2] === 1){
			document.getElementById("equation-1").textContent = "W12*(1) + W13*(1) > th1 || W21*(1) + W23*(1) > th2 || W31*(1) + W32*(1) > th3";
		}

		showe();
	}

	function done(){
		document.getElementById("column3").style.visibility = "hidden";
		document.getElementById("title").textContent = "";
		document.getElementById("column4").style.visibility = "visible";
	}

	function calculateEnergy(){
		var i = 0;
		var w11 = 0;
		var w22 = 0;
		var w33 = 0;
		var num = 0;
		for(i = 0; i < 8; i++){
			num = (-1/2 * ((w11 * all8[i][0] * all8[i][0]) + (w21 * all8[i][0] * all8[i][1]) + (w13 * all8[i][0] * all8[i][2]) + (w21 * all8[i][1] * all8[i][0]) + (w22 * all8[i][1] * all8[i][1]) + (w32 * all8[i][1] * all8[i][2]) + (w13 * all8[i][2] * all8[i][0]) + (w32 * all8[i][2] * all8[i][1]) + (w33 * all8[i][2] * all8[i][2]))) + ((all8[i][0] * t1) + (all8[i][1] * t2) + (all8[i][2] * t3));
			valenergy[i] = Math.round(num * 100) / 100;
			//console.log(valenergy[i]);
		}
		document.getElementById("en1").textContent = valenergy[0];
		document.getElementById("en2").textContent = valenergy[1];
		document.getElementById("en3").textContent = valenergy[2];
		document.getElementById("en4").textContent = valenergy[3];
		document.getElementById("en5").textContent = valenergy[4];
		document.getElementById("en6").textContent = valenergy[5];
		document.getElementById("en7").textContent = valenergy[6];
		document.getElementById("en8").textContent = valenergy[7];
		document.getElementById("calculate-energy").style.visibility = "hidden";
		document.getElementById("final").style.visibility = "visible";
	}

	function finalfunction(){}

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
	var se = document.getElementById("see-equations");
	se.addEventListener("click", showequations);
	var don = document.getElementById("done");
	don.addEventListener("click", done);
	var cn = document.getElementById("calculate-energy");
	cn.addEventListener("click", calculateEnergy);
	var fn = document.getElementById("final");
	fn.addEventListener("click", finalfunction);
};