document.addEventListener("DOMContentLoaded", function (event) {
	document.getElementById("button1").addEventListener("click", function () {
		number1 = parseFloat(document.getElementById("inputNumber1").value);
        number2 = parseFloat(document.getElementById("inputNumber2").value);
        number3 = parseFloat(document.getElementById("inputNumber3").value);
		average = (number1 + number2 + number3) / 3;
		document.getElementById("result").innerHTML = average;
	});
});
