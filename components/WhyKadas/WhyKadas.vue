<template>
  <div id="why-kadas">
    <div class="internal__wrap">
      <b-container>
        <Title orange medium bold center title="Why Do You Need Kadas?" />

        <div class="why-kadas__wrap text-center">
          <b-row v-for="whyKadasElemnet in whyKadas" :key="whyKadasElemnet.id">
            <b-col md="6">
              <div class="why-kadas__wrap__element">
                <div class="why-kadas__wrap__element__index">
                  <FakeLink roundedRadius bgOrange white :content="whyKadasElemnet.id + '' " />
                </div>
                <div class="why-kadas__wrap__element__img">
                  <b-img :src="whyKadasElemnet.whyKadasImgPath" fluid></b-img>
                </div>

                <div class="why-kadas__wrap__element__info">
                  <Title small bold dark :title="whyKadasElemnet.whyKadasName" />
                  <Title small dark :title="whyKadasElemnet.whyKadasDescription" />
                </div>
              </div>
            </b-col>
            <b-col cols="hidden" md="6"></b-col>
          </b-row>
        </div>
      </b-container>

      <div class="divider"></div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

import Title from "../Title/Title";
import FakeLink from "../FakeLink/FakeLink";

export default {
  name: "WhyKadas",

  components: {
    Title,
    FakeLink
  },

  computed: mapGetters({
    whyKadas: "whyKadas/whyKadas"
  })
};
</script>

<style scoped>
.why-kadas__wrap__element__img img {
  width: 100px;
}

.row:nth-child(even) {
  direction: rtl;
}

.why-kadas__wrap__element {
  padding: 0 5rem;
}
.why-kadas__wrap__element__index {
  margin-bottom: 2rem;
}
@media (min-width: 320px) and (max-width: 767px) {
  .why-kadas__wrap__element {
    padding: 0;
  }

  .row .col-md-6 {
    margin-top: 3rem;
  }

  .row .col-md-6:nth-child(1) {
    margin-top: 0;
  }

  .row:nth-child(even) {
    direction: ltr;
  }
}
</style>