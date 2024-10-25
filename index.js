
let btn = document.querySelector('select')
let main = document.createElement('h3')
main.id='result'
main.className='box2'
document.getElementById("mainContent").appendChild(main)

btn.addEventListener('click', calculate)
   
function calculate(){
    let section = document.getElementById('section')
   
let operator1 = Number(document.getElementById('operator1').value)
let operator2 = Number(document.getElementById('operator2').value)

let maths= section.options[section.selectedIndex].value
let number1='' ,number2='', methods='';

switch(maths){

case 'addition':
number1=operator1
number2=operator2    
methods=number1 + number2
break

    case 'subtraction':
    number1=operator1
    number2=operator2   
    methods=number1 - number2
    break

    case 'multiplication':
    number1=operator1
    number2=operator2   
    methods=number1 * number2
    break

    case 'division':
    number1=operator1
    number2=operator2  
    methods=number1 / number2
    break

    case 'modules':
    number1=operator1
    number2=operator2   
    methods=number1 % number2
    break

    }

let text = `The FirstNumber ${number1} ${maths} SecondNumber ${number2} answer is ${methods}`


document.getElementById('result').innerHTML=text

    }
