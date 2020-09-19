<template>
  <div class="overlay-container">
      <div class="overlay">
        <div class= "top"> You found them all!  </div>
        <div class= "middle"> Your Score: {{ timer }}</div>
        <div class= "middle2"> Name: 
            <input 
            class="name-input" 
            type="text"
            v-model="playerName">
            <button 
            class="score-button"
            @click="saveScore">
            Submit
            </button>
        </div>
      </div>
  </div>
</template>

<script>

export default {
    props: ['timer', 'pictureNumber'],

    data(){
        return{
            playerName: ''
        }
    },

    methods:{      
        saveScore(){
            this.$emit('saveScore', this.playerName)
            this.$emit('resetGame')
        },
    }

}
</script>

<style scoped>

.overlay-container{
    display: flex;
    justify-content: center;
}

.overlay{
    position: absolute;
    color: white;
    margin-top: 40px;
    width: 1000px;
    height: 470px;
    background-color: rgb(94, 3, 94);
    z-index: 10;
}

.top,.middle,.middle2,.bottom{
   background-color: rgb(94, 3, 94);
   width: 990px;
   height: 150px;
   border: 5px solid rgb(0, 0, 0);

   display: flex;
   justify-content: center;
   align-items: center;
   font-size: 40px;
}

.middle2{
    justify-content: space-evenly;
}

.bottom{
    background-color: rgb(145, 143, 143);
}

.home-button{
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
    height: 70px;
    width: 70px;
    border-radius: 9999px;
    border: 5px solid purple;
    box-shadow: -1px 1px 1px -1px black;
    color: purple;
    font-weight: 700;
    font-size: 15px;
    background-color: white;    
}

.home-button:hover{
    transform: scale(1.1);
}

.name-input{
    margin: 0px 0px 0px -60px;
    font-size: 35px;
}

.score-button{
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
    height: 70px;
    width: 70px;
    border-radius: 9999px;
    border: 5px solid rgb(0, 0, 0);
    box-shadow: -1px 1px 1px -1px black;
    color: purple;
    font-weight: 700;
    font-size: 15px;
    background-color: white;
    margin: 0px 0px 0px -60px;
}

.score-button:hover{
    transform: scale(1.1);
}

#add-score{
    display: flex;
    background: transparent;
    justify-content: center;
    align-items: center;
    margin: 0px 0px 0px -60px;
}

</style>