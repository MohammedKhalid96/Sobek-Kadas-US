<template>
  <div id="navbar">
    <b-navbar toggleable="lg" type="dark" fixed="top">
      <b-container>
        <b-navbar-brand to="/">
          <b-img src="../../assets/images/logo.png" fluid alt></b-img>
        </b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <!-- Right aligned nav items -->
          <b-navbar-nav class="ml-auto">
            <b-nav-item to="/" exact>Home</b-nav-item>
            <b-nav-item to="/featuresPage">Features</b-nav-item>
            <b-nav-item to="/pricingPage">Pricing</b-nav-item>
            <b-nav-item to="/caseStudiesPage">Case Study</b-nav-item>
            <b-nav-item to="/gettingStartedPage">Get Started</b-nav-item>
            <b-nav-item to="/partnerPage">Partner</b-nav-item>
            <b-nav-item to="/contactPage">Contact Us</b-nav-item>
            <b-nav-item-dropdown text="Login" left>
              <b-dropdown-item href="http://users.kadas.co.za/login" target="_blank">Profile</b-dropdown-item>
              <b-dropdown-item href="http://dashboard.kadas.co.za/login" target="_blank">Dashboard</b-dropdown-item>
            </b-nav-item-dropdown>
            <b-nav-item href="http://web.kadas.co.za/login" target="_blank">Kadas Web</b-nav-item>
          </b-navbar-nav>
        </b-collapse>
      </b-container>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: "Navbar"
};
</script>

<style scoped>
.navbar {
  padding: 0;
  background: #fff;
}
.navbar-dark .navbar-brand img {
  width: 80% !important;
}
</style>