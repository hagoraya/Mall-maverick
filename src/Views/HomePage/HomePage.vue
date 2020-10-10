<template>
  <div class="homepage-div">
    <NavBar/>
    
    <div class="homepage-container">
    
    <h3>STORES</h3>

    <div class="main-title-div">

          <img src="./Assets/SliderArrows.svg" alt="Promos and Events" id="arrow-Sliders">
      
          <div class="titles">
            <h1 id="big-title">Yours To Discover</h1>
            <h4>Luxury Brands At Fashion Avenue</h4>
          </div>
    </div>

    <h2 id="read-more">Read More &#x2197;</h2>

    <div class="social-icons">
        <img src="./Assets/Instagram-Icon.svg" alt="Instagram" class="social-media-icons">
        <img src="./Assets/Youtube-Icon.svg" alt="Youtube" class="social-media-icons">
        <img src="./Assets/Pinterest-Icon.svg" alt="Pinterest" class="social-media-icons">
        <img src="./Assets/Facebook-Icon.svg" alt="Facebook" class="social-media-icons">
        <img src="./Assets/Twitter-Icon.svg" alt="Twitter" class="social-media-icons">
    </div>
    </div>



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

.homepage-container{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  color: white;

}

#arrow-Sliders{
  width: 100%;
}

#big-title{
  font-size: 5rem;
}

#read-more{
  color: black;
  background-color: white;
  padding: 5px 20px;
  margin-top: 3rem;
  font-size: 16px;
}

.main-title-div{
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 0px 50px;
  justify-content: space-between;
}


.social-icons{
  padding: 15px 0px;
  margin-top: 10rem;
}

.social-media-icons{
  margin: 1rem;
}

</style>