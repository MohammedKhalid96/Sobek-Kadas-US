<template>
  <div id="header">
    <div class="divider"></div>
    <b-container>
      <b-row>
        <b-col>
          <div class="header__title">
            <Title big white title="Kadas" />
            <Title small white title="Manage Business on Your Terms" />
            <Title
              big
              white
              title="A Business Operation Workflow, Remote HR and Smart Office Management"
            />
            <Button black content="FIND OUT MORE"></Button>
          </div>
        </b-col>
        <b-col>
          <b-img src="../../assets/images/mockup/ipad-app.png" fluid-grow alt></b-img>
        </b-col>
      </b-row>
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
#header {
  background: url("../../assets/images/backgrounds/header-bg.png");
  background-size: 100% 100%;
}
.divider {
  height: 150px;
}
</style>
