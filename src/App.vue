<template>
  <div id="app">
    <ScoreScreen 
    :timer="timer"
    :pictureNumber="pictureNumber"
    :playerName="playerName"
    v-show="gameOver == true"
    v-on:saveScore="saveScore($event)"
    v-on:resetGame="resetGame()"
    />


    <InfoPanel 
    :pictureNumber="pictureNumber"
    :pictureFolder="pictureFolder"
    :portrait1="portrait1"
    :portrait2="portrait2"
    :portrait3="portrait3"
    :timer="timer"
    />

    <div class="picture-buttons" v-show="pictureNumber == 0">
      <div>
        <!-- initialises game based on picture selected-->
        <button class="picture-select" 
        @click="pictureNumber = 1, pictureFolder = 'star', inGame = true,startGame()"
        style="color:gold">Star Wars
        </button>

        <ol>
          <!-- Displays first 5 the scores from the relevant score data  -->
          <li  v-for="player of scores1.slice(0,5)" :key="player.Name"> 
            {{ player.name }} - {{ player.score }}
          </li>
        </ol>
      </div>

      <div>

      <button class="picture-select" 
      @click="pictureNumber = 2, pictureFolder = 'wedding', inGame = true,startGame()"
      style="color:red">Wedding
      </button>
        <ol>
          <li  v-for="player of scores2.slice(0,5)" :key="player.name"> 
            {{ player.name }} - {{ player.score }}
          </li>
        </ol>
      </div>

      <div>
      <button class="picture-select" 
      @click="pictureNumber = 3, pictureFolder = 'waldo', inGame = true, startGame()"
      style="color:lightgreen">Waldo
      </button>
       <ol>
          <li  v-for="player of scores3.slice(0,5)" :key="player.name"> 
            {{ player.name }} - {{ player.score }}
          </li>
        </ol>
      </div>
    </div>

    <Star 
    v-show="pictureNumber == 1"
    :portrait1="portrait1"
    :portrait2="portrait2"
    :portrait3="portrait3"
    :data1="data1"
    :gameOver="gameOver"
    v-on:setGameOver="updateGameOver($event)"
    />
    

    <Wedding 
    v-show="pictureNumber == 2"
    :portrait1="portrait1"
    :portrait2="portrait2"
    :portrait3="portrait3"
    :data2="data2"
    :gameOver="gameOver"
    v-on:setGameOver="updateGameOver($event)"
    />

    <Waldo 
    v-show="pictureNumber == 3"
    :portrait1="portrait1"
    :portrait2="portrait2"
    :portrait3="portrait3"
    :data3="data3"
    :gameOver="gameOver"
    v-on:setGameOver="updateGameOver($event)"
    />

  </div>
</template>

<script>


// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyB5zsTwDhBwDZQRVXdDpDeEH7a5a6dFLJs",
    authDomain: "image-tag-game.firebaseapp.com",
    databaseURL: "https://image-tag-game.firebaseio.com",
    projectId: "image-tag-game",
    storageBucket: "image-tag-game.appspot.com",
    messagingSenderId: "934200685818",
    appId: "1:934200685818:web:3c81efd9ea89d1c5710543"
  };
// Initialize Firebase
Firebase.initializeApp(firebaseConfig);

import Firebase from 'firebase'
const db = Firebase.firestore()

import InfoPanel from './components/InfoPanel'
import Star from './components/Star'
import Wedding from './components/Wedding'
import Waldo from './components/Waldo'
import ScoreScreen from './components/ScoreScreen'

export default {
  name: 'App',
  components: {
    InfoPanel,
    Star,
    Wedding,
    Waldo,
    ScoreScreen
  },
  
  data(){
    return{
      // controls which game image is shown
      pictureNumber: 0,
      // set to 'waldo' initially to aovid issues when page first renders
      pictureFolder:'waldo', 

      // vakues passed as proprs to components
      portrait1: '', 
      portrait2: '',
      portrait3: '',

      timer: 0, // records ueser score
      inGame: false, // marks start/end of game for score

      // holds game data
      data1: [],
      data2: [],
      data3: [],

      // holds highscore game data
      scores1: [],
      scores2: [],
      scores3: [],

      // trigger score screen display
      gameOver: false,

      // used to record scores
      playerName: ''
    }
  },

  firestore:{
    imageGames: db.collection('image-games')
  },

  methods:{

    startGame(){
      this.startTimer()
      this.setPortraitNames()
    },
    
    startTimer(){
      setInterval(() => 
      this.updateTimer(), 1000)
    },

    updateTimer(){
      if(this.gameOver == false){
        this.timer++
      }
      else{
        return
      }
    },

    // uses data varibale to set portriat names
    setPortraitNames(){
      if(this.pictureNumber == 1){
        this.portrait1 = this.data1.name1
        this.portrait2 = this.data1.name2
        this.portrait3 = this.data1.name3
      }
      else if(this.pictureNumber == 2){
        this.portrait1 = this.data2.name1
        this.portrait2 = this.data2.name2
        this.portrait3 = this.data2.name3
      }
      else if(this.pictureNumber == 3){
        this.portrait1 = this.data3.name1
        this.portrait2 = this.data3.name2
        this.portrait3 = this.data3.name3
      }
      else{
        return
      }
    },

    updateGameOver(value){
      this.gameOver = value
    },

    saveScore(name){
      this.playerName = name
      if(this.playerName != ''){
        if(this.pictureNumber == 1){
          db.collection('star-scores').add({
            name: this.playerName,
            score: this.timer
          })
        }
        else if(this.pictureNumber == 2){
          db.collection('wedding-score').add({
            name: this.playerName,
            score: this.timer
          })
        }
        else if(this.pictureNumber == 3){
          db.collection('waldo-score').add({
            name: this.playerName,
            score: this.timer
          })
        }
      }
      else{
       return 
      }
    },

    resetGame(){
      setTimeout(function(){ window.location.reload()}, 2200);
    },

  },

  created(){
    // cycles through each document from the collection and assigns the data from each document to a data variable
    db.collection('image-games').get().then((snapshot)=>{
      snapshot.docs.forEach(doc => {
        if(doc.data().name1 == 'Boss Nass'){
          this.data1 = doc.data()
        }
        else if(doc.data().name1 == 'Thor'){
          this.data2 = doc.data()
        }
        else if(doc.data().name1 == 'Tom'){
          this.data3 = doc.data()
        }
      })
    }),
     
    db.collection('star-scores').orderBy('score').get().then((snapshot)=>{
      snapshot.docs.forEach(doc =>{
        this.scores1.push(doc.data()) 
      })
    })

    db.collection('wedding-score').orderBy('score').get().then((snapshot)=>{
      snapshot.docs.forEach(doc =>{
        this.scores2.push(doc.data()) 
      })
    })

    db.collection('waldo-score').orderBy('score').get().then((snapshot)=>{
      snapshot.docs.forEach(doc =>{
        this.scores3.push(doc.data()) 
      })
    })
  },
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
  margin: auto;
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
  width: 100%;
}

.picture-select{
  font-size: 20px;
  font-weight: 500;
  background-color: rgb(46, 45, 45);
}

.character-option{
  border: none;
  height: 24.5px;
  opacity: 0.7;
}

.character-option:hover{
  transform: scale(1.05);
  opacity: 1;
  background-color: red;
}

ol{
  text-align: left;
}

</style>
