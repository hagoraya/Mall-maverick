<template>
   <div>
    <b-navbar toggleable="md" type="dark" variant="dark">
      <b-navbar-brand class="d-md-none">
      </b-navbar-brand>
      <b-navbar-toggle target="collapse-area"></b-navbar-toggle>
      <b-collapse id="collapse-area" is-nav>
        <b-navbar-nav>
          <b-nav-item>Navbar text</b-nav-item>
        </b-navbar-nav>
        <b-navbar-nav class="d-none d-md-block mx-auto">
          <b-nav-text>
            <h4 class="company-text">Mall Maverick</h4>
          </b-nav-text>
        </b-navbar-nav>
        <b-navbar-nav>
          <b-nav-item>Navbar text 2</b-nav-item>
        <img src="src\Views\HomePage\Assets\Search Button.svg" alt="" />

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

.company-text{
    font-size: 24px;
}

 .navbar.navbar-dark.bg-dark{
    background-color: transparent !important;
 }
</style>