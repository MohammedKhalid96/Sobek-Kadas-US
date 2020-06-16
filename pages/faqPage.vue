<template>
  <div id="faq-page" class="internal-pages">
    <InternalHeader>
      <Title big bold orange center title="FAQ" />
    </InternalHeader>
    <div class="internal-pages__body">
      <b-container>
        <b-row>
          <b-col lg="6">
            <div class="faq__img">
              <b-img-lazy src="../assets/images/mockup/faq.jpg" fluid-grow></b-img-lazy>
            </div>
          </b-col>

          <b-col lg="6">
            <div role="tablist" class="faq__tabs">
              <div v-for="(faq,index) in faqs" v-bind:key="faq.id" no-body class="mb-1">
                <div header-tag="header" class="p-1" role="tab">
                  <b-button block v-b-toggle="'accordion'+index">{{faq.faqTitle}}</b-button>
                </div>
                <b-collapse
                  :id="'accordion'+index"
                  accordion="my-accordion"
                  :visible="faq.visible"
                  role="tabpanel"
                >
                  <b-card-body>
                    <b-card-text>{{ faq.faqDescription }}</b-card-text>
                  </b-card-body>
                </b-collapse>
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

import InternalHeader from "../components/InternalHeader/InternalHeader";
import Title from "../components/Title/Title";

export default {
  name: "Faq",

  components: {
    InternalHeader,
    Title
  },

  computed: mapGetters({
    faqs: "faqs/faqs"
  })
};
</script>

<style scoped>
.faq__img img {
  border-radius: 150px 200px 300px 120px;
}

.faq__tabs button {
  background: transparent;
  border: 0;
  color: #272b3a;
  text-align: left;
  font-weight: bold;
  font-size: 1.2em;
}

.faq__tabs {
  display: flex;
  flex-flow: column;
  justify-content: center;
  height: 100%;
}

.faq__tabs button:focus,
.btn-secondary:not(:disabled):not(.disabled):active,
.btn-secondary:not(:disabled):not(.disabled).active,
.show > .btn-secondary.dropdown-toggle {
  outline: 0;
  box-shadow: 0 0 0 0 transparent;
  background: transparent;
  color: #272b3a;
}

.faq__tabs button::before {
  content: "o";
  font-weight: bold;
  color: #ec5423;
  font-size: 1.6rem;
  margin-right: 0.5rem;
}

.card-text {
  font-size: 1.1em;
}

@media (min-width: 992px) and (max-width: 1183px) {
  .faq__img {
    display: flex;
    flex-flow: column;
    justify-content: center;
    height: 100%;
  }
}

@media (min-width: 768px) and (max-width: 991px),
  screen and (min-width: 320px) and (max-width: 767px) {
  .faq__tabs {
    margin-top: 1rem;
  }
}
</style>