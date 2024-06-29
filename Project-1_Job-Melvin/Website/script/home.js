/* Slideshows */
function forwardSlide() {
    if (document.getElementById("slide1").style.display == "block") {
        document.getElementById("slide1").style.display = "none";
        document.getElementById("slide2").style.display = "block";
    } 
    
    else if (document.getElementById("slide2").style.display == "block") {
        document.getElementById("slide2").style.display = "none";
        document.getElementById("slide3").style.display = "block";
    } 
    
    else if (document.getElementById("slide3").style.display == "block") {
        document.getElementById("slide3").style.display = "none";
        document.getElementById("slide1").style.display = "block";
    }
}

function backwardSlide() {
    if (document.getElementById("slide1").style.display == "block") {
        document.getElementById("slide1").style.display = "none";
        document.getElementById("slide3").style.display = "block";
    } 

    else if (document.getElementById("slide2").style.display == "block") {
        document.getElementById("slide2").style.display = "none";
        document.getElementById("slide1").style.display = "block";
    } 
    
    else if (document.getElementById("slide3").style.display == "block") {
        document.getElementById("slide3").style.display = "none";
        document.getElementById("slide2").style.display = "block";
    }
}

setInterval(forwardSlide, 5000);
window.addEventListener("load", onLoad);

/* Winkel open of dicht */
function onLoad() {
    var date = new Date();
    var day = date.getDay();
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var time = hours + ":" + minutes;

        if (day == 1) {
            if (time >= "12:30" && time <= "18:00") {
                document.getElementById("storeOpen").style.display = "block";
                document.getElementById("storeClosed").style.display = "none";
            }
            else{
                document.getElementById("storeOpen").style.display = "none";
                document.getElementById("storeClosed").style.display = "block";
            }
        }

        else if (day == 2 || day == 3 || day == 4) {
            if (time >= "08:30" && time <= "18:00") {
                document.getElementById("storeOpen").style.display = "block";
                document.getElementById("storeClosed").style.display = "none";
            }
            else {
                document.getElementById("storeOpen").style.display = "none";
                document.getElementById("storeClosed").style.display = "block";
            }
        }

        else if (day == 5) {
            if (time >= "08:30" && time <= "19:30") {
                document.getElementById("storeOpen").style.display = "block";
                document.getElementById("storeClosed").style.display = "none";
            }
            else{
                document.getElementById("storeOpen").style.display = "none";
                document.getElementById("storeClosed").style.display = "block";
            }
        }

        else if (day == 6) {
            if (time >= "09:00" && time <= "17:00") {
                document.getElementById("storeOpen").style.display = "block";
                document.getElementById("storeClosed").style.display = "none";
            }
            else{
                document.getElementById("storeOpen").style.display = "none";
                document.getElementById("storeClosed").style.display = "block";
            }
        }

        else{
            document.getElementById("storeOpen").style.display = "none";
            document.getElementById("storeClosed").style.display = "block";
        }
    }