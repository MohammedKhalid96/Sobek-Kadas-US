<template>
  <div id="features">
    <div class="internal__wrap">
      <div class="top-shape">
        <b-img src="../../assets/images/backgrounds/shape-10.png" fluid-grow></b-img>
      </div>

      <b-container>
        <Title orange medium bold center title="Kadas Features" />

        <div class="features__top-features">
          <b-row>
            <b-col md="4" v-for="feature in features" :key="feature.id">
              <div class="features__top-features__element">
                <nuxt-link to>
                  <div class="features__top-features__element__img">
                    <b-img :src="feature.featureImgPath" fluid-grow></b-img>
                  </div>

                  <div class="features__top-features__element__info text-center">
                    <Title small bold dark :title="feature.featureName" />
                    <FakeLink smallRadius bgOrange white content="View Details" />
                  </div>
                </nuxt-link>
              </div>
            </b-col>
          </b-row>
        </div>
      </b-container>
      <div class="bottom-shape">
        <b-img src="../../assets/images/backgrounds/shape-11.png" fluid-grow></b-img>
      </div>

      <div class="divider"></div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

import Title from "../Title/Title";
import FakeLink from "../FakeLink/FakeLink";

export default {
  name: "Features",

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
#features {
  background: #f5f5f7;
}

.top-shape,
.bottom-shape {
  position: absolute;
  left: 0;
  width: 100%;
  z-index: -1;
}

.top-shape {
  bottom: 100%;
}

.bottom-shape {
  top: 100%;
}

.row .col-md-4 {
  margin-top: 5rem;
}

.row .col-md-4:nth-child(1),
.row .col-md-4:nth-child(2),
.row .col-md-4:nth-child(3) {
  margin-top: 0;
}

.features__top-features__element__img img {
  height: 260px;
}

@media (min-width: 320px) and (max-width: 767px) {
.row .col-md-4:nth-child(2),
.row .col-md-4:nth-child(3) {
  margin-top: 5rem;
}
.features__top-features__element__img img {
  height: auto;
}
}
</style>