<template>
  <div id="steps">
    <b-row>
      <b-col md="6">
        <ul class="steps__ul steps__ul--first-col">
          <li v-for="step in steps.slice(0, 6)" :key="step.id" class="steps__ul__li">
            <b-row no-gutters>
              <b-col cols="2">
                <FakeLink roundedRadius white bgOrange :content="step.id + ''" />
              </b-col>

              <b-col cols="10">
                <Title small bold dark :title="step.stepDescription" />
              </b-col>
            </b-row>
          </li>
        </ul>
      </b-col>

      <b-col md="6">
        <ul class="steps__ul steps__ul--second-col">
          <li v-for="step in steps.slice(6, steps.length)" :key="step.id" class="steps__ul__li">
            <b-row no-gutters="">
              <b-col cols="2">
                <FakeLink roundedRadius white bgOrange :content="step.id + ''" />
              </b-col>
              <b-col cols="10">
                <Title small bold dark :title="step.stepDescription" />
              </b-col>
            </b-row>
          </li>
        </ul>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

import FakeLink from "../FakeLink/FakeLink";
import Title from "../Title/Title";

export default {
  name: "Steps",

  components: {
    FakeLink,
    Title
  },

  computed: mapGetters({
    steps: "steps/steps"
  })
};
</script>

<style scoped>
.steps__ul #title,
.steps__ul #fake-link {
  display: block;
}

.steps__ul li {
  position: relative;
  margin-bottom: 5rem;
}

.steps__ul #title {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  margin-top: 0;
  font-size: 0.9em;
}

.steps__ul #fake-link {
  margin-right: 1.5rem;
}
</style>