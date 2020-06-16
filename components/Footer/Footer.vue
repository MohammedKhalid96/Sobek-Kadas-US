<template>
  <div id="footer">
    <div class="internal__wrap">
      <div class="top-shape">
        <b-img-lazy src="../../assets/images/backgrounds/shape-10.png" fluid-grow></b-img-lazy>
      </div>

      <b-container>
        <b-row>
          <b-col md="3">
            <div class="footer__info">
              <nuxt-link to="/">
                <b-img-lazy src="../../assets/images/logo.png" fluid alt></b-img-lazy>
              </nuxt-link>
              <ul class="footer__links">
                <li>
                  <a href="tel:+27114729294">
                    <Icon iconName="phone"></Icon>+27 11 472 9294
                  </a>
                </li>

                <li>
                  <a href="mail:info@sobekit.co.za">
                    <Icon iconName="envelope-fill"></Icon>info@sobekit.co.za
                  </a>
                </li>

                <li>
                  <a href="mail:support@kadas.co.za">
                    <Icon iconName="envelope-fill"></Icon>support@kadas.co.za
                  </a>
                </li>

                <li>
                  <a href="mail:sales@kadas.co.za">
                    <Icon iconName="envelope-fill"></Icon>sales@kadas.co.za
                  </a>
                </li>

                <li>
                  <a
                    href="https://www.google.com.eg/maps/place/SobekIT/@-26.1566208,27.9139651,17z/data=!4m12!1m6!3m5!1s0x1e95a16d59904d15:0x2deff3fdf91afe8f!2sSobekIT!8m2!3d-26.15683!4d27.91382!3m4!1s0x1e95a16d59904d15:0x2deff3fdf91afe8f!8m2!3d-26.15683!4d27.91382"
                    target="_blank"
                  >
                    <Icon iconName="map"></Icon>Sobek House, 452 Ontdekkers Rd, Florida Park, Roodepoort, 1709
                  </a>
                </li>
              </ul>
            </div>
          </b-col>

          <b-col md="3">
            <div class="footer__links">
              <div class="footer__title">
                <Title small bold dark title="Our Product" />
              </div>

              <ul>
                <li>
                  <nuxt-link to="/">Home</nuxt-link>
                </li>
                <li>
                  <nuxt-link to="/featuresPage">Features</nuxt-link>
                </li>
                <li>
                  <nuxt-link to="/pricingPage">Pricing</nuxt-link>
                </li>
                <li>
                  <nuxt-link to="/caseStudiesPage">Case Study</nuxt-link>
                </li>
                <li>
                  <nuxt-link to="/gettingStartedPage">Get Started</nuxt-link>
                </li>
                <li>
                  <nuxt-link to="/partnerPage">Partner</nuxt-link>
                </li>
                <li>
                  <a href="http://web.kadas.co.za/login" target="_blank">Kadas Web</a>
                </li>
              </ul>
            </div>
          </b-col>

          <b-col md="3">
            <div class="footer__links">
              <div class="footer__title">
                <Title small bold dark title="Help" />
              </div>

              <ul>
                <li>
                  <nuxt-link to="/contactPage">Contact Us</nuxt-link>
                </li>
                <li>
                  <nuxt-link to="/contactPage">Support</nuxt-link>
                </li>
                <li>
                  <nuxt-link to="/pricingPage">Sales</nuxt-link>
                </li>
                <li>
                  <nuxt-link to="/manualPage">Manual</nuxt-link>
                </li>
              </ul>
            </div>
          </b-col>

          <b-col md="3">
            <div class="footer__links">
              <div class="footer__title">
                <Title small bold dark title="Legal" />
              </div>

              <ul>
                <li>
                  <nuxt-link to="/termsPage">Terms & Conditions</nuxt-link>
                </li>
                <li>
                  <nuxt-link to="/policyPage">Privacy Policy</nuxt-link>
                </li>
                <li>
                  <nuxt-link to="/features/Private%20Communication">Security</nuxt-link>
                </li>
                <li>
                  <nuxt-link to="/faqPage">FAQ</nuxt-link>
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

#pricing-page ~ #footer .top-shape,
#features-page ~ #footer .top-shape {
  z-index: 1;
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
  font-weight: bold;
  margin-bottom: 1.5rem;
}

.footer__links svg {
  color: #ec5423;
  margin-right: 0.7rem;
}
@media (min-width: 768px) and (max-width: 991px) {
  .footer__links a {
    font-size: 0.8rem;
  }
}
</style>