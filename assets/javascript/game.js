$(document).ready(function () {

    //variable list
    var desultory;
    var win = 0;
    var losses = 0;
    var total = 0; //user's score
    var CPUNumber; //number to match 
    var emeralds = { //instead of having 4 different variables, all respond to one 
        red: {
            name: "Red",
            value: 0
        },
        blue: {
            name: "Blue",
            value: 0
        },
        yellow: {
            name: "Yellow",
            value: 0
        },
        green: {
            name: "Green",
            value: 0
        },
    };

    //----------------------------------------------

    //code to randomly generate a number
    CPUNumber = function (min, max) { //takes a minium and maximum number
        return Math.floor(Math.random() * (max - min + 1)) + min; //prevents the number from being 0
    };

    //target score 
    desultory = function (min, max) { //takes a minium and maximum number
        return Math.floor(Math.random() * (max - min + 1)) + min; //prevents the number from being 0
    };

    playAudio = function() {

    };

    //starts the game
    var Start = function () {
        total = 0;
        desultory = (30, 150); //range for the main score
        emeralds.red.value = CPUNumber(1, 10);
        emeralds.blue.value = CPUNumber(1, 10);
        emeralds.yellow.value = CPUNumber(1, 10);
        emeralds.green.value = CPUNumber(1, 10);
        $("#total").text(total);
        $("#Emerald Value").text(CPUNumber);
    };

    //code to give the crystals a random number
    var addValue = function (clickEmerald) {
        total += clickEmerald.value;
        $("#total").text(total);
        WinLose();
        console.log("Score: " + total);
    };


    //win/lose condition
    var WinLose = function () {
        var w = document.getElementById(SoundClipsWin);
        var l = document.getElementById(SoundClipLosses);
        if (total === CPUNumber) {
            win++;
            console.log(total);
            $("#total").text(total);
            $("#wins").text("Wins: " + win);
            function playAudio() {
                w.play();
            }
            Start();
        }
        else if (total > CPUNumber) {
            losses++;
            console.log(total);
            $("#total").text(total);
            $("#losses").text("Losses: " + losses);
            function playAudio() {
                l.play();
            }
            Start();
        }
    };
    Start();
    $("#buttonRed").on("click", function () {
        addValue(Emerald.red);
    });
    $("#buttonBlue").on("click", function () {
        addValue(Emerald.blue);
    });
    $("#buttonYellow").on("click", function () {
        addValue(Emerald.yellow);
    });
    $("#buttonGreen").on("click", function () {
        addValue(Emerald.green);
    });

});
