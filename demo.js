var buttons = document.getElementsByClassName("button");
var display = document.getElementById("display");
var operand1 = 0;
var operand2 = null;
var operator = null;

var result="";

document.addEventListener('keydown',(event)=>{
    let value="";
    if(event.keyCode === 98){
        console.log("2");
        value="2";   
        display.innerText+=value;     
    }else if(event.keyCode === 96){
        console.log("0");
        value="0";   
        display.innerText+=value;     
    }else if(event.keyCode === 110){
        console.log(".");
        value=".";   
        display.innerText+=value;     
    }else if(event.keyCode === 99){
        console.log("3");
        value="3";   
        display.innerText+=value;     
    }else if(event.keyCode === 97){
        console.log("1");
        value="1";   
        display.innerText+=value;     
    }else if(event.keyCode === 102){
        console.log("6");
        value="6";   
        display.innerText+=value;     
    }else if(event.keyCode === 101){
        console.log("5");
        value="5";   
        display.innerText+=value;     
    }else if(event.keyCode === 100){
        console.log("4");
        value="4";   
        display.innerText+=value;     
    }else if(event.keyCode === 105){
        console.log("9");
        value="9";   
        display.innerText+=value;     
    }else if(event.keyCode === 104){
        console.log("8");
        value="8";   
        display.innerText+=value;     
    }else if(event.keyCode === 103){
        console.log("7");
        value="7";   
        display.innerText+=value;     
    }else if(event.keyCode === 97){
        console.log("1");
        value="1";   
        display.innerText+=value;     
    }else if(event.keyCode === 107){
        operand1 = parseFloat(display.textContent);
        result+=operand1;
        result+="+";
        console.log(result);
        display.innerText="";
    }

    // Taking operators on keydown
    else if(event.keyCode === 109){
        operand1 = parseFloat(display.textContent);
        result+=operand1;
        result+="-";
        console.log(result);
        display.innerText="";
    }else if(event.keyCode === 106){
        operand1 = parseFloat(display.textContent);
        result+=operand1;
        result+="*";
        console.log(result);
        display.innerText="";
    }else if(event.keyCode === 111){
        operand1 = parseFloat(display.textContent);
        result+=operand1;
        result+="/";
        console.log(result);
        display.innerText="";
    }else if(event.keyCode === 107){
        operand1 = parseFloat(display.textContent);
        result+=operand1;
        result+="+";
        console.log(result);
        display.innerText="";
    }
    else if(event.keyCode === 187){
        operand2 = parseFloat(display.textContent);
        result+=operand2;
        // result+="+";
        let o_p=eval(result);
        console.log(result);
        display.innerText=o_p;
        result="";
    }
    else if(event.keyCode === 13){
        operand2 = parseFloat(display.textContent);
        result+=operand2;
        let o_p=eval(result);
        display.innerText=o_p;
        result="";
        // console.log(result);
    }
});
for(var i = 0; i < buttons.length; i++){
    buttons[i].addEventListener('click',function(){
        var value = this.getAttribute('data-value');
        console.log(value);
        if(value == "+"){
           operator = "+";
           console.log("+");
           operand1 = parseFloat(display.textContent);
           result+=operand1;
           result+="+";     
           display.innerText="";        
        }else if(value == "*"){
           operator = "*";
           
           console.log("*");
           operand1 = parseFloat(display.textContent);
           result+=operand1;
           result+="*";     
           display.innerText="";        
        }else if(value == "-"){
            operator = "-";
            
            console.log("-");
            operand1 = parseFloat(display.textContent);
            result+=operand1;
            result+="-";     
            display.innerText="";        
         }else if(value == "/"){
            operator = "/";
            
            console.log("/");
            operand1 = parseFloat(display.textContent);
            result+=operand1;
            result+="/";     
            display.innerText="";        
         }else if(value == '='){
            operand2 = parseFloat(display.textContent);
            result+=operand2;
            console.log(result);
            console.log("=");
            let o_p=eval(result);
            display.innerText=o_p;
            console.log(o_p);
            result="";
        }else if(value == 'C'){
            let str="";
            console.log(result);
            display.innerText=str;
        }else if(value == 'AC'){
            operand2 = null;
            result = "";
            console.log(result);
            display.innerText=result;
        }else{
            display.innerText += value;
        }


    });
}
