/* footer fiets */
var xPos = 0;
var xToename = 0.1;
var right = true;

setInterval(function() {

    if (xPos >= 98 && right) {
        xPos = 98;
        document.getElementById("iFooter").style.transform = "scaleX(-1)";
        right = false;

    } 
    
    else if (xPos <= 0 && !right) {
        xPos = 0;
        document.getElementById("iFooter").style.transform = "scaleX(1)";
        right = true;
    }

    if (right) {
        xPos += xToename;
    } 

    else {
        xPos -= xToename;
    }

    document.getElementById("iFooter").style.left = xPos + "%";

}, 25);


/* Menu buttons */
function btnHome() {
    document.getElementById("btnHome").style = "color: #98cd47; border-left: none;";
    document.getElementById("btnFietsen").style = "color: white";
    document.getElementById("btnVerhuur").style = "color: white";
    document.getElementById("btnActie").style = "color: white";
    document.getElementById("btnContact").style = "color: white";
    document.getElementById("btnOpeningstijden").style = "color: white";
    document.getElementById("btnOverOns").style = "color: white";
}

function btnFietsen() {
    document.getElementById("btnHome").style = "color: white; border-left: none;";
    document.getElementById("btnFietsen").style = "color: #98cd47";
    document.getElementById("btnVerhuur").style = "color: white";
    document.getElementById("btnActie").style = "color: white";
    document.getElementById("btnContact").style = "color: white";
    document.getElementById("btnOpeningstijden").style = "color: white";
    document.getElementById("btnOverOns").style = "color: white";
}

function btnVerhuur() {
    document.getElementById("btnHome").style = "color: white; border-left: none;";
    document.getElementById("btnFietsen").style = "color: white";
    document.getElementById("btnVerhuur").style = "color: #98cd47";
    document.getElementById("btnActie").style = "color: white";
    document.getElementById("btnContact").style = "color: white";
    document.getElementById("btnOpeningstijden").style = "color: white";
    document.getElementById("btnOverOns").style = "color: white";
}

function btnActie() {
    document.getElementById("btnHome").style = "color: white; border-left: none;";
    document.getElementById("btnFietsen").style = "color: white";
    document.getElementById("btnVerhuur").style = "color: white";
    document.getElementById("btnActie").style = "color: #98cd47";
    document.getElementById("btnContact").style = "color: white";
    document.getElementById("btnOpeningstijden").style = "color: white";
    document.getElementById("btnOverOns").style = "color: white";

}

function btnContact() {
    document.getElementById("btnHome").style = "color: white; border-left: none;";
    document.getElementById("btnFietsen").style = "color: white";
    document.getElementById("btnVerhuur").style = "color: white";
    document.getElementById("btnActie").style = "color: white";
    document.getElementById("btnContact").style = "color: #98cd47";
    document.getElementById("btnOpeningstijden").style = "color: white";
    document.getElementById("btnOverOns").style = "color: white";
}   

function btnOpeningstijden() {
    document.getElementById("btnHome").style = "color: white; border-left: none;";
    document.getElementById("btnFietsen").style = "color: white";
    document.getElementById("btnVerhuur").style = "color: white";
    document.getElementById("btnActie").style = "color: white";
    document.getElementById("btnContact").style = "color: white";
    document.getElementById("btnOpeningstijden").style = "color: #98cd47";
    document.getElementById("btnOverOns").style = "color: white";
}

function btnOverOns() {
    document.getElementById("btnHome").style = "color: white; border-left: none;";
    document.getElementById("btnFietsen").style = "color: white";
    document.getElementById("btnVerhuur").style = "color: white";
    document.getElementById("btnActie").style = "color: white";
    document.getElementById("btnContact").style = "color: white";
    document.getElementById("btnOpeningstijden").style = "color: white";
    document.getElementById("btnOverOns").style = "color: #98cd47";
}

function btnWinkelWagen() {
    var items = document.getElementById("aWW").innerHTML;
    alert("U heeft " + items + " items in uw winkelwagen.");
}