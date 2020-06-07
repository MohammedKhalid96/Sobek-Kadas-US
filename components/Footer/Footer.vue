<template>
  <div id="footer">
    <div class="internal__wrap">
      <div class="top-shape">
        <b-img src="../../assets/images/backgrounds/shape-10.png" fluid-grow></b-img>
      </div>

      <b-container>
        <b-row>
          <b-col>
            <div class="footer__info">
              <b-img src="../../assets/images/logo.png" fluid alt></b-img>
              <ul class="footer__links">
                <li>
                  <a href="tel:+27 114729292">
                    <Icon iconName="phone"></Icon>+27 114729292
                  </a>
                </li>

                <li>
                  <a href="mail:info@sobekit.co.za">
                    <Icon iconName="envelope-fill"></Icon>info@sobekit.co.za
                  </a>
                </li>

                <li>
                  <a
                    href="https://www.google.com.eg/maps/place/SobekIT/@-26.1566208,27.9139651,17z/data=!4m12!1m6!3m5!1s0x1e95a16d59904d15:0x2deff3fdf91afe8f!2sSobekIT!8m2!3d-26.15683!4d27.91382!3m4!1s0x1e95a16d59904d15:0x2deff3fdf91afe8f!8m2!3d-26.15683!4d27.91382"
                    target="_blank"
                  >
                    <Icon iconName="map"></Icon>Sobek House, 452 Ontdekkers Road,
                    Florida Park,Roodepoort
                    Gauteng, South Africa, 1709
                  </a>
                </li>
              </ul>
            </div>
          </b-col>

          <b-col>
            <div class="footer__links">
              <div class="footer__title">
                <Title small bold dark title="Our Product" />
              </div>

              <ul>
                <li>
                  <nuxt-link to="/">Home</nuxt-link>
                </li>
                <li>
                  <nuxt-link to="/">Features</nuxt-link>
                </li>
                <li>
                  <nuxt-link to="/">Case Study</nuxt-link>
                </li>
                <li>
                  <nuxt-link to="/">Pricing</nuxt-link>
                </li>
                <li>
                  <nuxt-link to="/">Partner</nuxt-link>
                </li>
                <li>
                  <nuxt-link to="/">Kadas Web</nuxt-link>
                </li>
              </ul>
            </div>
          </b-col>

          <b-col>
            <div class="footer__links">
              <div class="footer__title">
                <Title small bold dark title="Help" />
              </div>

              <ul>
                <li>
                  <nuxt-link to="/">Contact Us</nuxt-link>
                </li>
                <li>
                  <nuxt-link to="/">Support</nuxt-link>
                </li>
                <li>
                  <nuxt-link to="/">Sales</nuxt-link>
                </li>
                <li>
                  <nuxt-link to="/">Manual</nuxt-link>
                </li>
              </ul>
            </div>
          </b-col>

          <b-col>
            <div class="footer__links">
              <div class="footer__title">
                <Title small bold dark title="Legal" />
              </div>

              <ul>
                <li>
                  <nuxt-link to="/">Terms & Conditions</nuxt-link>
                </li>
                <li>
                  <nuxt-link to="/">Privacy Policy</nuxt-link>
                </li>
                <li>
                  <nuxt-link to="/">Security</nuxt-link>
                </li>
                <li>
                  <nuxt-link to="/">FAQ</nuxt-link>
                </li>
              </ul>
            </div>
          </b-col>
        </b-row>
      </b-container>
    </div>
  </div>
</template>

<script>
import Title from "../Title/Title";
import Icon from "../Icon/Icon";

export default {
  name: "Footer",

  components: {
    Title,
    Icon
  }
};
</script>

<style scoped>
#footer {
  background: #f5f5f7;
}

.top-shape {
  position: absolute;
  bottom: 100%;

  left: 0;
  width: 100%;
  z-index: -1;
}

.footer__info img {
    margin-bottom: 1.5rem;
}

li {
  list-style: none;
}

.footer__links {
    margin-left: 1.2rem;
}

.footer__links a {
  color: #272b3a;
  margin-bottom: 1.5rem;
}

.footer__links svg {
    color: #ec5423;
    margin-right: 0.7rem;
}
</style>