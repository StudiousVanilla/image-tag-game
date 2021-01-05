<template>
  <div class="info-panel">
    <div v-show="pictureNumber == 0" >
        Choose a theme to start the timer
    </div>
    <div 
    class="portrait-container" 
    v-show="pictureNumber != 0">
        <div class="button-container">
            
            <button @click="giveUp">Give up</button>
        </div>
        
        <div class="portrait">
            <img v-show="pictureFolder=='star'" src="https://i.ibb.co/w6D9d8q/star1.png" alt="">
            <img v-show="pictureFolder=='wedding'" src="https://i.ibb.co/hRKKqyP/wedding1.png" alt=""> 
            <img v-show="pictureFolder=='waldo'" src="https://i.ibb.co/YPVqTnm/waldo1.png" alt="">  
            <img
            class= "portrait-overlay"
            id = "portrait-overlay1"
            v-show="timer < 10"
            src="https://i.ibb.co/kyQGgmL/found.png" 
            alt="">
            {{ portrait1 }}
        </div>

        <div class="portrait">
            <img v-show="pictureFolder=='star'" src="https://i.ibb.co/KXTD5Ld/star2.png" alt="">
            <img v-show="pictureFolder=='wedding'" src="https://i.ibb.co/4sKzrCK/wedding2.png" alt=""> 
            <img v-show="pictureFolder=='waldo'" src="https://i.ibb.co/J2tbTjH/waldo2.png" alt="">
            <img
            class= "portrait-overlay"
            id = "portrait-overlay2"
            src="https://i.ibb.co/kyQGgmL/found.png"
            alt="">
            {{ portrait2 }}
        </div>

        <div class="portrait">
            <img v-show="pictureFolder=='star'" src="https://i.ibb.co/3dzTNLw/star3.png" alt="">
            <img v-show="pictureFolder=='wedding'" src="https://i.ibb.co/bKbpLLd/wedding3.png" alt=""> 
            <img v-show="pictureFolder=='waldo'" src="https://i.ibb.co/K9fY31G/waldo3.png" alt="">
            <img
            class= "portrait-overlay"
            id = "portrait-overlay3"
            v-show="timer < 10"
            src="https://i.ibb.co/kyQGgmL/found.png" 
            alt="">
            {{ portrait3 }}
        </div>



        <p>Timer: {{ timer }}</p>  

    </div>
  </div>
</template>

<script>
export default {
    props:['pictureNumber','pictureFolder', 'portrait1', 'portrait2', 'portrait3','timer'],
    
    methods:{
        giveUp(){
            window.location.reload()
        }
    }

}
</script>

<style scoped>
.info-panel{
    position: absolute;
    top: 0;
    width: 100%;
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5em;
}

.portrait-container{
    width: 100%;
    max-width: 1420px;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
}

.portrait-overlay{
    z-index: 40;
    background: transparent ;
    position: absolute;
    width: 70px;
    color: red;
    display: none;
}

.portrait{
    width: 70px;
    height: 100px;
    background-color: blue;
    display: flex;
    align-items: center;
    font-weight: 700;
}

img{
    width: 70px;
    height: 100px;
    margin-right: 20px;
}

.button-container{
    width: 3%;
}

button{
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



</style>