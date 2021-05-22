num1 = 10;
num2 = 20;
num3 = 45;
num4 = 50;
num5 = 100;

op2 = (num5 > num2 && num4 < num3) || !(num4 === num2) || num1 != num2;

document.write(op2);

/*operadores(intermedio)

-operadores de comparacion: comparan dos expresiones y devuelven un valor boolean que representa la relacion de sus valores.

Equality(igualdad) => (a == b) esto es para comparar

Inequality(inegualdad) => (a != b)

Identity(identidad) => (a === b) Estrictamente con diferencias de datos

Non-identity => (a !== b)

Greater than => (a > b)

Greter than or equal => (a >= b)

Less than => (a < b)

Less than or equal (a <= b)

###############################################################

-operadores logicos: Nos devuelven un resultado a partir de que se cumpla (o no) una condicion, su resultado es booleano, y sus operandos son valores logicos o asimilables a ellos.

                        #############

AND(&&)logico => expr1 && expr2; si ambas condiciones se cumplen, el resultado será true, de lo contrario será false.

numero1 = 10;
numero2 = 20;

resultado1 = numero1 < numero2;
resultado2 = numero1 != numero2;

document.write(resultado1 && resultado2);

###############################################################

OR(||)logico => expr1 || expr2; si cualquiera de los valores, aunque sea uno cumple verdadero, el resultado sera true, pero si ambas son falsas el resultado será false.

numero1 = 10;
numero2 = 20;

resultado1 = numero1 > numero2;
resultado2 = numero1 != numero2;

document.write(resultado1 || resultado2);

###############################################################

NOT(!)logico => !expr; Esto da lo contrario a lo que le damos, si una funcion es verdadera devuelve false, si el false devuelve true.

document.write(!true); esto devuelve "false" y viceversa "true"

###############################################################

combinacion de operaciones logicas:

num1 = 10;
num2 = 20;
num3 = 45;
num4 = 50;
num5 = 100;

op = (num1 > num2 || num5 != num3) && !(num4 == num2) && num1 < num2;

op2 = (num5 > num2 && num4 < num3) || !(num4 === num2) || num1 != num2;

document.write(op);
**/
