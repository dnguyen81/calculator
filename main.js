/**
 * Created by dndeli on 10/28/2015.
 */
var num1 = null;
var num2 = null;
var op = null;
var num_array = [''];
var i = 0;
var decimalAdded = false;
//=========populate assigns global variables num1, num2, and op============/
function populate() {
    for (i = 0; i < num_array.length; i++) {
        if (!isNaN(num_array[i])) {
            if (num1 === null) {
                num1 = num_array[i];
            } else if (num1 == ""){
                num1 = num_array[i];
            }
            else if (num2 === null) {
                num2 = num_array[i];
                if (num2 === ""){
                    num2 = num1;
                }
            }else if (num_array[i] == ""){
                num2 = num1;
            }else if (num_array[i]== NaN){
                num2 = num1;
            }else if (num2 == num1){
                num2 = num_array[i];
            }
        }else if (op != null){
            op = num_array[i];
        } else if (op === null) {
            op = num_array[i];
        }
    }

    console.log("this is num1", num1, "this is num2 ", num2, "this is op ", op);
}

//========calculation function, uses switch and cases to determine the operand and results to perform==============//
function calc(num1, num2, op) {
    var result = "";
    var missing = 0;
    if (num1=='' && num2==null && op==null){
        console.log("missing called", missing);
        result = missing;

    }else if(num1 != null && num2==null && op==null){
        result = num1;
        displayResults(result);
    } else {
            switch (op) {

                case '+':
                    result = parseFloat(num1) + parseFloat(num2);
                    break;
                case '-':
                    result = parseFloat(num1) - parseFloat(num2);
                    break;
                case 'x':
                    result = parseFloat(num1) * parseFloat(num2);
                    break;
                case '/':
                    if (num2 === "0") {
                        num2 = "Error";
                        console.log("this is num2 ", num2);
                        result = "Error";
                        break;

                    }
                    result = parseFloat(num1) / parseFloat(num2);

                    break;
            }
            }



    console.log("This is the result" + result);
    displayResults(result);
    var numString = result.toString();
    return numString;


}
//============Add Decimal, Disable, and Reenable Decimal=========//
function addDot(){

    if(decimalAdded == false){
        $('.period, #period').prop("disabled", true);
        decimalAdded = true;
    }
}

function reenableDot(){
    console.log("reenable dot");
    if(decimalAdded == true) {

        $('.period, #period').prop("disabled", false);
        decimalAdded = false;
    }
}
function splice() {

}
//reset global variables for further calculations
function resetCalc(){
    num1 = null;
    num2 = null;
//    op = null;
}
//display function
function displayResults(finish) {

    // console.log("type: ", type, ", value: ", value, ", item: ", item);
    switch (finish) {
        case undefined:
            $('#inputDisplay').html("");
            break;
        default:
            $('#inputDisplay').html(finish);
            break;
    }
}

console.log(calc(num1, num2, op));

//click function to add integers from calculator buttons
function input_digit(number_string) {
    num_array[i] += number_string;
}
//increments i for the for loop to move along the array to populate
function increment() {
    i++;
    num_array.push("");
    console.log("increment", i);
}

//sets increment to 0 for calculation to begin again after array is changed from calculation
function decrement() {
    i=0;

    console.log("decrement", i);
}
console.log(num_array[i]);
//clear, resets the last number to null
function clear() {
    displayResults('');
    num_array.pop();
    num_array.push('');
}

//clearAll, resets calculator to load state

function clearAll() {
    num1 = null;
    num2 = null;
    op = null;
    num_array = [""];
    i=0;
    displayResults("0");
}
$(document).ready(function () {

    $('#operators').on('click', 'button', function () {
        var num = null;
        num = $(this).text();
        console.log("operator clicked");
        increment(i);
        input_digit(num);
        increment(i);
        displayResults(num);
        reenableDot();
    });
//operators click function end

    $('#clearButtons, #clearAll').on('click', 'button', function () {
        var num = $(this).text();
        switch (num) {
            case "C":
                clear();
                reenableDot();
                console.log("clear works");
                break;
            case "CE":
                clearAll();
                reenableDot();
                console.log("clearall works");
                break;
        }

    });
    //clear buttons end

    $('.equals, .eval').on('click', 'button', function () {

        var finish = "";

        populate();

        console.log('calculation');

        finish = calc(num1, num2, op);

        console.log(finish);

        num_array.splice(i-2,1);
        num_array.splice(i,0,finish);
        decrement();
        resetCalc();
        reenableDot();
        return finish;
    });
    //equals button clicked function end

    $('.keys, #numberInput').on('click', 'button', function () {
        var num = null;

        console.log('works');
        console.log($(this).text());

        num = $(this).text();
        // addDot();
        input_digit(num);
        console.log(num_array[i]);
        displayResults(num_array[i]);

    });
    $('.period, #period').on('click', 'button', function(){
        var num = null;

        console.log('works');
        console.log($(this).text());

        num = $(this).text();
        addDot();

        input_digit(num);
        console.log(num_array[i]);
        displayResults(num_array[i]);
    });
    //number input end
});
//document ready function end