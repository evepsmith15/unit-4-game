$(document).ready(function () {

    //variable list
    var desultory = 0;
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

    var playAudioWin = new Audio();
    playAudioWin.src = './assets/chaos-emerald.mp3';

    var playAudioLose = new Audio();
    playAudioLose.src = './assets/tiduss-laugh.mp3';

    //starts the game
    var Start = function () {
        total = 0;
        desultory = CPUNumber(30, 150); //range for the main score
        emeralds.red.value = CPUNumber(1, 10);
        emeralds.blue.value = CPUNumber(1, 10);
        emeralds.yellow.value = CPUNumber(1, 10);
        emeralds.green.value = CPUNumber(1, 10);
        $("#total").text(total);
        $("#EmeraldValue").text(desultory);
        console.log("EmeraldValue: " + desultory);
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
        if (total === desultory) {
            win++;
            console.log(total);
            $("#total").text(total);
            $("#win").text(" " + win);
            playAudioWin.play();
            Start();
        }
        else if (total > desultory) {
            losses++;
            console.log(total);
            $("#total").text(total);
            $("#losses").text(" " + losses);
            playAudioLose.play();
            Start();
        }
    };

    Start();
    $("#buttonRed").on("click", function () {
        addValue(emeralds.red);
    });
    $("#buttonBlue").on("click", function () {
        addValue(emeralds.blue);
    });
    $("#buttonYellow").on("click", function () {
        addValue(emeralds.yellow);
    });
    $("#buttonGreen").on("click", function () {
        addValue(emeralds.green);
    });

});
