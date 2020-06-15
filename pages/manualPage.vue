<template>
  <div id="manual-page" class="internal-pages">
    <InternalHeader>
      <Title big bold orange center title="How It Works" />
    </InternalHeader>
    <div class="internal-pages__body">
      <b-container>
        <b-row>
          <b-col md="6">
            <div class="getting-started-page__steps__download text-center">
              <Title medium bold dark center title="How It Works" />

              <Button to smallRadius bgOrange>
                Download
                <Icon iconName="arrow-right-circle" />
              </Button>
            </div>
          </b-col>

          <b-col md="6">
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
#manual-page .getting-started-page__steps__download #title {
  margin: 0;
}

.getting-started-page__steps__download {
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  height: 100%;
}
</style>