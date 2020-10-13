<template>
<div class="txy">
  <div class="stores-container">
      <NavBar :class="{change_color: scrollPosition > 250}" id="nav-transparent" />
      <div class="directory-content">
                   <h1 id="page-title">STORES DIRECTORY</h1>

          <div class="search-div">
              <div class="search-alpha">#</div>
              <div class="search-alpha">A</div>
              <div class="search-alpha">B</div>
              <div class="search-alpha">C</div>
              <div class="search-alpha">D</div>
              <div class="search-alpha">E</div>
              <div class="search-alpha">F</div>
              <div class="search-alpha">G</div>
              <div class="search-alpha">H</div>
              <div class="search-alpha">I</div>
              <div class="search-alpha">J</div>
              <div class="search-alpha">K</div>
              <div class="search-alpha">L</div>
              <div class="search-alpha">M</div>
              <div class="search-alpha">N</div>
              <div class="search-alpha">O</div>
              <div class="search-alpha">P</div>
              <div class="search-alpha">Q</div>
              <div class="search-alpha">R</div>
              <div class="search-alpha">S</div>
              <div class="search-alpha">T</div>
              <div class="search-alpha">U</div>
              <div class="search-alpha">V</div>
              <div class="search-alpha">W</div>
              <div class="search-alpha">X</div>
              <div class="search-alpha">Y</div>
              <div class="search-alpha">Z</div>

          </div>

            <div class="categories">
                <div class="category">
                    <div class="category-name">Mens's Apparel</div>
                    <img  class="category-img" src="./Assets/c1.svg" alt="Mens Apparel">
                </div>
                <div class="category">
                    <div class="category-name">Womens's Apparel</div>
                    <img  class="category-img" src="./Assets/c2.svg" alt="Womens Apperel">
                </div>
                <div class="category">
                    <div class="category-name">Childern</div>
                    <img  class="category-img" src="./Assets/c3.svg" alt="Childern">
                </div>
                <div class="category">
                    <div class="category-name">Food & Drinks</div>
                    <img  class="category-img" src="./Assets/c4.svg" alt="Food and drinks">
                </div>
                <div class="category">
                    <div class="category-name">Services</div>
                    <img  class="category-img" src="./Assets/c5.svg" alt="Services">
                </div>
                <div class="category">
                    <div class="category-name">Financial</div>
                    <img  class="category-img" src="./Assets/c6.svg" alt="Financial">
                </div>

            </div>


            <div class="all-stores">
                <div class="store">
                    <img class="store-img" src="./Assets/akira.png" alt="akira">
                    <div class="store-info">
                        <span class="store-name" >Akira back steak</span>
                        <span>575.755.7575</span>
                        <span class="store-details" >STORE DETAILS > </span>
                    </div>
                </div>

                <div class="store">
                    <router-link to="/store/aldo"> <img class="store-img" src="./Assets/aldo.png" alt="Aldo"> </router-link>
                    <div class="store-info">
                        <span class="store-name" >Aldo</span>
                        <span>575.755.7575</span>
                        <div class="store-details" >   
                            <router-link to="/store/aldo">
                            STORE DETAILS > 
                            </router-link>
                            </div>
                    </div>
                </div>

                <div class="store">
                    <router-link to="/store/angler"> <img class="store-img" src="./Assets/Angler.png" alt="Angler"> </router-link>
                    
                    <div class="store-info">
                        <span class="store-name">Angler</span>
                        <span class="store-number">575.755.7575</span>
                        <div class="store-details" >   
                            <router-link to="/store/anger">
                            STORE DETAILS > 
                            </router-link>
                            </div>
                    </div>
                </div>

                <div class="store">
                    <img class="store-img" src="./Assets/Apple.png" alt="akira">
                    <div class="store-info">
                        <span class="store-name" >Apple</span>
                        <span>575.755.7575</span>
                        <span class="store-details" >STORE DETAILS > </span>
                    </div>
                </div>

                <div class="store">
                    <img class="store-img" src="./Assets/Balenciaga.png" alt="akira">
                    <div class="store-info">
                        <span class="store-name" >Balenciaga</span>
                        <span>575.755.7575</span>
                        <span class="store-details" >STORE DETAILS > </span>
                    </div>
                </div>

                <div class="store">
                    <img class="store-img" src="./Assets/Banana.png" alt="akira">
                    <div class="store-info">
                        <span class="store-name" >Banana</span>
                        <span>575.755.7575</span>
                        <span class="store-details" >STORE DETAILS > </span>
                    </div>
                </div>

                <div class="store">
                    <img class="store-img" src="./Assets/Bath.png" alt="akira">
                    <div class="store-info">
                        <span class="store-name" >Bath and Body works</span>
                        <span>575.755.7575</span>
                        <span class="store-details" >STORE DETAILS > </span>
                    </div>
                </div>

                 <div class="store">
                    <img class="store-img" src="./Assets/BCBG.png" alt="akira">
                    <div class="store-info">
                        <span class="store-name" >bcbg max</span>
                        <span>575.755.7575</span>
                        <span class="store-details" >STORE DETAILS > </span>
                    </div>
                </div>

                 <div class="store">
                    <img class="store-img" src="./Assets/Bloomingdales.png" alt="akira">
                    <div class="store-info">
                        <span class="store-name" >Blooming dale's</span>
                        <span>575.755.7575</span>
                        <span class="store-details" >STORE DETAILS > </span>
                    </div>
                </div>

            </div>

      </div>
  </div>
    <Footer/>

  </div>
