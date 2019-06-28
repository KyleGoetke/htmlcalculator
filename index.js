var input = 0;
var display = 0;
var yarn = "";
var dot = 0;
var operator = 0;
var checkChange = 1;
var checkZero = 0;

window.onload = function start() {
	document.getElementById("display").innerHTML = display;
};

function cleardisplay() {
	yarn = "";
  display = 0;
	dot = 0;
	checkZero = 0;
	document.getElementById("display").innerHTML = display;
}

function changesign() {
	if (checkChange===1) {
		input = display;
		yarn = input * -1;
		yarn = yarn.toString();
	  document.getElementById("display").innerHTML = yarn;
	  display = yarn;
	}else if(checkChange===0){
		input = "-";
		yarn = display;
		yarn = yarn + input;
		yarn = yarn.toString();
		document.getElementById("display").innerHTML = yarn;
		display = yarn;
	}
}

function percent() {
	operator = 0;
  input = display;
	yarn = input / 100;
	yarn = yarn.toString();
  document.getElementById("display").innerHTML = yarn;
  display = yarn;
}

function zero() {
  if(checkZero===1) {
		input = 0;
	  operator = 0;
		checkChange = 1;
	  yarn = yarn + input;
	  yarn = yarn.toString();
	  document.getElementById("display").innerHTML = yarn;
	  display = yarn;
	}else{
	}
}

function one() {
  input = 1;
  operator = 0;
	checkZero = 1;
	checkChange = 1;
  yarn = yarn + input;
  yarn = yarn.toString();
  document.getElementById("display").innerHTML = yarn;
  display = yarn;
}

function two() {
  input = 2;
  operator = 0;
	checkZero = 1;
	checkChange = 1;
  yarn = yarn + input;
  yarn = yarn.toString();
  document.getElementById("display").innerHTML = yarn;
  display = yarn;
}

function three() {
  input = 3;
  operator = 0;
	checkZero = 1;
	checkChange = 1;
  yarn = yarn + input;
  yarn = yarn.toString();
  document.getElementById("display").innerHTML = yarn;
  display = yarn;
}

function four() {
  input = 4;
  operator = 0;
	checkZero = 1;
	checkChange = 1;
  yarn = yarn + input;
  yarn = yarn.toString();
  document.getElementById("display").innerHTML = yarn;
  display = yarn;
}

function five() {
  input = 5;
  operator = 0;
	checkZero = 1;
	checkChange = 1;
  yarn = yarn + input;
  yarn = yarn.toString();
  document.getElementById("display").innerHTML = yarn;
  display = yarn;
}

function six() {
  input = 6;
  operator = 0;
	checkZero = 1;
	checkChange = 1;
  yarn = yarn + input;
  yarn = yarn.toString();
  document.getElementById("display").innerHTML = yarn;
  display = yarn;
}

function seven() {
  input = 7;
  operator = 0;
	checkZero = 1;
	checkChange = 1;
  yarn = yarn + input;
  yarn = yarn.toString();
  document.getElementById("display").innerHTML = yarn;
  display = yarn;
}

function eight() {
  input = 8;
  operator = 0;
	checkZero = 1;
	checkChange = 1;
  yarn = yarn + input;
  yarn = yarn.toString();
  document.getElementById("display").innerHTML = yarn;
  display = yarn;
}

function nein() {
  input = 9;
  operator = 0;
	checkZero = 1;
	checkChange = 1;
  yarn = yarn + input;
  yarn = yarn.toString();
  document.getElementById("display").innerHTML = yarn;
  display = yarn;
}

function decimal() {
  if (dot===0) {
  	input = ".";
		yarn = display;
		yarn = yarn + input;
		yarn = yarn.toString();
		document.getElementById("display").innerHTML = yarn;
		display = yarn;
		dot = 1;
		checkZero = 1;
	}else{
	}
}

function plus() {
  if (operator===0) {
  	dot = 0;
		input = "+";
		yarn = display;
  	yarn = yarn + input;
  	yarn = yarn.toString();
  	document.getElementById("display").innerHTML = yarn;
  	display = yarn;
		operator = 1;
		checkChange = 0;
	}else{
	}
}

function subtract() {
  if (operator===0) {
  	dot = 0;
		input = "-";
		yarn = display;
  	yarn = yarn + input;
  	yarn = yarn.toString();
  	document.getElementById("display").innerHTML = yarn;
  	display = yarn;
		operator = 1;
		checkChange = 0;
	}else{
	}
}

function multiply() {
  if (operator===0) {
  	dot = 0;
		input = "*";
		yarn = display;
  	yarn = yarn + input;
  	yarn = yarn.toString();
  	document.getElementById("display").innerHTML = yarn;
  	display = yarn;
		operator = 1;
		checkChange = 0;
	}else{
	}
}

function divide() {
  if (operator===0) {
  	dot = 0;
		input = "/";
		yarn = display;
  	yarn = yarn + input;
  	yarn = yarn.toString();
  	document.getElementById("display").innerHTML = yarn;
  	display = yarn;
		operator = 1;
		checkChange = 0;
	}else{
	}
}

function equals() {
	var total = 0;
	dot = 0;
  total = yarn.toString();
  yarn = "";
  total = eval(total);
	if (total===Infinity || total===NaN || total===undefined) {
		document.getElementById("display").innerHTML = "Error encountered!";
	}else{
		total = parseFloat(total.toFixed(10));
		total = total.toString();
	  document.getElementById("display").innerHTML = total;
	  display = total;
	}
}
