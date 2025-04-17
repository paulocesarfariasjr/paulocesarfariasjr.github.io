// Select the container and heart elements from the DOM
const container = document.querySelector(".container"),
  heart = document.querySelector(".heart");

// Add a double-click event listener to the container
/*container.addEventListener("dblclick", (e) => {




  setTimeout(() => {
    heart.classList.remove("active");
  }, 1000);
});*/


container.addEventListener('dblclick',function(ev){

  heart.classList.add('active')

  setTimeout(function(){

    
    heart.classList.remove('active')



  },1000);
  
  
  
})
  
  
  
 




