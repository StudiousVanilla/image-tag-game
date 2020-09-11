<template>
  <div class="picture-container">
    <img class="game-img" @click="showCoords()" src="../assets/wedding/wedding.jpg" alt="">
  </div>
</template>

<script>
export default {
methods:{
  showCoords() {
    let x = event.clientX
    let y = event.clientY
    let coords = "X coords: " + x + ", Y coords: " + y;
    console.log(coords);
},
}
}
</script>

<style>

</style>