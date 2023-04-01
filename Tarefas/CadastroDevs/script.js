function createlabel(text,htmlFor){
const label = document.createElement('label')
label.htmlFor = htmlFor
label.innerText = text
return label


}

function createInput(id,value ,name,type = 'text',placeholder = ''){


const input = document.createElement(input)
input.id = id
input.value= value
input.name = name 
input.type = type
input.placeholder= placeholder
return input


}


const addNewTec = document.getElementById('addNewTec')
const form = document.getElementById('devform')
const developers = []
let inputRows = 0


addNewTec.addEventListener('click', function (ev){


const stackinputs = document.getElementById('stackinputs')
 const row = document.createElement('li')
 const rowindex = inputRows
 inputRows++
 row.id ='inputRow' + rowindex
 row.className = 'inputRow'

 const technamelabel = createlabel('nome :','techName-' + rowindex)
 const techNameinput = createInput('')
 


})