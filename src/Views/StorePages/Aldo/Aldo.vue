<template>
    <div class="store-page">
        <NavBar id="nav"/>
        <div class="my-container">

        <div class="header-div">
            <div class="logo-div">
                <img id="logo" src="./Assets/AldoLogo.png" alt="">
            </div>
            <div class="store-info">
                <h3>ALDO</h3>
                <span>647.321.3432</span>
                <span>ALDO.COM</span>
            </div>
            <div class="store-location">
                <img src="./Assets/location.png" alt="">
            </div>
        </div>

        <div class="section">
            <span id="section-name">ABOUT</span>
            <div id="divider"></div>
        </div>

        <div class="about-section">
            <p id="about-desc">Browse our Summer collection of Shoes, Boots, Handbags, Accessories and more. Get Free Shipping On All Orders. Find the styles you’ve been looking for! IG: @aldo_shoes. Free Online Returns. Gift Cards. Show your #ALDO style! 90 Day Returns. Men & Women’s Styles.</p>
            <img src="./Assets/sandals.png" alt="">

        </div>

        <div class="payment-section">
            <span id="section-name">PAYMENT METHODS</span>
            <div id="divider-payment"></div>
            <div id="payment-types">
                <span class="payment-type">visa</span>
                <span class="payment-type">mastercard</span>
                <span class="payment-type">debit</span>
                <span class="payment-type" id="invalid-payment">cash</span>
            </div>
        </div>


        <div class="section">
            <span id="section-name">PROMOS</span>
            <div id="divider"></div>
        </div>

        <div class="promos-section">
            <div class="promo">
                <img id="promo-img" src="./Assets/p1.png" alt="Promo image">
                <div id="promo-title">Women Handbags Shop All, East-West Leather Tote.</div>
                <span id="promp-date">JUN 12 - JUN 28</span>
                <div id="promo-readmore">Read More ↗</div>
            </div>
            <div class="promo">
                <img id="promo-img" src="./Assets/p2.png" alt="Promo image">
                <span id="promo-title">Shop a great selection of Clearance Men’s Shoes</span>
                <span id="promp-date">JUL 15</span>
                <div id="promo-readmore">Read More ↗</div>
            </div>
            <div class="promo">
                <img id="promo-img" src="./Assets/p3.png" alt="Promo image">
                <span id="promo-title">ALDO Sunglasses for Men: Up to 75%</span>
                <span id="promp-date">AUG 20 - AUG 30</span>
                <div id="promo-readmore">Read More ↗ </div>
            </div>
            <div class="promo">
                <img id="promo-img" src="./Assets/p4.png" alt="Promo image">
                <span id="promo-title">25% OFF ALL Women NECKLACES & Rings</span>
                <span id="promp-date">Sep 2 - sep 15</span>
                <div id="promo-readmore">Read More ↗</div>
            </div>

        </div>


        <div class="load-more">
            <div class="load-more-button">Load More ↘</div>
        </div>




        </div>

        <Footer/>
    </div>
</template>

<script>

import NavBar from './../../../components/NavBar'
import Footer from './../../../components/Footer'

export default {
components: {
    'NavBar': NavBar,
    'Footer': Footer
  }
}
</script>

<style>

@import url('https://fonts.googleapis.com/css2?family=Montserrat&family=Playfair+Display&display=swap');


.load-more-button{
    border: 1px solid black;
    padding: 0 20px;
    background-color: black;
    color: white;
}

.load-more{
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 2rem 0;
}

.load-more::before, .load-more::after {
    content: '';
    flex: 1;
    border-bottom: 1px solid #000;
}

.load-more::before {
    margin-right: 1rem;
}

.load-more::after {
    margin-left: 1rem;
}

#promo-readmore{
    border: 1px solid #7C7C7C;
    width: 60%;
    font-weight: bold
}


#promp-date{
    text-transform: uppercase;
    margin: 1rem 0;
    text-align: left;
    font-size: 12px;
    color: #7C7C7C;
    letter-spacing: 0.48px;
    opacity: 1;

}

#promo-title{
    text-align: left;
    letter-spacing: 0.72px;
    color: #404040;
    text-transform: capitalize;
    font-family: 'Playfair Display', serif;
    margin-top: 0.5rem;
    white-space: nowrap;
    display: inline-block;
    overflow: hidden;
    width: 255px;

}

.promo{
    display: flex;
    flex-direction: column;
}

#promo-img{
    height: 142px;
    width: 255px;
}
.promos-section{
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: space-between;
    margin-top: 2rem;
}

#invalid-payment{
    color: #954545;
    text-decoration: line-through;
}
.payment-type{
    font-family: 'Montserrat';
    font-size: 24px;
    letter-spacing: 0.8px;
    opacity: 1;
    text-transform: uppercase;
    padding-left: 2rem;
    font-weight: 700;
}

.payment-section{
    display: flex;
    flex-direction: row;
    margin-top: 2rem;
}

#divider-payment{
    width: 10%;
    height: 1px;
    margin-top: 10px;
    background-color: #656565;
}
.store-location{
    border: 1px solid #656565;
}

#payment-types{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 60%;
}

.about-section{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-top: 2rem;
}

.about-section > img {
    height: 285px;
    width: 590px;
}

.about-section > p {
    height: 255px;
    width: 540px;
    text-align: left;
    font-family: 'Montserrat';
    font-size: 20px;
    font-weight: 700;
}

.section{
    display: flex;
    flex-direction: row;
    margin-top: 2rem;
    letter-spacing: 0.8px;
    justify-content: space-between;
    opacity: 1;
}

#section-name{
      font-family: 'Playfair Display', serif;
      font-size: 30px;
      padding-right: 2rem;

}
.section-seperator{
  border-top: 3px solid black;
}

#divider{
    width: 95%;
    height: 1px;
    margin-left: auto;
    margin-top: 10px;
    background-color: #656565;
}

#logo{
   height: 255px;
   width: 255px; 
}

.store-info > span{
    letter-spacing: 0.8px;
    padding-bottom:0.5rem;

}
.store-info > h3{
    margin-bottom: 2rem;
    font-weight: bold;
    letter-spacing: 1.2px;

}

.header-div{
    font-family: 'Montserrat';
    color: #656565;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    width: 100%;
    margin-top: 2rem;
}

.my-container{
    width: 70%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;

}

#nav{
    background-color: #91ACB2;
}
</style>