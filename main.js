/**
 * Created by dndeli on 10/28/2015.
 */

function displayResults(type, value, item) {

    console.log("type: ", type, ", value: ", value, ", item: ", item);
    switch (value) {
        case undefined:
            $('#inputDisplay').html("");
            break;
        default:
            $('#inputDisplay').html(value);
            break;
    }
}
//my_Calculator - creates a new calculator object
var my_calculator = new calculator(displayResults);
//after DOM load add click handlers to all buttons
$(document).ready(function() {
    $('button').on('click', function () {
        var val = $(this).text();
        console.log("btn clicked : ", val);
        switch(val) {
            case 'CE':
                my_calculator.allClear();
                break;

            case 'C':
                my_calculator.clear();
                break;

        default:
            my_calculator.addItem($(this).text());
            break;
        }
    });
});


var num1 = [];
var num2 = [];
var value = undefined;
//adding functionality
var add = function(){

    return num1 + num2
};
//subtract functionality
var subtract = function (){
    return num1 - num2
};
//division functionality
var divide = function (){
    return num1 / num2
};
//multiply functionality
var multiply = function (){
    return num1 * num2
};
//add dot functionality

var Dot = function () {
    if(value == undefined){
        value = "0.";
    }else{
        my_calculator.addItem(text("."));
    }

};

