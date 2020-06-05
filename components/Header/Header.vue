<template>
  <div id="header">
    <div class="divider"></div>
    <b-container>
      <div class="header__video text-center">
        <div class="header__video__img" v-b-modal.modal-center>
          <b-img src="../../assets/images/mockup/video.png" fluid></b-img>
        </div>
      </div>

      <b-modal id="modal-center" centered title="BootstrapVue">
        <p class="my-4">Vertically centered modal!</p>
      </b-modal>
    </b-container>
  </div>
</template>

<script>
import Title from "../Title/Title";
import Button from "../Button/Button";

export default {
  components: { Title, Button }
};
</script>

<style scoped>
.divider {
  height: 110px;
}
.header__video__img img {
  width: 45%;
}
</style>
