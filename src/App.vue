<template>
  <div id="app">
    <community-header></community-header>
    <router-view name='main'></router-view>
    <router-view></router-view>
  </div>
</template>

<script>
import CommunityHeader from './components/CommunityHeader'
export default {
  name: 'App',
  components: {
    CommunityHeader
  }
}
</script>

<style>
    body{
        margin: 0;
        background-color: #e1e1e1;
    }
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        /* margin-top: 60px; */
    }
    a{
      text-decoration: none;
    }
    img{
      max-width: 100%;
    }
</style>
