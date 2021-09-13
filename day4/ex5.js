//이승준
let start;
let end;
let str;

function strMethod(){
    str = prompt('문자열 입력(am 포함)');
    
}

function startNo(){
    start = prompt('시작 인덱스');
}

function endNo(){
    end = prompt('끝 인덱스');
        document.getElementById('origin').innerHTML= str;
        document.getElementById('len').innerHTML= str.length;;
        document.getElementById('last').innerHTML= str.lastIndexOf('am');;
        document.getElementById('subs').innerHTML= str.substring(start,end);;
        document.getElementById('subsend').innerHTML= str.substring(end);; 
}