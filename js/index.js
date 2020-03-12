var reset = document.getElementsByClassName("resetButton");
var input = document.getElementById("input");
var resArea = document.getElementById("resultValue");
var logArea = document.getElementById("logInformation");

var operation = "";
var buffer="";
var res = 0;

function clear(){
    input.value = "";
}
function resetButton(){
    clear();
    resArea.value = "";
    res=0;
    operation = "";
    buffer = "";
};
function operationButton(elem){
    let op="";
    if(buffer == ""){
        buffer = elem;
        res = input.value;
        resArea.value = res;
        operation = operation + res;
        console.log(operation);
        clear();

    }
    else{
        console.log("El buffer es :" + buffer);
        console.log("el resultado es:" + res);
        op = res + buffer + input.value;
        operation += buffer + input.value;
        console.log(op);
        console.log(operation);
        res = eval(op);
        resArea.value = res;
        buffer = elem;
        clear();
    }
    input.focus();
}

function igualButton(){
    let op="";
    console.log("El buffer es :" + buffer);
    console.log("el resultado es:" + res);
    op = res + buffer + input.value;
    operation += buffer + input.value;
    console.log(op);
    console.log(operation);
    res = eval(op);
    resArea.value = res;
    buffer = "";
    logArea.value += operation + "=" + res + '\n';
    clear();
    resArea.value = "";
    res=0;
    operation = "";
}