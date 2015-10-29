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
