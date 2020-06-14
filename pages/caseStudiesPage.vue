<template>
  <div id="case-studies-page" class="internal-pages">
    <InternalHeader>
      <Title big bold orange center title="Case Studies" />
    </InternalHeader>
    <div class="internal-pages__body">
      <b-container>
        <b-row>
          <b-col md="4" v-for="caseStudy in caseStudies" :key="caseStudy.id">
            <b-card class="text-center">
              <nuxt-link to="/caseStudyDetailsPage">
                <Post
                  :postImgPath="caseStudy.caseStudyImgPath"
                  :postDate="caseStudy.caseStudyDate"
                  :postTitle="caseStudy.caseStudyTitle"
                >
                <FakeLink content="Read More" smallRadius bgOrange white />
                </Post>
              </nuxt-link>
            </b-card>
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

import InternalHeader from "../components/InternalHeader/InternalHeader";
import Title from "../components/Title/Title";
import Post from "../components/Post/Post";
import FakeLink from "../components/FakeLink/FakeLink";

export default {
  name: "FeaturesPage",

  components: {
    InternalHeader,
    Title,
    Post,
    FakeLink
  },

  computed: mapGetters({
    caseStudies: "caseStudies/caseStudies"
  })
};
</script>

<style scoped>
#case-studies-page a {
  width: 100%;
}
</style>