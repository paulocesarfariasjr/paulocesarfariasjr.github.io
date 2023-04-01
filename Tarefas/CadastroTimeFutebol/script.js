function addPlayer() {
    const position = document.getElementById("position").value
    const name = document.getElementById("name").value
    const number = document.getElementById("number").value
  
    const confirmation = confirm("Escalar " + name + " como " + position + "?")
  
    if (confirmation) {
      const teamList = document.getElementById("team-list")
      const playerItem = document.createElement("li")
      playerItem.id = "player-" + number
      playerItem.innerText = position + " : " + name + " " + number + " "
      teamList.appendChild(playerItem)
  
      document.getElementById("position").value = ""
      document.getElementById("name").value = ""
      document.getElementById("number").value = ""
    }
  }

  function removePlayer() {

    const numberToRemove = document.getElementById('numberToRemove').value
    const playerRemove = document.getElementById('player-' + numberToRemove)

    const confirmation = confirm("confirmar deletar o jogador " + playerRemove.innerText + '?')

    if(confirmation){

        playerRemove.remove()
        document.getElementById("numberToRemove").value = ""


    }



  }


  
  