<template>
  <div id="app"> 
    <FlightDetails/>
  </div>
</template>

<script>
import FlightDetails from './components/FlightDetails.vue'

export default {
  name: 'app',
  components: {
    FlightDetails
  }
}
</script>

<style lang="scss">
#app {
 
 @font-face {
  font-family: 'Roboto-auto';
  font-display: auto;
  src: local('Roboto'), url(https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900) format('woff2');
}

  font-family: 'Roboto-auto', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
   
}
</style>
