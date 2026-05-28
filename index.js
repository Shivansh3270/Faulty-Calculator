let num1 = parseFloat(prompt("Enter a number:"));
let num2 = parseFloat(prompt("Enter another number:"));

let operator = prompt("Enter an operator (+, -, *, /):");
let random = Math.random();
let result;

if(random < 0.1){
    if(operator === "+"){
        result = num1 - num2;
    }
    else if(operator === "-"){
        result = num1 / num2;
    }
    else if(operator === "*"){
        result = num1 + num2;
    }
    else if(operator === "/"){
        result = num1 ** num2;
    }
    else{
        result = "Invalid Operator";
    }
    alert("Faulty calculator:"+result);
}
else{
    if(operator === "+"){
        result = num1 + num2;
    }
    else if(operator === "-"){
        result = num1 - num2;
    }
    else if(operator === "*"){
        result = num1 * num2;
    }
    else if(operator === "/"){
        result = num1 / num2;
    }
    else{
        result = "Invalid Operator";
    }
    alert("Normal calculator:"+result);
}
