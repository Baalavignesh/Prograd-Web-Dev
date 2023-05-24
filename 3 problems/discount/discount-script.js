function output(msg){
    document.getElementById("answer").innerHTML = msg;
}

function getInput(){
    let num1 = document.getElementById("input1");
    let num2 = document.getElementById("input2");
    return [num1.value , num2.value]
}

function add(){
    let num1 , num2 =getInput();
    output(`${num1} + ${num2} = `+num1+num2);
}
function sub(){
   let num1 , num2 =getInput();
    output(`${num1} - ${num2} = `+num1-num2);
}
function mul(){
    let num1 , num2 =getInput();
    output(`${num1} * ${num2} = `+ num1*num2);
}
function div(){
   let  num1 , num2 =getInput();
    output(`${num1} / ${num2} = `+ num1/num2);
}