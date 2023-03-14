function calculateBill() {
    var dishCost = document.getElementById("dish-cost").value;
    var peopleSharing = document.getElementById("people-sharing").value;
    var totalBill = dishCost * peopleSharing;
    var billPerPerson = totalBill / peopleSharing;
    var billInfo = {
        totalBill: totalBill,
        billPerPerson: billPerPerson
    };
    document.getElementById("total-bill").innerHTML = "Total Bill: Rs. " + billInfo.totalBill + "/-";
    document.getElementById("bill-per-person").innerHTML = "Bill Per Person: Rs. " + billInfo.billPerPerson + "/-";
}