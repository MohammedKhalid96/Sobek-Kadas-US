<template>
  <div id="features">
    <div class="container">
      <Title orange medium bold center title="Why You Want Kadas In Your Business" />

      <div class="features__top-features">
        <b-row>
          <b-col cols="4" v-for="feature in features" :key="feature.id">
            <div class="features__top-features__element">
              <nuxt-link to>
                <div class="features__top-features__element__img">
                  <b-img :src="feature.featureImgPath" fluid></b-img>
                </div>

                <div class="features__top-features__element__info text-center">
                  <Title small dark :title="feature.featureName" />
                  <FakeLink smallRadius bgOrange white content="View Details" />
                </div>
              </nuxt-link>
            </div>
          </b-col>
        </b-row>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import inputValidations from "../../mixins/inputValidations";

import Title from "../Title/Title";
import FakeLink from "../FakeLink/FakeLink";

export default {
  name: "Features",

  mixins: [inputValidations],

  components: {
    Title,
    FakeLink
  },

  computed: mapGetters({
    features: "features/features"
  }),

  data() {
    return {};
  }
};
</script>

<style scoped>
.features__top-features__element {
  margin-bottom: 5rem;
}

.features__top-features__element__img img {
  height: 250px;
}

.features__top-features__element__info #title {
}
</style>