<template>
  <div id="about-page" class="internal-pages">
    <InternalHeader>
      <Title big bold orange center title="About us" />
    </InternalHeader>
    <div class="internal-pages__body">
      <b-container>
        <Title
          small
          dark
          title="Kadas is an application that will change how you organise and operate as you expand your company. Teams can work remotely and efficiently with no physical presence needed to perform all your team and workflow management. Kadas ensures efficiency and productivity in the most cost-effective, paperless and time-saving manner. Kadas is available on both Android and iOS smartphones and Web."
        />

        <Title
          small
          dark
          title="Kadas will assist in managing your team and workflow system to create better functionality. There is no need to spend so much money on inventory and stock tracking or even spend much time organizing and doing redundant business-as-usual administrations that takes much time and leaves you with less time to spend on your actual work. Efficiency and productivity is what Kadas wants to ensure in the easiest possible manner."
        />
      </b-container>

      <div class="about__desc-wrap">
        <b-container>
          <b-row>
            <b-col md="6">
              <div class="about__desc">
                <Title medium dark bold title="What Do Companies Want?" />
                <ul>
                  <li
                    class="about__desc__main-point"
                  >As a solution provider company, we realize that there is a need to:</li>
                  <div class="about__desc__sub-points">
                    <li>
                      <span class="about-desc__highlighted">Ease</span> of Company Management.
                    </li>
                    <li>
                      <span class="about-desc__highlighted">Decrease</span> effort, stress, time and money.
                    </li>
                    <li>
                      Create an
                      <span class="about-desc__highlighted">accessible</span>, easy and simple system.
                    </li>
                    <li>
                      A
                      <span class="about-desc__highlighted">reliable</span> system and package.
                    </li>
                    <li>
                      <span class="about-desc__highlighted">Eliminate the risk</span> of losing any data.
                    </li>
                    <li>
                      <span class="about-desc__highlighted">Safe and secure data</span> that can be obtained at anytime and anywhere.
                    </li>
                    <li>
                      <span class="about-desc__highlighted">Automation</span> of information update.
                    </li>
                  </div>
                </ul>
              </div>
            </b-col>

            <b-col md="6">
              <div class="about__img">
                <b-img src="../assets/images/mockup/about-1.jpg" fluid-grow></b-img>
              </div>
            </b-col>
          </b-row>
        </b-container>
      </div>

      <div class="divider"></div>

      <div class="about__desc-wrap">
        <b-container>
          <b-row>
            <b-col md="6">
              <div class="about__desc">
                <Title medium dark bold title="Value it Promises" />
              </div>
            </b-col>

            <b-col md="6">
              <div class="about__img">
                <b-img src="../assets/images/mockup/chart.jpg" fluid-grow></b-img>
              </div>
            </b-col>
          </b-row>
        </b-container>
      </div>

      <div class="divider"></div>

      <div class="about__desc-wrap">
        <b-container>
          <b-row>
            <b-col md="6">
              <Title medium dark bold title="Affordabilty and cost optimisation " />
              <ul>
                <li>
                  <span class="about-desc__highlighted">Save travel costs</span>, since its from the comfort of one’s home.
                </li>
                <li>A physical working environment by which physical presence and design are no longer a cost to be carried since it is all virtual.</li>
                <li>
                  <span class="about-desc__highlighted">Paperwork and printing costs</span>
                  are no longer costs to carry since they are all available online.
                </li>
                <li>
                  <span class="about-desc__highlighted">Reduce pollution</span> and better healthy environment for all.
                </li>
                <li>Eliminate cost associated with monotring food and beverages within the institution.</li>
              </ul>
            </b-col>

            <b-col md="6">
              <Title medium dark bold title />
              <ul>
                <li>
                  <span class="about-desc__highlighted">Office Assets such as</span>
                  desks and chairs are also costs eliminated. They will only need a device and internet.
                </li>
                <li>
                  <span class="about-desc__highlighted">Time is no longer wasted</span>
                  since staff are now expected to be self-disciplined and provided deadlines that they must meet.
                </li>
                <li>
                  Reduce behavioral and
                  <span class="about-desc__highlighted">negative peer issues</span>
                  are no longer brought up at work.
                </li>
                <li>
                  Cost savings may be directled to
                  <span
                    class="about-desc__highlighted"
                  >enhanced compensations</span>
                  or luring bigger and better opportunities.
                </li>
                <li>The only cost a school will need to carry is the subscription to Kadas Fundi.</li>
              </ul>
            </b-col>
          </b-row>
        </b-container>
      </div>
    </div>
    <div class="divider"></div>
    <div class="divider"></div>
  </div>
</template>

<script>
import InternalHeader from "../components/InternalHeader/InternalHeader";
import Title from "../components/Title/Title";

export default {
  name: "AboutPage",

  components: {
    InternalHeader,
    Title
  }
};
</script>

<style scoped>
.about__desc {
  display: flex;
  flex-flow: column;
  justify-content: center;
  height: 100%;
}
li {
  margin-bottom: 1.5rem;
  font-size: 1.2em;
  list-style: circle;
}
.about__desc__main-point {
  font-weight: bold;
  list-style: none;
}
.about__desc__sub-points {
  margin-left: 1.8rem;
}
.about-desc__highlighted {
  color: #ec5423;
}
</style>
