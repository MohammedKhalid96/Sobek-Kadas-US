<template>
  <div id="getting-started-page" class="internal-pages">
    <InternalHeader>
      <Title big bold orange center title="Get Started" />
    </InternalHeader>
    <div class="internal-pages__body">
      <b-container>
        <Title medium bold dark center title="Contact us for more Information" />
        <div class="getting-started-page__contact">
          <div class="getting-started-page__desc text-center">
            <Title
              small
              dark
              title="Kadas is an application that will change how you organise and operate as you expand your company. Teams can work remotely and efficiently with no physical presence needed to perform all your team and workflow management. Kadas ensures efficiency and productivity in the most cost-effective, paperless and time-saving manner. Kadas is available on both Android and iOS smartphones and ."
            />

            <Title
              small
              dark
              title="Kadas will assist in managing your team and workflow system to create better functionality. There is no need to spend so much money on inventory and stock tracking or even spend much time organizing and doing redundant business-as-usual administrations that takes much time and leaves you with less time to spend on your actual work. Efficiency and productivity is what Kadas wants to ensure in the easiest possible manner."
            />

            <Title
              small
              dark
              title="Kadas is an application platform developed by Sobek IT (Pty) Ltd"
            ></Title>
          </div>
        </div>
      </b-container>

      <div class="divider"></div>

      <div class="getting-started-page__steps">
        <b-container>
          <b-row>
            <b-col md="5">
              <div class="getting-started-page__steps__download text-center">
                <Title medium bold dark center title="How It Works" />

                <Button to smallRadius bgOrange>
                  Download
                  <Icon iconName="arrow-right-circle" />
                </Button>
              </div>
            </b-col>

            <b-col md="7">
              <div class="getting-started-page__steps__right">
                <Steps />
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
import Steps from "../components/Steps/Steps";

export default {
  name: "PricingPage",

  components: { InternalHeader, Title, Form, Button, Icon, Steps }
};
</script>

<style scoped>
.internal-pages #form {
  margin: 2rem 0;
}

.getting-started-page__steps {
  background: url("../assets/images/backgrounds/shape-8.png");
  background-size: contain;
  background-position: right;
  background-repeat: no-repeat;
}

.getting-started-page__steps__download {
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  height: 100%;
}

.getting-started-page__steps__download #title {
  margin: 0;
}

.getting-started-page__steps__download svg {
  margin-left: 0.3rem;
}
</style>