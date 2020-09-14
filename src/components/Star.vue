<template>
  <div class="picture-container" id="container">
    <img class="game-img" @click="showCoords()" src="../assets/star/star.jpg" alt="">
  </div>
</template>

<script>
export default {
methods:{
  showCoords() {
    
    // removes previous box from image
    this.removeBox()

    // returns picture size and position relative to viewport
    let rect = event.target.getBoundingClientRect();

    // coordinates altered based on rect value (with additional adjustment)
    let x = event.clientX - (rect.left + 10);
    let y = event.clientY - (rect.top - 70);
    let coords = "X coords: " + x + ", Y coords: " + y;

    // logs / records the coordinates
    console.log(coords);

    // uses coordinates to make a box on the picture
    this.makeBox(x,y)
  },

  makeBox(x,y){ 
    let container = document.getElementById('container')

    // holds box and character options
    let selectionContainer = document.createElement('div')
    selectionContainer.setAttribute('id','red-box')
    selectionContainer.classList.add('selection-container')
    selectionContainer.style.position = 'absolute'
    selectionContainer.style.left = x +'px'
    selectionContainer.style.top = y + 'px'
    selectionContainer.style.width = 'fit-content'
    selectionContainer.style.height = '80px'
    selectionContainer.style.zIndex = 2
    selectionContainer.style.backgroundColor = "transparent"
    selectionContainer.style.display = "flex"

    // makes box around selected area
    let box = document.createElement('div')
    box.style.width = '50px'
    box.style.height = '70px'
    box.style.border = '2px solid red'
    box.style.zIndex = 2
    box.style.backgroundColor = "transparent"
    selectionContainer.appendChild(box)


    // lists character selection options
    let characterOptions = document.createElement('div')
    characterOptions.style.display = 'flex'
    characterOptions.style.flexDirection = 'column'
    characterOptions.style.height = 'fit-content'
    characterOptions.style.backgroundColor = 'transparent'

    let option1 = document.createElement('button')
    option1.classList.add('character-option')
    option1.innerText = 'Boss Nass' // make dynamic
    // add onclick event

    let option2 = document.createElement('button')
    option2.classList.add('character-option')
    option2.innerText = 'Fodesinbeed' // make dynamic
    // add onclick event

    let option3 = document.createElement('button')
    option3.classList.add('character-option')
    option3.innerText = 'Nunb' // make dynamic
    // add onclick event

    characterOptions.appendChild(option1)
    characterOptions.appendChild(option2)
    characterOptions.appendChild(option3)
    selectionContainer.appendChild(characterOptions)
    container.appendChild(selectionContainer)
  },

  removeBox(){
    let container = document.getElementById('container')
    let redBox = document.getElementById('red-box')

    // removes red box if one exists
    if(container.contains(redBox)){
      redBox.parentNode.removeChild(redBox)
    }
    else{
      return
    }  
  }



}
}
</script>

<style scoped>


.game-img{
  z-index: 1;
}

</style>