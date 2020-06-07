<template>
  <div id="header">
    <div class="divider"></div>
    <b-container>
      <b-row>
        <b-col md="3">
          <div class="header__title">
            <Title dark big bold title="Kadas" />
            <Title dark small bold title="Manage Business on Your Terms" />
          </div>
        </b-col>
        <b-col md="6">
          <div class="header__video text-center">
            <div class="header__video__img" v-b-modal.modal-center>
              <b-img src="../../assets/images/mockup/video.png" fluid></b-img>

              <div class="header__video__img__icon">
                <Icon iconName="play-fill" bgOrange white></Icon>
              </div>
            </div>
          </div>
        </b-col>
        <b-col md="3">
          <div class="header__subtitle">
            <Title
              dark
              small
              bold
              title="A Business Operation Workflow, Remote HR and Smart Office Management"
            />
          </div>
        </b-col>
      </b-row>

      <b-modal id="modal-center" size="lg" centered hide-footer>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/oxEXwa02IiU"
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>

        <div class="modal__action__button text-center">
          <Button block bgOrange smallRadius @click="$bvModal.hide('modal-center')" content="Close"></Button>
        </div>
      </b-modal>
    </b-container>
    <div class="divider"></div>
  </div>
</template>

<script>
import Title from "../Title/Title";
import Icon from "../Icon/Icon";
import Button from "../Button/Button";

export default {
  components: { Title, Icon, Button }
};
</script>

<style scoped>
.header__title {
  position: relative;
  top: 15%;
  left: 4.5%;
}
.header__subtitle {
  position: relative;
  top: 60%;
  right: 15%;
}
.header__title::after,
.header__subtitle::after {
  content: "";
  background: url("../../assets/images/vectors/line.png");
  background-repeat: no-repeat;
  background-size: contain;
  background-position: right;
  opacity: 0.1;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  position: absolute;
  z-index: -1;
}

.header__video__img img {
  position: relative;
  width: 90%;
}
.header__video__img__icon svg {
  position: absolute;
  width: 80px;
  height: 80px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #fff;
  border-radius: 50%;
}
iframe {
  width: 100% !important;
}

/* @media (min-width: 992px) and (max-width: 1183px),
  screen and (min-width: 768px) and (max-width: 991px),
  screen and (min-width: 320px) and (max-width: 767px) {
} */

@media (min-width: 320px) and (max-width: 767px) {
  .header__title,
  .header__subtitle {
    position: static;
    text-align: center;
  }
}
</style>
