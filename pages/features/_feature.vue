<template>
  <div id="feature-details-page" class="internal-pages">
    <InternalHeader>
      <Title big bold orange center :title="slug" />
    </InternalHeader>
    <div class="internal-pages__body">
      <b-container>
        <b-row>
          <b-col md="6">
            <div class="feature__img" v-for="feature in features" :key="feature.id">
              <b-img-lazy v-if="feature.featureName === slug" :src="feature.featureImgPath" fluid-grow></b-img-lazy>
            </div>
          </b-col>

          <b-col md="6">
            <div class="feature__description">
              <div class="feature__description__list">
                <div
                  class="feature__description__list__li"
                  v-for="feature in features"
                  :key="feature.id"
                >
                  <li
                    v-if="feature.featureName === slug && feature.featureDescList[0]"
                  >{{feature.featureDescList[0].featureDesc}}</li>
                  <li
                    v-if="feature.featureName === slug && feature.featureDescList[1]"
                  >{{feature.featureDescList[1].featureDesc}}</li>
                  <li
                    v-if="feature.featureName === slug && feature.featureDescList[2]"
                  >{{feature.featureDescList[2].featureDesc}}</li>
                  <li
                    v-if="feature.featureName === slug && feature.featureDescList[3]"
                  >{{feature.featureDescList[3].featureDesc}}</li>
                  <li
                    v-if="feature.featureName === slug && feature.featureDescList[4]"
                  >{{feature.featureDescList[4].featureDesc}}</li>
                  <li
                    v-if="feature.featureName === slug && feature.featureDescList[5]"
                  >{{feature.featureDescList[5].featureDesc}}</li>
                  <li
                    v-if="feature.featureName === slug && feature.featureDescList[6]"
                  >{{feature.featureDescList[6].featureDesc}}</li>
                </div>
              </div>
            </div>
          </b-col>
        </b-row>
      </b-container>
    </div>
    <div class="divider"></div>
    <div class="divider"></div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

import InternalHeader from "../../components/InternalHeader/InternalHeader";
import Title from "../../components/Title/Title";

export default {
  name: "FeatureDetails",

  components: {
    InternalHeader,
    Title
  },

  data() {
    return {
      slug: this.$route.params.feature
    };
  },

  computed: mapGetters({
    features: "features/features"
  })
};
</script>

<style scoped>
.feature__img img {
  border-radius: 150px 200px 300px 120px;
}

.feature__description {
  display: flex;
  flex-flow: column;
  justify-content: center;
  height: 100%;
}

li {
  margin-bottom: 1rem;
  font-size: 1.2em;
  font-weight: bold;
}
@media (min-width: 320px) and (max-width: 767px) { 
  .feature__description {
    margin-top: 1.5rem;
  }

  li {
    font-size: 1em;
  }
}
</style>