</template>



<script>
import NavBar from './../../components/NavBar'
import Footer from './../../components/Footer'


export default {
   components: {
    'NavBar': NavBar,
    'Footer': Footer
  },

  data: function(){
      return{
            scrollPosition: null
      }
  },

  methods:{
      updateScroll(){
          this.scrollPosition = window.scrollY
      }
  },

  mounted(){
      window.addEventListener('scroll', this.updateScroll)
  }



}




</script>

<style>

.change_color{
    background-color: #91ACB2;
}

#page-title{
    z-index: 1;
}
.store-details{
    font-size: 12px;
    position: relative;
    left: 10px;
    bottom: -30px;
    text-decoration: none;

}

.store-number{
    font-size: 16px;
}

.store-name{
    font-weight: bold;
    font-size: 16px;
    letter-spacing: 0.64px;
    text-transform: uppercase;
}
.store-info{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-left: 3rem;
}

.store-img{
    height: 160px;
    width: 160px;
}
.store{
    height: 160px;
    width: 350px;
    background-color: #F5F5F5;
    display: flex;
    flex-direction: row;
    color: #656565;
    margin: 1rem;
}

.all-stores{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
    margin-top: 2rem;;

}

.category-name{
    padding-left: 20px;
}

.category{
    background-color:#F5F5F5;
    border-radius: 500px;
    width: 200px;
    height: 35px;
    line-height: 35px;
    text-align: left;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}


.categories{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
    margin-top: 1rem;
}
.search-alpha{
    background-color: white;
    padding: 10px;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    line-height: 10px;
    cursor: pointer;
}

.search-div{
    height: 40px;
    background-color: #F0F0F0;
    border-radius: 500px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
    padding: 0px 0px;
    
}

.search-div:first-child{
    padding-left: -1rem;
}

#nav-transparent{
    position: fixed;
    width: 100%;
    top: 0;
}

.scrolled{
    background-color: #91ACB2;

}


.stores-container::before{
  background: transparent;
  background-image: url("./Assets/dir-image.png");
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-position: center;
  background-repeat: no-repeat;
  content: '';
  background-size: cover;
  width: 100%;
  height: 300px;
  filter: brightness(50%);
}
.directory-content{
        font-family: 'Montserrat';

    height: 100%;
    margin-top: 16rem;
    width: 80%;
    margin-left: 12rem;
}

</style>