$(document).ready(function () {

    //variable list
    var random; //random number
    var desultory = []; //another word for random. CPU Array 
    var randomC = []; //random crystal number 
    var win = 0;
    var losses = 0;
    var total = 0; //user's score
    var blue = 0;
    var red = 0;
    var green = 0;
    var yellow = 0;
    var CPUNumber; //number to match 

    //code to randomly generate a number
    CPUNumber = Math.floor((Math.random() * 100) + 1);
    console.log("CPUNumber" + CPUNumber);


    function Randomize(arr) {
        var r = arr[Math.floor(Math.random() * arr.length)];
        random = r;
        console.log("random number: " + random);
    }

    //randomly generates a number for 4 arrays
    function RandomizeR(arr) {
        for (var k = 0; k < 4; k++) { //array only goes up to 4
            var c = arr[Math.floor(Math.random() * arr.length)];
            randomC.push(c);
        }
    }
    //code to give the crystals a random number
    function Value(arr) {
        for (var v = 0; v < arr.length; v++) {
            $("#button" + (v + 1).attr("value", arr[v])); //makes sure each value is different
        }
        red[0];
        blue[1];
        yellow[2];
        green[3];
    }

    Randomize(desultory);
    RandomizeR(crystals);
    Value(randomC);
    //code to give crystals a button 

    $("#buttonRed").on("click", function () {
        total += red;
        $("#total").html(total);
    });
    $("#buttonBlue").on("click", function () {
        total += blue;
        $("#total").html(total);
    });
    $("#buttonYellow").on("click", function () {
        total += yellow;
        $("#total").html(total);
    });
    $("#buttonGreen").on("click", function () {
        total += green;
        $("#total").html(total);
    });

    //reset values to 0
    function Reset(r) {
        randomC = [];
        Randomize(desultory);
        RandomizeR(crystals);
        Value(randomC);
        totalScore = 0;
        $("#totalNumber").html(totalScore);
        alert(r);

    }

    //win/lose condition
    $("button").on("click", function () {
        if (total === CPUNumber) {
            win++;
            console.log(total);
            $("#total").html(total);
            $("#wins").html("Wins: " + win);
            <audio src=".\assets\chaos-emerald.mp3"></audio>
        }
        else if (total > CPUNumber) {
            losses++;
            console.log(total);
            $("#total").html(total);
            $("#losses").html("Losses: " + losses);
            <audio src=".\assets\tiduss-laugh.mp3"></audio>
        }

    });
});
