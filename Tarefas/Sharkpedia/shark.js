document.getElementById('switchInput').addEventListener('click', switchTheme)
const menuIcon = document.querySelector(".navbar .icon i.fa-solid.fa-bars")

const text = document.querySelectorAll('.asideMenu .box .text a.text')

function switchTheme() {

    document.body.classList.toggle('is-light')
    document.body.classList.toggle('is-dark')
    

   
    
  }


  menuIcon.addEventListener('click', function(){

    const DropMenu = document.querySelector('.asideMenu')


    if(DropMenu.classList.contains('open')){

      DropMenu.classList.remove('open')


    }else{


      DropMenu.classList.add('open')


    }





  })











