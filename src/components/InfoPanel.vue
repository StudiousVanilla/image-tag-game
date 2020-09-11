<template>
  <div class="info-panel">
    <div v-show="pictureNumber == 0" >
        Choose a picture to start the timer
    </div>
    <div 
    class="portrait-container" 
    v-show="pictureNumber != 0">

        <div class="button-container">
            <button @click="giveUp">Give up</button>
        </div>
        
        <div class="portrait">
            <img :src='"../assets/"+pictureFolder+"/1.png"' alt=""> 
            {{ portrait1 }}
        </div>

        <div class="portrait">
            <img :src='"../assets/"+pictureFolder+"/2.png"' alt="">
            {{ portrait2 }}
        </div>

        <div class="portrait">
            <img :src='"../assets/"+pictureFolder+"/3.png"' alt=""> {{ portrait3 }}
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
    min-width: 1450px;
}

.portrait-container{
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
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
    border: 5px solid #85144b;
    box-shadow: -1px 1px 1px -1px black;
    color: #85144b;
    font-weight: 700;
    font-size: 15px;
    background-color: white;
}



</style>