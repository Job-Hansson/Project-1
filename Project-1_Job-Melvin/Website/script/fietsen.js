var items = localStorage.getItem('aWW');
items = 0;

function btnZetInWW() {
    items++;
    localStorage.setItem('aWW', items.toString());
    alert("Het product is toegevoegd aan uw winkelwagen.");
}

function btnPelikaan() {
    var cards = document.querySelectorAll(".card");

    document.getElementById("body").style.overflowY = "hidden";
    document.getElementById("popupPelikaan").style.display = "block";
    
    cards.forEach(function(card) {
        card.style.display = "none";
    });
}

function btnStella() {
    var cards = document.querySelectorAll(".card");

    document.getElementById("body").style.overflowY = "hidden";
    document.getElementById("popupStella").style.display = "block";
    
    cards.forEach(function(card) {
        card.style.display = "none";
    });
}

function btnOrange() {
    var cards = document.querySelectorAll(".card");

    document.getElementById("body").style.overflowY = "hidden";
    document.getElementById("popupOrange").style.display = "block";
    
    cards.forEach(function(card) {
        card.style.display = "none";
    });
}

function btnCityGo() {
    var cards = document.querySelectorAll(".card");

    document.getElementById("body").style.overflowY = "hidden";
    document.getElementById("popupCityGo").style.display = "block";
    
    cards.forEach(function(card) {
        card.style.display = "none";
    });
}

function btnClosePopup() {
    var cards = document.querySelectorAll(".card");

    document.getElementById("body").style.overflowY = "auto";
    document.getElementById("popupPelikaan").style.display = "none";
    document.getElementById("popupStella").style.display = "none";
    document.getElementById("popupOrange").style.display = "none";
    document.getElementById("popupCityGo").style.display = "none";

    cards.forEach(function(card) {
        card.style.display = "block";
    });
}
