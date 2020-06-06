<template>
  <div id="why-kadas">
    <div class="internal__wrap">
      <Title orange medium bold center title="Why You Want Kadas In Your Business" />

      <b-container>
        <div class="why-kadas__wrap text-center">
          <b-row v-for="whyKadasElemnet in whyKadas" :key="whyKadasElemnet.id">
            <b-col cols="6">
              <div class="why-kadas__wrap__element">
                <div class="why-kadas__wrap__element__img">
                  <b-img :src="whyKadasElemnet.whyKadasImgPath" fluid></b-img>
                </div>

                <div class="why-kadas__wrap__element__info">
                  <Title small bold dark :title="whyKadasElemnet.whyKadasName" />
                  <Title small dark :title="whyKadasElemnet.whyKadasDescription" />
                </div>
              </div>
            </b-col>
            <b-col cols="6"></b-col>
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

export default {
  name: "WhyKadas",

  components: {
    Title
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
</style>