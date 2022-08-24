# Calculadora


La calculadora consta de cuatro const con prefico select. Almacenan los datos ingresados por el usuario, ya sea numeros como operadores matematicos simples. Utilizando querySelector para traer la informacion del HTML. Tambien encontraremos cuatro var que almacenaran los datos, operadores, y el resultado de las cuentas.
Utilizando eventListener dentro de un bucle forEach para crear un ciclo de escucha constante, almacenara en la var firstNumber, unicamente si el operador no fue ingresado antes, el primer dato ingresado por el usuario. Esto se realizo para que si ya hay operador almacenado previamente, guarde el nuevo dato en la var secondNumber y a continuacion se pueda resolver la cuenta.
selectDelete tambien contiene un evento de escucha con el fin de vaciar todas las var y el display.
selectOperator almacena el operador que se ingresa por el usuario y lo imprime en pantalla.
selectResult llama a la funcion result pasandole como parametro operatorButton, donde dicha funcion primero revisara si la var secundNumber es cero. De serlo no realizara la cuenta. Caso contrario a continuacion compara que tipo de operador se almacena en opering para realizar la cuenta llamando a la funcion correcpondiente.
