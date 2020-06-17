<template>
  <div id="contact-page" class="internal-pages">
    <InternalHeader>
      <Title big bold orange center title="Contact Us" />
    </InternalHeader>
    <div class="internal-pages__body">
      <b-container>
        <Form />
      </b-container>
      <div class="contact__info">
        <b-container>
          <b-row>
            <b-col md="6">
              <div class="contact__info__details">
                <Title medium bold dark title="Let's Connect" />
                <Title small dark title="Get in touch with us" />

                <ul class="footer__links">
                  <li>
                    <a href="tel:+27114729294">
                      <Icon iconName="phone"></Icon>+27 11 472 9294
                    </a>
                  </li>

                  <li>
                    <a href="mailto:info@kadas.co.za">
                      <Icon iconName="envelope-fill"></Icon>info@kadas.co.za
                    </a>
                  </li>

                  <li>
                    <a href="mailto:support@kadas.co.za">
                      <Icon iconName="envelope-fill"></Icon>support@kadas.co.za
                    </a>
                  </li>

                  <li>
                    <a href="mailto:sales@kadas.co.za">
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

            <b-col md="6">
              <div class="contact__info__map">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d895.32098929091!2d27.911535018632513!3d-26.154880142553054!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e95a16d59904d15%3A0x2deff3fdf91afe8f!2sSobekIT!5e0!3m2!1sar!2seg!4v1591881446129!5m2!1sar!2seg"
                  width="600"
                  height="450"
                  frameborder="0"
                  style="border:0;"
                  allowfullscreen
                  aria-hidden="false"
                  tabindex="0"
                ></iframe>
              </div>
            </b-col>
          </b-row>
        </b-container>
      </div>
    </div>
    <div class="divider"></div>
    <div class="divider"></div>
  </div>
</template>

<script>
import InternalHeader from "../components/InternalHeader/InternalHeader";
import Title from "../components/Title/Title";
import Form from "../components/Form/Form";
import Button from "../components/Button/Button";
import Icon from "../components/Icon/Icon";

export default {
  name: "Contact",

  components: { InternalHeader, Title, Form, Button, Icon }
};
</script>

<style scoped>
li {
  list-style: none;
}

.footer__links a {
  color: #272b3a;
  margin-bottom: 1.5rem;
}

.footer__links svg {
  color: #ec5423;
  margin-right: 0.7rem;
}

iframe {
  width: 100% !important;
  height: 550px !important;
}

.contact__info__map {
  padding: 3rem 0;
}

.contact__info {
  background: url("../assets/images/backgrounds/shape-8.png");
  background-size: contain;
  background-position: right;
  background-repeat: no-repeat;
}

.contact__info__details {
  display: flex;
  flex-flow: column;
  justify-content: center;
  height: 100%;
}
</style>