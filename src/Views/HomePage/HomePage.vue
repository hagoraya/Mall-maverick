<template>
  <div class="homepage-div">
    <NavBar/>
    
    <div class="homepage-container">
    
    <h3 class="sub-title">STORES</h3>

    <div class="main-title-div">

          <img src="./Assets/SliderArrows.svg" alt="Promos and Events" id="arrow-Sliders">
      
          <div class="titles">
            <h1 id="big-title">Yours To Discover</h1>
            <h3 class="sub-title">Luxury Brands At Fashion Avenue</h3>
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


    <div class="section-container">
      <div class="subsection">
      <h3 id="subsection-h3"> <span>EXPLORE</span></h3>
    </div>

    <div class="explore-images">
      <div class="image-box">
        <img class="exp-image" src="./Assets/shoes.png" alt="Offers and Promotions">
        <h3>Offers & Promotions</h3>
      </div>
      <div class="image-box">
        <img class="exp-image" src="./Assets/events.png" alt="Events">
        <h3>EVENTS</h3>
      </div>
      <div class="image-box">
        <img class="exp-image" src="./Assets/burger.png" alt="Restaurents">
        <h3>Restaurants</h3>
      </div>
    </div>

    </div>

    <div class="luxury-brands">
      <div class="lux-banner-text">
      <h2 id="lux-main-text">INSPIRED</h2>
      <h4 id="lux-sub-text">VISIT MORE THAN 200 BRANDS</h4>
      <div>All Brands &#x2197;</div>
    </div>
      <div class="luxuary-banner">
    </div>
        <h3 id="featured-store-text">FEATURED STORES</h3>

        <div class="luxury-store-logos-div">
          <img src="./Assets/balenga.png" alt="Balenciaga" class="lux-brand-logos">
          <img src="./Assets/bandb.png" alt="bandb" class="lux-brand-logos">
          <img src="./Assets/bur.png" alt="Burberry" class="lux-brand-logos">
          <img src="./Assets/coach.png" alt="Coach" class="lux-brand-logos">
          <img src="./Assets/diesel.png" alt="Diesel" class="lux-brand-logos">
          <img src="./Assets/dandg.png" alt="D and G" class="lux-brand-logos">
        </div>
    </div>


    <div class="section-container">
      <div class="subsection">
      <h3 id="subsection-h3"> <span>PROMOS</span></h3>
    </div>

    <div class="promo-section">

      <div class="promo-box">
        <img class="promo-image" src="./Assets/promo1.png" alt="Offers and Promotions">
        <span class="promo-small-info comp-name">BROOKS BROTHERS</span>
        <span class="promo-offer">Limited Time Only Additional 30% OFF</span>
        <span class="promo-small-info">MARCH 20 - MARCH 25</span>
        <span class="promo-small-info prom-desc">Brooks Brothers is always offering incredible deals on cool home decor and stunning apparel for men and women.</span>
        <div class="promo-readmore">Read more &#x2197;</div>
      </div>

      <div class="promo-box">
        <img class="promo-image" src="./Assets/promo2.png" alt="Events">
        <span class="promo-small-info comp-name">BURBERRY</span>
        <span class="promo-offer">The Spring/Summer 2020 Collection</span>
        <span class="promo-small-info">MARCH 20 - MARCH 25</span>
        <span class="promo-small-info prom-desc">A celebration of new house codes inspired by our past and dedicated to our future.</span>
        <div class="promo-readmore">Read more &#x2197;</div>
      </div>
      
    </div>

  <div class="subsection">
      <h3 id="subsection-h3"> <span id="promo-seemore">See more &#x2197;</span></h3>
    </div>
    </div>


    <div id="location-div">
      <div id="address-box">
        <h2 id="big-address">Mall Maverick</h2>
        <span id="address-sm">128 Streetname Ave</span>
        <span id="address-sm">Toronto, Ontario M2MB3B</span>
        <h2 id="big-address">647-704-3390</h2>
      </div>
      <div id="location-pin">
        <div id="small-pin"></div>
            <div id="big-pin"></div>
      </div>
      <img id="google-map" src="./Assets/google-map.png" alt="Address">
    </div>

<div class="section-container">
      <div class="subsection">
      <h3 id="subsection-h3"> <span id="subsection-social">SOCIAL</span></h3>

      <div class="social-images">
        <img src="./Assets/s1.png" alt="" class="social-imgs">
        <img src="./Assets/s2.png" alt="" class="social-imgs">
        <img src="./Assets/s3.png" alt="" class="social-imgs">
        <img src="./Assets/s4.png" alt="" class="social-imgs">
        <img src="./Assets/s5.png" alt="" class="social-imgs">
        <img src="./Assets/s7.png" alt="" class="social-imgs">


      </div>
    </div>

          <div class="subsection">
                  <h3 id="subsection-h3"> <span id="subsection-youtube">YOUTUBE</span></h3>
                  <div class="youtube-vids-section">
                    <YoutubeCard/>
                  </div>

                <h3 id="subsection-h3"> <span id="social-name">@MALLMAVERICK</span></h3>


          </div>
