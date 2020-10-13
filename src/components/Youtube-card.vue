<template>
  <div class="video-container">
      <div class="youtube-card">

          <div class="video-thumbnail">
          <img id="preview" class="video" src="./../assets/y1.png" alt=""> 

          </div>
   
          <div class="info-div">
              <div class="channel-icon">
                  <img  src="./../assets/youtube-avatar.svg" alt="">
              </div>
                <div class="channel-info">
                    <span id="video-name">New Year’s Eve at THE MALL MAVERICK SQUARE</span>
                    <span id="video-channel">Mall Maverick</span>
                    <div class="video-stats">
                        <span id="video-views">23k Views</span>
                        <span id="video-time">2 days ago</span>
                    </div>
                </div>
          </div>

      </div>

      <div class="youtube-card">
          <img id="preview" src="./../assets/y2.png" alt="">
        
          <div class="info-div">
              <div class="channel-icon">
                  <img  src="./../assets/youtube-avatar.svg" alt="">
              </div>
                <div class="channel-info">
                    <span id="video-name">Holiday gift ideas that everyone will love</span>
                    <span id="video-channel">Mall Maverick</span>
                    <div class="video-stats">
                        <span id="video-views">13k Views</span>
                        <span id="video-time">5 days ago</span>
                    </div>
                </div>
          </div>

      </div>


      <div class="youtube-card">
          <img id="preview" src="./../assets/y3.png" alt="">
          <div class="info-div">
              <div class="channel-icon">
                  <img  src="./../assets/youtube-avatar.svg" alt="">
              </div>
                <div class="channel-info">
                    <span id="video-name">FOR A Limited Time Only: The Audi VIP Event</span>
                    <span id="video-channel">Mall Maverick</span>
                    <div class="video-stats">
                        <span id="video-views">55k Views</span>
                        <span id="video-time">10 days ago</span>
                    </div>
                </div>
          </div>

      </div>


      <div class="youtube-card">
          <img id="preview" src="./../assets/y4.png" alt="">
          <div class="info-div">
              <div class="channel-icon">
                  <img  src="./../assets/youtube-avatar.svg" alt="">
              </div>
                <div class="channel-info">
                    <span id="video-name">OLD-SCHOOL BARBERING FOR THE MODERN MAN</span>
                    <span id="video-channel">Mall Maverick</span>
                    <div class="video-stats">
                        <span id="video-views">80k Views</span>
                        <span id="video-time">2 weeks ago</span>
                    </div>
                </div>
          </div>

      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>

@import url('https://fonts.googleapis.com/css2?family=Montserrat&family=Playfair+Display&display=swap');




.arrow-right {
  width: 0; 
  height: 0; 
  border-top: 25px solid transparent;
  border-bottom: 25px solid transparent;
  border-left: 25px solid green;
  position: relative;
  left: 138px;
  bottom: 260px;

}

.play-circle{
   border:4px solid green;
  border-radius:50%;
  background:rgba(0,0,0,0);
  color:white;
  width:88px;
  height:88px;
  text-align:center;
  line-height:100px;
  position: relative;
 left: 100px;
 bottom: 10px;
}



.video-container{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    font-family: 'Montserrat';
    align-items: flex-start;
    justify-content: space-around;

}

.youtube-card{
    display: flex;
    flex-direction: column;
    width: 300px;
    height: 300px;
}

#preview{
    width: 300px;
    height: 170px;
}

.info-div{
    display: flex;
    flex-direction: row;
    margin-top: 1rem;
}

.channel-info{
    display: flex;
    flex-direction: column;
    text-align: left;
    margin-left: 1rem;
}

#video-name{
    text-transform: uppercase;
    padding-bottom: 0.5rem;
    letter-spacing: 0px;
    font-size: 14px;

}


#video-channel{
    padding-bottom: 0.5rem;
    color: #9C9C9C;
        font-size: 14px;

}

#video-channel::after{
    content: url('./../assets/Checkicon.svg');
    padding-left: 10px;
}

#video-views{
    color: #9C9C9C;
    padding-right: 0.9rem;
        font-size: 14px;



}

#video-time{
    color: #9C9C9C;
        font-size: 14px;


}

</style>