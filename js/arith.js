//Ext JS file
//Get elements -- get text
let spanE = document.getElementById('num1');
let spanT = spanE.textContent;
let n1 = parseInt(spanT);

let n2 = parseInt(document.getElementById('num2').textContent);

//add numbers
let n3 = n2 + n1;

//display
document.write(n3);