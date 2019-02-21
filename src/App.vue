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
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
   
}
</style>
