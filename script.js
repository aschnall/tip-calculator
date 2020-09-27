document.getElementById('tip-text').style.display = 'none';
document.getElementById('total-text').style.display = 'none';

document.getElementById("calculate").addEventListener("click", function(event) {
	event.preventDefault();
	const bill = Number(document.getElementById('bill').value);
	const percent = (Number(document.getElementById('percent').value)/100);
	const split = Number(document.getElementById('split').value);
	const tip = document.getElementById("tip");
	const total = document.getElementById("total");
	if (bill === 0 || split === 0 || percent === 0) {
		tip.textContent = "Please input values";
	} else if (bill < 0 || percent < 0 || split < 0) {
		tip.textContent = "Invalid values";
	} else {
		document.getElementById('tip-text').style.display = '';
    	document.getElementById('total-text').style.display = '';
    	if (split === 1) {
    		tip.textContent = "$" + ((bill*percent)/(split)).toFixed(2);
			total.textContent = "$" + ((bill/split) + ((bill*percent)/(split))).toFixed(2);
    	} else {
    		tip.textContent = "$" + ((bill*percent)/(split)).toFixed(2) + " per person";
			total.textContent = "$" + ((bill/split) + ((bill*percent)/(split))).toFixed(2) + " per person";	
    	}
	}
});