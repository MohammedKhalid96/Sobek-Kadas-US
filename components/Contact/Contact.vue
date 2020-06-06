<template>
  <div id="contact">
    <div class="internal__wrap text-center">
      <b-container>
        <Title orange medium bold center title="Want To Know More" />
        <Title
          small
          dark
          title="Kadas is an application that will change how you organise and operate as you expand your company. Teams can work remotely and efficiently with no physical presence needed to perform all your team and workflow management. Kadas ensures efficiency and productivity in the most cost-effective, paperless and time-saving manner. Kadas is available on both Android and iOS smartphones and tablets."
        />

        <Title
          small
          dark
          title="Kadas will assist in managing your team and workflow system to create better functionality. There is no need to spend so much money on inventory and stock tracking or even spend much time organizing and doing redundant business-as-usual administrations that takes much time and leaves you with less time to spend on your actual work. Efficiency and productivity is what Kadas wants to ensure in the easiest possible manner."
        />

        <div class="contact__form">
          <Form />
        </div>
      </b-container>
    </div>
  </div>
</template>

<script>
import Title from "../Title/Title";
import Form from "../Form/Form";

export default {
  name: "contact",

  components: {
    Title,
    Form
  }
};
</script>

<style scoped>
</style>