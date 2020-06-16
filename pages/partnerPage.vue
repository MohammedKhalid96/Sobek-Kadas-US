<template>
  <div id="partner-page" class="internal-pages">
    <InternalHeader>
      <Title big bold orange center title="Partner with Kadas" />
    </InternalHeader>
    <div class="internal-pages__body">
      <b-container>
        <b-row>
          <b-col lg="5">
            <div class="partner-page__info">
              <Title
                small
                dark
                bold
                title="Kadas is actively looking for Agents and Partners to assist us in selling our software and servicing clients."
              />

              <Title small dark bold title="Complete the form on the right to join our partner program" />
            </div>
          </b-col>

          <b-col lg="7">
            <Form />
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
import Form from "../components/Form/Form";

export default {
  name: "PartnerPage",

  components: {
    InternalHeader,
    Title,
    Form
  }
};
</script>

<style scoped>
.partner-page__info #title {
    margin-top: 0;
}

.partner-page__info {
  display: flex;
  flex-flow: column;
  justify-content: center;
  height: 100%;
}
</style>