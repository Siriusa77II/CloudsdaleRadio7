<template>
  <div id="app">
    <TheHeader/>
    <p>&nbsp;</p>
    <div class="text-bg">
      <router-view/>
    </div>
    <p>&nbsp;</p>
    <TheFooter/>
  </div>
</template>

<script>
// @ is an alias to /src
import TheHeader from '@/components/TheHeader.vue'
import TheFooter from '@/components/TheFooter.vue'

export default {
  name: 'home',
  components: {
    TheHeader,
    TheFooter
  }
}
</script>
<style>
body { 
  margin:0;
  padding:0;
  background: url(assets/CRbackground.jpg) no-repeat center fixed;
  -webkit-background-size: cover;
  background-size: cover;
  overflow-x: hidden;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
.text-bg {
  background-color: #fff;
  margin-left: 5%;
  margin-right: 5%;
  border-radius: 5px;
}
</style>
