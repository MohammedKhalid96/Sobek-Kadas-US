<template>
  <div id="features">
    <div class="container">
      <Title orange medium bold center title="Why You Want Kadas In Your Business" />

      <div class="features__top-features">
        <b-row>
          <b-col>
            <div class="features__top-features__element">
              <nuxt-link to>
                <div class="features__top-features__element__img">
                  <b-img src="../../assets/images/features/advertis.jpg" fluid></b-img>
                </div>

                <div class="features__top-features__element__info text-center">
                  <Title small dark title="Advertisement" />
                  <FakeLink smallRadius bgOrange white content="View Details" />
                </div>
              </nuxt-link>
            </div>
          </b-col>

          <b-col>
            <div class="features__top-features__element">
              <div class="features__top-features__element__img">
                <b-img src="../../assets/images/features/advertis.jpg" fluid></b-img>
              </div>
            </div>
          </b-col>

          <b-col>
            <div class="features__top-features__element">
              <div class="features__top-features__element__img">
                <b-img src="../../assets/images/features/advertis.jpg" fluid></b-img>
              </div>
            </div>
          </b-col>
        </b-row>
      </div>
    </div>
  </div>
</template>

<script>
import Title from "../Title/Title";
import FakeLink from "../FakeLink/FakeLink";
export default {
  name: "Features",

  components: {
    Title,
    FakeLink
  }
};
</script>