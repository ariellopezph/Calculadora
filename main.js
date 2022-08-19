const selectButton = document.querySelectorAll('.button');
const selectOperator = document.querySelectorAll('.operator');
const selectDelete = document.querySelector('.delete');
const selectResult = document.querySelector('.result');


var firtsNumber = 0;
var secondNumber = '';
var operator = '';
var empty = '';
var result = '';

selectButton.forEach(button => {
    button.addEventListener('click', () => {
        if(firtsNumber.inInteger()){
            addNumber(button.innerHTML);
            console.log('if: ' + firtsNumber)
            
        }
        else {
            addSecondNumber(button.innerHTML);
            console.log('else: ' + secondNumber);
        }
    });
});


selectDelete.addEventListener('click', () => {
    deleteAll();
})

selectOperator.forEach(button => {
    button.addEventListener('click', () => {
        addNumber(button.innerHTML);
    });
});


selectResult.addEventListener('click', () => {
    result();
})

///////////////////// FUNCTIONS //////////////////////

// Print on display

function display(x){
    return document.getElementById('digital').innerHTML = x;
};

function addNumber(b){
    firtsNumber = firtsNumber + b;
    display(firtsNumber);
};

function addSecondNumber(c){
    secondNumber = secondNumber + c;
    display(secondNumber);
};

// Delete button

function deleteAll(){
    firtsNumber = '';
    secondNumber = '';
    document.getElementById('digital').innerHTML = empty;
}

// Result button

function result(){
    add(firtsNumber,secondNumber);
    firtsNumber = '';
    secondNumber = '';
    document.getElementById('digital').innerHTML = result;
}

// Math operator 

function add(a, b){
    return result = a + b;
};

function multiply(a, b){
    return result = a * b;
};

function divide(a, b){
    return result = a / b;
};

function subtract(a, b){
    return result = a - b;
};



