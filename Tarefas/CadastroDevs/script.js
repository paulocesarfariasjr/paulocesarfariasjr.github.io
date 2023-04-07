function CreateLabel(text,htmlfor){

const Label = document.createElement('label')
Label.htmlFor = htmlfor
Label.innerText = text
return Label

}


function CreateInput(id,value ,name,type='text',placeholder = ''){

const Input = document.createElement('input')
Input.name = name
Input.id = id
Input.placeholder = placeholder
Input.type = type
Input.value= value
return Input

}


const addtechBtn = document.getElementById('addTechBtn')
const form = document.getElementById('devForm')
const developers = []
let inputRows = 0

addtechBtn.addEventListener('click',function(ev){

const stackInputs = document.getElementById('stackInputs')
const newRow = document.createElement('li')
const rowsIndex = inputRows
inputRows++
newRow.id = 'inputRow-' + rowsIndex
newRow.className = 'inputRow'


const techNameLabel = CreateLabel('nome: ','techName-' + rowsIndex)
const techNameinput = CreateInput('TechName-' + rowsIndex,null,'techName' )


const ExpLabel = CreateLabel('Experiencia: ')
const Id1 = 'expRadio-' + rowsIndex + '.1'
const expInput1 = CreateInput(Id1,'0-2 anos','TechExp','radio')
const ExpLabel1 = CreateLabel('0-2 anos',Id1)

const Id2 = 'expRadio-' + rowsIndex + '.2'
const expInput2 = CreateInput(Id2,'3-4 anos','TechExp','radio')
const ExpLabel2 = CreateLabel('3-4 anos',Id2)

const Id3 = 'expRadio-' + rowsIndex + '.3'
const expInput3 = CreateInput(Id3,'5+anos','TechExp','radio')
const ExpLabel3 = CreateLabel('5+ anos',Id3)

const RemoveRowBtn = document.createElement('button')
RemoveRowBtn.type = 'button'
RemoveRowBtn.innerText = 'Remover'

RemoveRowBtn.addEventListener('click',function (){
  stackInputs.removeChild(newRow)
  })


newRow.append(
  techNameLabel , techNameinput , ExpLabel,expInput1,ExpLabel1,expInput2,ExpLabel2,expInput3,ExpLabel3,RemoveRowBtn
  )  

  stackInputs.appendChild(newRow)

})

form.addEventListener('submit',function(ev){

  ev.preventDefault
  const fullName = document.getElementById('fullname')
  const inputRows = document.querySelectorAll('.inputRow')


  let technologies = []
  inputRows.forEach(function(row){

    const techName = document.querySelector('#'+ row.id,+ 'input[name="techName"]').value
    const TechExp = document.querySelector('#' + row.id, + 'input[type="radio"]:checked' ).value
    technologies.push({ name: techName , exp: TechExp})

  })  
  

  const newDev = { fullname: fullName.value , tech: technologies.value}
  developers.push(newDev)
  alert('Desenvolvedor Cadastrado com sucesso')
  fullName.value = ''
  inputRows.forEach(function(row){

    row.remove()

  })

  console.log(developers)
  

})