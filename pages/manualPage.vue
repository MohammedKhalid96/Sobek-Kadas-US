<template>
  <div id="manual-page" class="internal-pages">
    <InternalHeader>
      <Title big bold orange center title="How It Works" />
    </InternalHeader>
    <div class="internal-pages__body">
      <b-container>
        <b-row>
          <b-col md="5">
            <div class="getting-started-page__steps__download text-center">
              <a target="_blank" href="https://play.google.com/store/apps/details?id=co.za.sobekit.kadas&hl=en_IN">
                <Button smallRadius bgOrange>
                  Download
                  <Icon iconName="arrow-right-circle" />
                </Button>
              </a>
            </div>
          </b-col>

          <b-col md="7">
            <Steps />
          </b-col>
        </b-row>
      </b-container>
    </div>
    <div class="divider"></div>
    <div class="divider"></div>
  </div>
</template>

<script>
import InternalHeader from "../components/InternalHeader/InternalHeader";
import Title from "../components/Title/Title";
import Button from "../components/Button/Button";
import Icon from "../components/Icon/Icon";
import Steps from "../components/Steps/Steps";

export default {
  name: "PartnerPage",

  components: {
    InternalHeader,
    Title,
    Button,
    Icon,
    Steps
  }
};
</script>

<style scoped>
.getting-started-page__steps__download {
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  height: 100%;
}
@media (min-width: 320px) and (max-width: 767px) {
  .getting-started-page__steps__download {
    display: block;
    margin-bottom: 2rem;
  }
}
</style>