</div>

  <Footer/>

  </div>
</template>

<script>
import NavBar from './../../components/NavBar'
import YouTubeCard from './../../components/Youtube-card'
import Footer from './../../components/Footer'

export default {
  components: {
    'NavBar': NavBar,
    'YoutubeCard': YouTubeCard,
    'Footer': Footer
  }
}
</script>


<style>


@import url('https://fonts.googleapis.com/css2?family=Montserrat&family=Playfair+Display&display=swap');

#subsection-youtube{
  font-size: 20px;
    font-family: 'Montserrat';

}

#social-name{
  font-size: 20px;
    font-family: 'Montserrat';
    padding-top: 10px 0px;

}
.social-images{
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}
.social-imgs{
  height: 250px;
  width: 250px;
}

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
  font-family: 'Playfair Display', serif;
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

.lux-banner-text{
  display: flex;
  flex-direction: column;
}
.social-icons{
  position: absolute;
  bottom: 5rem;

}


.sub-title{
  font-family: 'Montserrat';
  font-size: 22px;
}


.social-media-icons{
  margin: 1rem;
}


.section-container{
  width: 80%;
  margin: 0 auto;
}

#subsection-h3{
  width: 100%;
  text-align: center; 
   border-bottom: 1px solid #000; 
   line-height: 0.1em;
   margin: 10px 0 50px; 
}

#subsection-h3 > span{
  background: white;
  padding: 0 10px;
}

.subsection{
  margin-top: 3rem;
}


.exp-image{
  padding-bottom: 2rem;
}

.explore-images{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  font-family: 'Playfair Display', serif;;
}

.luxury-brands{
  margin-top: -10rem;
  margin-bottom: 5rem;
}

.luxuary-banner{
  background-image: url("./Assets/luxuary-banner.png");
  background-repeat: no-repeat;
  background-size: cover;
  height: 300px;
  filter: brightness(50%);
}


.lux-banner-text{
  position: relative;
  bottom: -230px;
  z-index: 1;
  color: white;
}

.lux-banner-text > h2{
  font-size: 60px;
  font-family: 'Playfair Display', serif;;

}

.lux-banner-text > h4{
  font-size: 25px;
  font-family: 'Montserrat';
  margin-bottom: 3rem;

}

.lux-banner-text > div{
  background-color: white;
  color: black;
  width: 160px;
  height: 30px;
  margin: 0 auto;
  padding-top: 3px;
}


#featured-store-text{
  font-size: 16px;
  font-family: 'Montserrat';
  margin-top: 2rem;
}

.lux-brand-logos{
  width: 120px;
}

.luxury-store-logos-div{
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  justify-content: space-around;
}

.luxury-store-logos-div::before{
  display: inline-block;
  content: url('./Assets/RightArrow.svg')
}

.luxury-store-logos-div::after{
  display: inline-block;
  content: url('./Assets/RightArrow.svg');
  transform: scale(-1)

}

.promo-image{
  height: 300px;
  width: 540px;
}

.promo-section{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.promo-box{
  display: flex;
  flex-direction: column;
  text-align: left;
  max-width: 540px;
  max-height: 525px;
  
}

.promo-company-name{
  font-size: 16px;
  color: #7C7C7C;
  font-family: 'Montserrat';
}

.promo-offer{
  font-size: 24px;
  color: #404040;
  font-family: 'Playfair Display', serif;
  padding-top: 10px;
}

.promo-small-info{
  font-size: 16px;
  color: #7C7C7C;
  font-family: 'Montserrat';
  padding: 10px 0px;
}

.promo-desc{
  text-align: left;
}

.promo-readmore{
  width: 160px;
  height: 30px;
  background-color: white;
  padding: 5px;

}


#promo-seemore{
  border: 1px solid black;
  font-size: 20px;
}

#location-div{
  height: 300px;
  width: 100%;
  display: flex;
  flex-direction: row;
    background-color: #AF9067;



}

#address-box{
  background-color: #AF9067;
  height: 300px;
  width: 30%;
 display: flex;
 justify-content: center;
 flex-direction: column;
  color: white;
}

#big-address{
  font-weight: bold;
  padding: 10px 0px;

}

#google-map{
  height: 300px;
  width: 70%;

}

#location-pin{
  position: relative;
  z-index: 1;
  left: 500px;
  display: flex;
  justify-content: center;
  align-items: center;
}

#small-pin{
  background-color: #ab7227;
  position: relative;
  left: 250px;
  width: 66px;
  height: 66px;
  opacity: 80%;
  z-index: 2;
  border-radius: 50%;
  border: 20px solid #CE8B33;
  
}

#subsection-social{
  font-family: 'Playfair Display', serif;
  font-size: 30px;
}

</style>