
//dom elements
let nums = document.querySelectorAll('.nums')
let button = document.querySelectorAll('.button')

nums.forEach(element => element.addEventListener('click', display))
button.forEach(element => element.addEventListener('click', handleOperationClick))
document.getElementById('clear').addEventListener('click', clear)
document.getElementById('switchSign').addEventListener('click', switchSign)
document.getElementById('percent').addEventListener('click', percent)

document.getElementById('decimal').addEventListener('click', displayDecimal)
let total = ''
let operator = ''

//storing numbers in memory
let numInMemory
document.getElementById('equal').addEventListener('click', result(operator))

//functions 
function display(event){
    total += event.target.innerText
    document.getElementById('result').innerText = total
}

function displayDecimal(){
    if(!total.includes('.')){
        total += '.'
    }
    document.getElementById('result').innerText = total
}

function switchSign(){
    total *= -1
    document.getElementById('result').innerText = total.toString()
}

function percent(){
    total /= 100
    document.getElementById('result').innerText = total
}

function clear(){
    document.getElementById('result').innerText = '0'
    total = ''
    numInMemory = null
}


function handleOperationClick(event){
    operator = event.target.id
    console.log(operator)
    if(!numInMemory){
        numInMemory = document.getElementById('result').innerText
        console.log(numInMemory)
        document.getElementById('result').innerText = '0'
        total = ''
        return
    } 
    //currentNum = document.getElementById('result').innerText
    numInMemory = result(operator)
}

function result(operator){
    let currentNum = document.getElementById('result').innerText
    if(operator === 'add'){
        total = parseFloat(currentNum) + parseFloat(numInMemory)
        total = total.toString()
        console.log(total)
        document.getElementById('result').innerText =total
        numInMemory = null

    } else if (operator === 'minus'){
        total = parseFloat(numInMemory) - parseFloat(currentNum)
        total = total.toString()
        console.log(total)
        document.getElementById('result').innerText = total
        numInMemory = null

    } else if (operator === 'times'){
        total = parseFloat(currentNum) * parseFloat(numInMemory)
        total = total.toString()
        console.log(total)
        document.getElementById('result').innerText =total
        numInMemory = null
        
    } else if (operator === 'divide'){
        total= parseFloat(numInMemory) / parseFloat(currentNum)
        total = total.toString()
        console.log(total)
        document.getElementById('result').innerText =total
        numInMemory = null
    }



    numInMemory = null
}