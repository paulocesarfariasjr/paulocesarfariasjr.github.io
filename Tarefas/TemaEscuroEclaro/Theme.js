function LightTheme() {
    document.body.style.color = '#212529'
    document.body.style.backgroundColor = '#f1f5f9'
  }
  
  function DarkTheme() {
    document.body.style.color = '#f1f5f9'
    document.body.style.backgroundColor = '#212529'
  }
  

  function switchTheme() {
    document.body.classList.toggle('is-light')
    document.body.classList.toggle('is-dark')
  }
  
  document.getElementById('LightBtn').addEventListener('click',LightTheme)
  document.getElementById('DarkBtn').addEventListener('click', DarkTheme)
  document.getElementById('switchBtn').addEventListener('click', switchTheme)




