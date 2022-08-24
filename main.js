const selectButton = document.querySelectorAll('.button');
const selectOperator = document.querySelectorAll('.operator');
const selectDelete = document.querySelector('.delete');
const selectResult = document.querySelector('.result');


var firtsNumber = '';
var secondNumber = '';
var operatorButton = '';
var empty = '';
var resultNumber = '';




selectButton.forEach(button => {
    button.addEventListener('click', () => {
        if(operatorButton == ''){        
            firtsNumber = firtsNumber + button.innerHTML;
            firtsNumber = parseFloat(firtsNumber);
            console.log('primero ' + firtsNumber);
            display(firtsNumber);
        }
        else {
            secondNumber = secondNumber + button.innerHTML;
            secondNumber = parseFloat(secondNumber);
            console.log('segundo ' + secondNumber);
            display(secondNumber);
        }
        
        
    });
});


selectDelete.addEventListener('click', () => {
    firtsNumber = '';
    secondNumber = '';
    operatorButton = '';
    document.getElementById('digital').innerHTML = '';
})

selectOperator.forEach(button => {
    button.addEventListener('click', () => {
        operatorButton = operatorButton + button.innerHTML;

        display(operatorButton);
    });
});


selectResult.addEventListener('click', () => {
    result(operatorButton);
    display(resultNumber);
    firtsNumber = '';
    secondNumber = '';
    operatorButton = '';
})

///////////////////// FUNCTIONS //////////////////////

// Print on display

function display(x){
    return document.getElementById('digital').innerHTML = x;
};



// Result button

function result(operating){
    
    if(secondNumber === 0){
        document.getElementById('digital').innerHTML = 'No es posible';
        firtsNumber = '';
        secondNumber = '';
        operatorButton = '';
        console.log('No es posible');
    }
    
    else if(operating === '+'){
        console.log('chau');
        add(firtsNumber, secondNumber);
    }

    else if (operating === '-'){
        subtract(firtsNumber, secondNumber);
    }

    else if (operating === '/'){
        divide(firtsNumber, secondNumber);
    }
    
    else if (operating === 'x'){
        multiply(firtsNumber, secondNumber);
    }

        
    
}

// Math operator 

    function add(a, b){
        return resultNumber = a + b;
    };

    function multiply(a, b){
        return resultNumber = a * b;
    };

    function divide(a, b){
        return resultNumber = a / b;
    };

    function subtract(a, b){
        return resultNumber = a - b;
    };




