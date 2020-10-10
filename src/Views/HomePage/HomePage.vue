<template>
  <div class="homepage-div">
    <NavBar/>
    <b-container fluid>
      <h3>tessssttt</h3>
    </b-container>
  </div>
</template>

<script>
import NavBar from './../../components/NavBar'

export default {
  components: {
    'NavBar': NavBar
  }
}
</script>


<style>

.homepage-div{
  background: transparent;
  background-image: url("./Assets/Hero-banner.png");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 100%;
}



</style>