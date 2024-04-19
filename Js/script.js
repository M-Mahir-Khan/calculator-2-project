
const maincontainer = createAndAppend("div","id","maincontainer",document.body,null,null,"click");
const input = createAndAppend("input","class","input",maincontainer);
const calculator = createAndAppend("div","class","calculator",maincontainer);
const acBtn = createAndAppend("button","class","cancelBtn colorCh",calculator,"AC");
const delBtn = createAndAppend("button","class","delBtn colorCh",calculator,"DEl");
const modularBtn = createAndAppend("button","class","modularBtn colorCh",calculator,"%","%");
const divideBtn = createAndAppend("button","class","divideBtn colorCh",calculator,"/","/");
const sevenBtn = createAndAppend("button","class","sevenBtn",calculator,"7","7");
const eightBtn = createAndAppend("button","class","eightBtn",calculator,"8","8");
const nineBtn = createAndAppend("button","class","nineBtn",calculator,"9","9");
const multiBtn = createAndAppend("button","class","multiBtn colorCh",calculator,"*","*");
const fourBtn = createAndAppend("button","class","fourBtn",calculator,"4","4");
const fiveBtn = createAndAppend("button","class","fiveBtn",calculator,"5","5");
const sixBtn = createAndAppend("button","class","sixBtn",calculator,"6","6");
const minusBtn = createAndAppend("button","class","minusBtn colorCh",calculator,"-","-");
const oneBtn = createAndAppend("button","class","oneBtn",calculator,"1","1");
const twoBtn = createAndAppend("button","class","twobtn",calculator,"2","2");
const threeBtn = createAndAppend("button","class","three",calculator,"3","3");
const plusBtn = createAndAppend("button","class","plusBtn colorCh",calculator,"+","+");
const zeroBtn = createAndAppend("button","class","zeroBtn",calculator,"0","0");
const doublezeroBtn = createAndAppend("button","class","doubleZeroBtn",calculator,"00","00");
const pointBtn = createAndAppend("button","class","pointBtn",calculator,".",".");
const equalBtn = createAndAppend("button","class","equalBtn colorCh",calculator,"=");


function createAndAppend(tag,attName,atttype,parent,text,value,event){
    let element = document.createElement(tag);

    if(!!attName && atttype){
        element.setAttribute(attName,atttype)
    }
    if(!!parent){
        parent.append(element)
    }
    if(!!text){
        element.innerText = text;
    }
    if(!!value){
        element.value = value;
    }
    if(!!event){
        element.addEventListener(event,listener)
    }

    function listener(e){
        e.preventDefault();
        e.stopPropagation();

        let currentValue = e.target.value;

        if(e.target.tagName != "BUTTON"){
            return
        }

        if(Object.is(Number(currentValue),NaN) === false){
            input.value += e.target.value;
        }

        if(e.target.classList[0] == "cancelBtn"){
            input.value = "";
        }
        
        let str = input.value;
        let index = str.length-1;

        if(e.target.classList[0] == "delBtn"){
            input.value = str.substring(0,str.length -1);
        }
        else if(Object.is(Number(str[index]),NaN) === true){
            return;
        }

        if(e.target.classList[0] === "equalBtn"){
            if(input.value == ""){
                input.value = "0";
            }
            input.value = eval(input.value);
        }

        if(Object.is(Number(currentValue),NaN) === true){
            input.value += e.target.value;
        }

    }

    return element;
};