const buttons = document.querySelectorAll("button");
var leftHandValue = "";
var rightHandValue = "";
var isPressedOperator = false;
for (const button of buttons) {
  button.addEventListener('click', function(event) {
    var value = this.value;
	if(Number.isInteger(parseInt(value))){
		if(!isPressedOperator){
			leftHandValue = leftHandValue+value;
			document.getElementById("left").innerHTML = leftHandValue;
		}else{
			rightHandValue = rightHandValue+value;
			document.getElementById("right").innerHTML = rightHandValue;
		}
	}else{
		if(value == "C"){
			leftHandValue = "";
			rightHandValue = "";
			isPressedOperator = false;
			document.getElementById("right").innerHTML = "";
			document.getElementById("left").innerHTML = "";
			document.getElementById("operator").innerHTML = "";
			document.getElementById("result").innerHTML = "";
		}else if(value == "="){
			document.getElementById("result").innerHTML = eval(parseInt(leftHandValue)+" "+document.getElementById("operator").innerHTML+" "+parseInt(rightHandValue));
		}else{
			isPressedOperator = true;
			document.getElementById("operator").innerHTML = value;
		}
	}
  })
}