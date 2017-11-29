function task1() {
    'use strict';
    const x = parseInt($('#task1').val());
    $('#task1-text').html(5*x-3*Math.pow(x,2)+13);
}

function task2() {
    'use strict';
    const input1 = $('#task2-1').val();
    const input2 = $('#task2-2').val();
    const input3 = $('#task2-3').val();
    
    $('#task2-text').html("Hello, " + input1 + " " + input2 + " " + input3 + "!");
}

function task3() {
    'use strict';
    const x = $('#task3-1').val();
    const y = $('#task3-2').val();
    
    if (x > y) {
        $('#task3-text').html('bananas');
        $('#task3-text').css('color','yellow');
    } else if (x < y) {
        $('#task3-text').html('porcupine');
        $('#task3-text').css('color','brown');
    } else if (x < 0 && x == y) {
        $('#task3-text').html('red apples');
        $('#task3-text').css('color','red');
    } else {
        $('#task3-text').html('green apples');
        $('#task3-text').css('color','green');
    }
}

function task4() {
    'use strict';
    const input = $('#task4').val().replace(/\D/g,'');
    if (input.length > 11 || input.length < 10 || (input.length == 11 && input.charAt(0) != 1)) {
        $('#task4-text').html('invalid');
        $('#task4-text').css('color','red');
    } else {
        $('#task4-text').html('valid');
        $('#task4-text').css('color','green');
    }
}

function task5() {
    'use strict';
    const input = $('#task5').val();
    $('#task5-text').html(input.split(', ')[2]);
}
