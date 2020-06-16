<template>
  <div id="post">
    <div class="post__element">
      <div class="post__element__img">
        <b-img-lazy :src="postImgPath" fluid-grow></b-img-lazy>
      </div>
      <div class="post__element__info">
        <div class="post__element__info__date">
          <span>{{postDate}}</span>
        </div>
        <div class="post__element__info__title">
          <Title small bold dark :title="postTitle" />
        </div>
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
import Title from "../Title/Title";

export default {
  name: "Post",

  props: {
    postImgPath: String,
    postDate: String,
    postTitle: String
  },

  components: {
    Title
  }
};
</script>

<style scoped>
.post__element__info {
  padding: 0.5rem 0;
}
.post__element__info__date span {
  display: inline-block;
  color: #ec5423;
}
</style>