<template>
  <div id="app">
    <!--img src="./assets/logo.png"-->
    <app-try></app-try>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld'
import AttendeeHome from './components/AttendeeHome'
import GuestHome from './components/GuestHome'
import Login from './components/Login'
import BuyTicket from './components/BuyTicket'
import NewEvent from './components/NewEvent'
export default {
  name: 'app',
  components: {
    HelloWorld,
    "app-try": BuyTicket
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
