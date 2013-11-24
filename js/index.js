/*
 Timer Version 1.0
 Author : Sabbir Ahmed
 Date  :  22-11-2013
 Github Repo : https://github.com/thesabbir/
 */

// Necessary Variable Declaration
var setm = document.getElementById("time"),
    disp = document.getElementById("display"),
    btn = document.getElementById("btn"),
    inputarea = document.getElementById("ip"),
    seconds = 60;

//Event Listener with Main function
btn.addEventListener("click", function () {
    if (setm.value == "") { //Error Handler
        return alert("Error !\nPlease Enter Vaild Number of Minute !");//TODO display a animated message instead
    }
    inputarea.style.display = "none";    //Hiding input Field and Button
    var minute = Number(setm.value),
        time = minute * seconds; // This is the main time
    minute--; // Decreased 1 minute for display
    var timer = setInterval(        // Interval of 1 second timer will execute a callback function
        function () {
            if (time >= 1) {
                seconds--;
                time--;
                disp.innerHTML = minute + " : " + seconds; //DISPLAY..
                if (seconds <= 0) {
                    minute--;
                    seconds = 60;
                }
            } else {
                clearInterval(timer); // Clearing Interval "timer"
                alert("Finished !"); //Message when timer finished TODO display a animated notification with sound instead
                inputarea.style.display = "inline"; //Back in Time
                disp.innerHTML = "";
                setm.value = "";
            }
        }, 1000); //End of timer
});//End of Event Listener