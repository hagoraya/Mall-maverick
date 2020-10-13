<template>
   <div>
    <b-navbar toggleable="md" type="dark" variant="dark">
      <b-navbar-brand class="d-md-none">
      </b-navbar-brand>
      <b-navbar-toggle target="collapse-area"></b-navbar-toggle>
      <b-collapse id="collapse-area" is-nav>
        <div class="right-nav-items">
          <b-navbar-nav>
          <img src="./../assets/Menu Icon.svg" alt="Menu">
        </b-navbar-nav>
        <b-navbar-nav>
          <div class="navbar-text" id="open-now">
             <router-link to="/stores">Stores Directory</router-link>
            </div>
        </b-navbar-nav>
        </div>

        <b-navbar-nav class="d-none d-md-block mx-auto">
          <b-nav-text>
            <h4 class="company-text">Mall Maverick</h4>
          </b-nav-text>
        </b-navbar-nav>
        <b-navbar-nav>

        <div class="right-navbar-content"> 
         <b-nav-text>
            <span class="navbar-text" id="open-now">Open Now: 9Am 9Pm</span>
          </b-nav-text>
          <b-nav-text>
            <span class="navbar-text" id="open-now">Contact</span>
          </b-nav-text>
        <b-nav-text>
            <img src="./../assets/SearchButton.svg" alt="Search Button">
          </b-nav-text>
      </div>


        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped> 

.navbar-text{
    font-size: 24px;
    color: white !important;

}


.right-navbar-content > li{
  padding: 10px;
}

.right-nav-items{
  display: flex;
  flex-direction: row;
}

.right-nav-items > ul{
  padding: 10px;
}

 .navbar.navbar-dark.bg-dark{
    background-color: transparent !important;
 }

.company-text{
  padding-left: 100px;
  font-size: 32px;
}

#open-now{
  font-size: 14px;
}

 
</style>