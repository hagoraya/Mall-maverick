<template>
  <div class="footer-div">
    <div class="main-text">
        <div id="big-text">MALL MAVERICK</div>
        <div class="links">
            <span>CAREERS</span>
            <span>LEASING</span>
            <span>GALLERY</span>
        </div>
        <div class="social-icon">
        <img src="..\Views\HomePage\Assets\Instagram-Icon.svg" alt="Instagram" class="social-media-icons">
        <img src="..\Views\HomePage\Assets\Youtube-Icon.svg" alt="Youtube" class="social-media-icons">
        <img src="..\Views\HomePage\Assets\Pinterest-Icon.svg" alt="Pinterest" class="social-media-icons">
        <img src="..\Views\HomePage\Assets\Facebook-Icon.svg" alt="Facebook" class="social-media-icons">
        <img src="..\Views\HomePage\Assets\Twitter-Icon.svg" alt="Twitter" class="social-media-icons">
        </div>
    </div>
    
    <div class="fine-print">
        <span>© 2020 MALL MAVERICK ALL Rights Reserved | Privacy Policy | Terms and Conditions | Code of Conduct | Powered By Mall Maverick</span>
    </div>
    
</div>
</template>

<script>
export default {

}
</script>

<style scoped>

.footer-div{
    font-family: 'Montserrat';
    background-color: #404040;
    height: 100px;
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.main-text{
    width: 90%;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    align-items: center;
    justify-content: space-between;
}

.main-text > span{
    margin-right: auto;
}

#big-text{
    font-size: 30px;
}

.fine-print{
    font-size: 10px;
    padding-top: 1rem;
}


.links > span{
    padding: 10px;
    cursor: pointer;
    font-size: 14px;
    
}
</style>