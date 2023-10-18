var queue = [];
var input = 0;

function equal(value){
    if (input !==0) {
       input = parseFloat(input);
        output(input);
    }

    var answer = value[0];
    var dividedByZero = 0;

    for (  var i = 2; i < value.length; i= i+2) {

        switch (queue[i-1]) {
            case '+':
                answer+= value[i];
                break;
            case '-':
                answer-= value[i];
                break;
            case '/':    if (value[i] === 0)   dividedByZero = 1;
                    else      answer = answer / value[i];

                break;
            case'*': answer = answer * value[i];
                break;
        }
    }

    answer = answer.toFixed(10);
    answer = parseFloat(answer);
    
    if ( dividedByZero === 1) { 
        empty();
        document.getElementById("answer").innerHTML =  "ERROR";
    }
    else
    {
        document.getElementById("answer").innerHTML =  answer ;
        input = answer;
        queue = [];
    }
}

function output(input){
    queue.push(input);
}

function empty() {
    queue = [];
    input = 0;
    document.getElementById("answer").innerHTML = "0";
}

function display(arg){
    if ( document.getElementById("answer").innerHTML ===  "ERROR" || (document.getElementById("answer").innerHTML == "0" && arg != "."))
    { 
        document.getElementById("answer").innerHTML = ""; 
    }
    if (!(arg === ".") || !input.match(/[.]/)) {
        input += arg;
        document.getElementById("answer").innerHTML += arg;
    }
}

function symbols(arg){
    if (input !== 0 && input !== "-") {
        input = parseFloat(input);
        output(input);
        output(arg);
        document.getElementById("answer").innerHTML +=arg;
        input = 0;
    }
    if (arg == "-"  && isNaN(queue[0]) && input !== "-"){
        input ="-";
        document.getElementById("answer").innerHTML = "-";
    }
}
