function task1() {
    'use strict';
    const x = parseInt(document.getElementById('task1').value);
    document.getElementById('task1-text').innerHTML = 5*x-3*Math.pow(x,2)+13;
}

function task2() {
    'use strict';
    const input1 = document.getElementById('task2-1').value;
    const input2 = document.getElementById('task2-2').value;
    const input3 = document.getElementById('task2-3').value;
    
    document.getElementById('task2-text').innerHTML = "Hello, " + input1 + " " + input2 + " " + input3 + " ";
}

function task3() {
    'use strict';
    const x = document.getElementById('task3-1').value;
    const y = document.getElementById('task3-2').value;
    
    if (x > y) {
        document.getElementById('task3-text').innerHTML = 'bananas';
        document.getElementById('task3-text').style = 'color:yellow';
    } else if (x < y) {
        document.getElementById('task3-text').innerHTML = 'porcupine';
        document.getElementById('task3-text').style = 'color:brown';
    } else if (x < 0 && x == y) {
        document.getElementById('task3-text').innerHTML = 'red apples';
        document.getElementById('task3-text').style = 'color:red';
    } else {
        document.getElementById('task3-text').innerHTML = 'green apples';
        document.getElementById('task3-text').style = 'color:green';
    }
}

function task4() {
    'use strict';
    const input = document.getElementById('task4').value.replace(/\D/g,'');
    if (input.length > 11 || input.length < 10 || (input.length == 11 && input.charAt(0) != 1)) {
        document.getElementById('task4-text').innerHTML = 'invalid';
        document.getElementById('task4-text').style = 'color:red';
    } else {
        document.getElementById('task4-text').innerHTML = 'valid';
        document.getElementById('task4-text').style = 'color:green';
    }
}

function task5() {
    'use strict';
    const input = document.getElementById('task5').value;
    document.getElementById('task5-text').innerHTML = input.split(', ')[2];
}
