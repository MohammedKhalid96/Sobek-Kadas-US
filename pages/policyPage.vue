<template>
  <div id="policy-page" class="internal-pages">
    <InternalHeader>
      <Title big bold orange center title="Privacy Policy" />
    </InternalHeader>
    <div class="internal-pages__body">
      <b-container>
        <div role="tablist" class="faq__tabs">
          <div v-for="(policy,index) in policies" v-bind:key="policy.id" no-body class="mb-1">
            <div header-tag="header" class="p-1" role="tab">
              <b-button block v-b-toggle="'accordion'+index">{{policy.policyTitle}}</b-button>
            </div>
            <b-collapse
              :id="'accordion'+index"
              accordion="my-accordion"
              :visible="policy.visible"
              role="tabpanel"
            >
              <b-card-body>
                <b-card-text>{{ policy.policyDescription }}</b-card-text>
              </b-card-body>
            </b-collapse>
          </div>
        </div>
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
  name: "Policy",

  components: {
    InternalHeader,
    Title
  },

  computed: mapGetters({
    policies: "policy/policies"
  })
};
</script>

<style scoped>
.faq__tabs button {
  background: transparent;
  border: 0;
  color: #272b3a;
  text-align: left;
  font-weight: bold;
  font-size: 1.2em;
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
</style>