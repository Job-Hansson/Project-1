function btnHuurFietsen() {
    var fiets1 = document.getElementById("huurPelikaan");
    var fiets2 = document.getElementById("huurStella");
    var fiets3 = document.getElementById("huurOrange");
    var fiets4 = document.getElementById("huurCityGo");

    var totalCost = 0;
    var selectedBikes = [];

    if (fiets1.checked) {
        totalCost += 9.99;
        selectedBikes.push("Pelikaan");
    }
    if (fiets2.checked) {
        totalCost += 12.49;
        selectedBikes.push("Stella");
    }
    if (fiets3.checked) {
        totalCost += 8.99;
        selectedBikes.push("Orange");
    }
    if (fiets4.checked) {
        totalCost += 15.00;
        selectedBikes.push("CityGo");
    }

    if (selectedBikes.length === 0) {
        alert("Kies een fiets!");
    } else if (selectedBikes.length === 4) {
        alert("U heeft alle fietsen gehuurd!");
    } else {
        var message = "U heeft de ";
        for (var i = 0; i < selectedBikes.length; i++) {
            message += selectedBikes[i];
            if (i < selectedBikes.length - 2) {
                message += ", ";
            } else if (i === selectedBikes.length - 2) {
                message += " en ";
            }
        }
        message += " gehuurd!";
        alert(message);
    }

    alert("U bent in totaal €" + totalCost.toFixed(2) + " kwijt.");
}