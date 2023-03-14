function calculateCost() {
	var days = document.getElementById("days").value;
	var carType = document.getElementById("car-type").value;		var rentalCostPerDay;
		switch(carType) {
			case "economy":
				rentalCostPerDay = 4000;
				break;
			case "midsize":
				rentalCostPerDay = 10000;
				break;
			case "luxury":
				rentalCostPerDay = 20000;
				break;
			}
	var rentalCost = rentalCostPerDay * days;
	document.getElementById("total-cost").innerHTML = "Total Cost: Rs. " + rentalCost + "/-";
}
