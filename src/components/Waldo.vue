<template>
  <div class="picture-container" id="container3">
    <img class="game-img" @click="showCoords()" src="https://i.ibb.co/MSF0SvC/waldo.jpg" alt="">
  </div>
</template>

<script>
export default {
  props:['portrait1','portrait2','portrait3', 'data3','gameOver'],

  data(){
    return{
      x: 0,
      y: 0,
      charactersFound: 0
    }
  },

  methods:{
    showCoords() {
      // removes previous box from image
      this.removeBox()

      // returns picture size and position relative to viewport
      let rect = event.target.getBoundingClientRect();

      // coordinates altered based on rect value (with additional adjustment)
      this.x = event.clientX - (rect.left + 10);
      this.y = event.clientY - (rect.top - 70);
      
      console.log('x:'+ this.x +' y:'+ this.y);

      // uses coordinates to make a box on the picture
      this.makeBox(this.x,this.y)
    },

    makeBox(x,y){ 
      let container = document.getElementById('container3')

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
      option1.innerText = this.portrait1
      // triggers logic for checking coordinates are correct
      option1.addEventListener('click', () => this.checkSelection(1))

      let option2 = document.createElement('button')
      option2.classList.add('character-option')
      option2.innerText = this.portrait2
      option2.addEventListener('click', () => this.checkSelection(2))

      let option3 = document.createElement('button')
      option3.classList.add('character-option')
      option3.innerText = this.portrait3
      option3.addEventListener('click', () => this.checkSelection(3))

      characterOptions.appendChild(option1)
      characterOptions.appendChild(option2)
      characterOptions.appendChild(option3)
      selectionContainer.appendChild(characterOptions)
      container.appendChild(selectionContainer)
    },

    // checks if coordinates and character selected are correct
    checkSelection(number){
      if(number == 1){
        if(this.x > (this.data3.x1 - 25) && this.x < (this.data3.x1 + 25)){
          if(this.y > (this.data3.y1 - 25) && this.y < (this.data3.y1 + 25)){
            this.charactersFound++
            this.changeBoxID(number)
            this.markPortrait(number)
            this.checkGameOver()
          }
        }    
      }
      else if(number == 2){
        if(this.x > (this.data3.x2 - 25) && this.x < (this.data3.x2 + 25)){
          if(this.y > (this.data3.y2 - 25) && this.y < (this.data3.y2 + 25)){
            this.charactersFound++
            this.changeBoxID(number)
            this.markPortrait(number)
            this.checkGameOver()
          }
        }    
      }
      else if(number == 3){
        if(this.x > (this.data3.x3 - 25) && this.x < (this.data3.x3 + 25)){
          if(this.y > (this.data3.y3 - 25) && this.y < (this.data3.y3 + 25)){
            this.charactersFound++
            this.changeBoxID(number)
            this.markPortrait(number)
            this.checkGameOver()
          }
        }    
      }
    },

    // leaves a green box in place when a choice is correct
    changeBoxID(number){
      // grabs box on screen
      let selectionBox = document.getElementById('red-box')
      // removes button options
      selectionBox.removeChild(selectionBox.childNodes[1])
      // sets new id so box is not deleted when a new selection is made
      selectionBox.setAttribute('id','green-box'+number)
      // changes box colour from red to blue
      selectionBox.childNodes[0].style.border = '3px solid lightGreen'
    },

    removeBox(){
      let container = document.getElementById('container3')
      let redBox = document.getElementById('red-box')

      // removes red box if one exists
      if(container.contains(redBox)){
        redBox.parentNode.removeChild(redBox)
      }
      else{
        return
      }  
    },

    markPortrait(number){
      let overlay = document.getElementById('portrait-overlay'+number)
        overlay.style.display = 'block'
    },

    checkGameOver(){
      if(this.charactersFound == 3){
        window.scrollTo(0, 0);
        this.$emit('setGameOver', true)
      }
    },

    

  }
}
</script>

<style scoped>


.game-img{
  z-index: 1;
}

</style>