input = 0;
displayed = "";
endMessage = false;

window.onload = function start() {
	document.getElementById("output").value = displayed;
};

function getDisplay() {
	displayed = document.getElementById("output").value.toString();
}

function updateDisplay() {
	document.getElementById("output").value = displayed;
	console.log(displayed);
}

function clearDisplay() {
	displayed = "";
	input = 0;
	endMessage = true;
	document.getElementById("output").value = displayed;
}

function enterKey(event) {
	if (event.keyCode == 13) {
		getDisplay();
		equals();
	}
}

function nine() {
	getDisplay();
	if (displayed === "0" || endMessage) {
		displayed = "";
		endMessage = false;
	}
	input = "9";
	displayed += input;
	updateDisplay();
}

function eight() {
	getDisplay();
	if (displayed === "0" || endMessage) {
		displayed = "";
		endMessage = false;
	}
	input = "8";
	displayed += input;
	updateDisplay();
}

function seven() {
	getDisplay();
	if (displayed === "0" || endMessage) {
		displayed = "";
		endMessage = false;
	}
	input = "7";
	displayed += input;
	updateDisplay();
}

function six() {
	getDisplay();
	if (displayed === "0" || endMessage) {
		displayed = "";
		endMessage = false;
	}
	input = "6";
	displayed += input;
	updateDisplay();
}

function five() {
	getDisplay();
	if (displayed === "0" || endMessage) {
		displayed = "";
		endMessage = false;
	}
	input = "5";
	displayed += input;
	updateDisplay();
}

function four() {
	getDisplay();
	if (displayed === "0" || endMessage) {
		displayed = "";
		endMessage = false;
	}
	input = "4";
	displayed += input;
	updateDisplay();
}

function three() {
	getDisplay();
	if (displayed === "0" || endMessage) {
		displayed = "";
		endMessage = false;
	}
	input = "3";
	displayed += input;
	updateDisplay();
}

function two() {
	getDisplay();
	if (displayed === "0" || endMessage) {
		displayed = "";
		endMessage = false;
	}
	input = "2";
	displayed += input;
	updateDisplay();
}

function one() {
	getDisplay();
	if (displayed === "0" || endMessage) {
		displayed = "";
		endMessage = false;
	}
	input = "1";
	displayed += input;
	updateDisplay();
}

function zero() {
	getDisplay();
	if (displayed === "0" || endMessage) {
		displayed = "";
		endMessage = false;
	}
	input = "0";
	displayed += input;
	updateDisplay();
}

function decimal() {
	getDisplay();
	if (displayed === "0" || endMessage) {
		displayed = "0";
		endMessage = false;
	}
	input = ".";
	displayed += input;
	updateDisplay();
}

function divide() {
	getDisplay();
	lastInt = parseInt(displayed.slice(-1))
	if (!isNaN(lastInt)) {
		input = "/";
		displayed += input;
		updateDisplay();
	}
}

function multiply() {
	getDisplay();
	lastInt = parseInt(displayed.slice(-1))
	if (!isNaN(lastInt)) {
		input = "*";
		displayed += input;
		updateDisplay();
	}
}

function subtract() {
	getDisplay();
	lastInt = parseInt(displayed.slice(-1))
	if (!isNaN(lastInt)) {
		input = "-";
		displayed += input;
		updateDisplay();
	}
}

function add() {
	getDisplay();
	lastInt = parseInt(displayed.slice(-1))
	if (!isNaN(lastInt)) {
		input = "+";
		displayed += input;
		updateDisplay();
	}
}

function changeSign() {
	getDisplay();
	first = displayed.substring(0, 1);
	if (first !== "-") {
		displayed = "-" + displayed;
	} else {
		displayed = displayed.substring(1);
	}
	updateDisplay();
}

function percent() {
	getDisplay();
	if (endMessage) {
		endMessage = false;
	}
	displayed += "/100";
	displayed = eval(displayed);
	updateDisplay();
}

function equals() {
	getDisplay();
	displayed = eval(displayed)
	if (displayed % 1 != 0) {
		displayed = displayed.toFixed(2);
	}
	endMessage = true;
	updateDisplay();
}