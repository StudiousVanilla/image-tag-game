<template>
  <div id="app">
    <InfoPanel 
    :pictureNumber="pictureNumber"
    :pictureFolder="pictureFolder"
    :portrait1="portrait1"
    :portrait2="portrait2"
    :portrait3="portrait3"
    :timer="timer"
    />
    <div 
    class="picture-buttons"
    v-show="pictureNumber == 0">
      <div>
        <button class="picture-select" 
        @click="pictureNumber = 1, pictureFolder = 'star'"
        style="color:gold">Star Wars</button>
        <ol>
          <li>John: 40</li>
          <li>Mary: 45</li>
          <li>Bim: 55</li>
          <li>Bam: 130</li>
          <li>Boo: 300</li>
        </ol>
      </div>
      <div>
      <button class="picture-select" 
      @click="pictureNumber = 2, pictureFolder = 'wedding'"
      style="color:red">Wedding</button>
        <ol>
          <li>John: 40</li>
          <li>Mary: 45</li>
          <li>Bim: 55</li>
          <li>Bam: 130</li>
          <li>Boo: 300</li>
        </ol>
      </div>
      <div>
      <button class="picture-select" 
      @click="pictureNumber = 3, pictureFolder = 'waldo'"
      style="color:lightgreen">Waldo</button>
       <ol>
          <li>John: 40</li>
          <li>Mary: 45</li>
          <li>Bim: 55</li>
          <li>Bam: 130</li>
          <li>Boo: 300</li>
        </ol>
      </div>
    </div>
    <Star v-show="pictureNumber == 1"/>
    <Wedding v-show="pictureNumber == 2"/>
    <Waldo v-show="pictureNumber == 3"/>
  </div>
</template>

<script>
import InfoPanel from './components/InfoPanel'
import Star from './components/Star'
import Wedding from './components/Wedding'
import Waldo from './components/Waldo'

export default {
  name: 'App',
  components: {
    InfoPanel,
    Star,
    Wedding,
    Waldo
  },
  data(){
    return{
      pictureNumber: 0,
      pictureFolder:'waldo',
      portrait1: 'Boss Nass',
      portrait2: 'Fodesinbeed Annodue',
      portrait3: 'Nunb',
      timer: '',
    }
  }
}
</script>

<style>
*{
  margin: 0;
  background-color: #DDDDDD;
  font-weight: 700;
}

#app {
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 100px;
}

ol{
  margin: 20px 0px 0px 25px;
  padding: 0px;
}

.picture-container{
  border: 10px solid black;
  width: fit-content;
  display: flex;
  justify-content: center;
}

.game-img{
  max-width: 1420px;
  min-width: 1420px;
}

.picture-buttons{
  padding: 10px 0px 10px 0px;
  display: flex;
  justify-content: space-evenly;
  margin-top: 100px;
}

.picture-select{
  font-size: 20px;
  font-weight: 500;
  background-color: rgb(46, 45, 45);
}
</style>
