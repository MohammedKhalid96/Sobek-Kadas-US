<template>
  <div id="case-study-details-page" class="internal-pages">
    <InternalHeader>
      <Title big bold orange center title="A Tale of Two Companies" />
    </InternalHeader>
    <div class="internal-pages__body">
      <b-container>
        <div class="main-post-img">
          <b-img src="../assets/images/normal/case-study.jpg" fluid-grow></b-img>
        </div>
        <Title
          small
          dark
          title="A company with several regional sites or offices, daily reports, feedback, stock-taking and much more, may have major concerns. Managing sites’ laborer’s is found to be the main concern for supervisors in every construction company."
        ></Title>

        <Title
          small
          dark
          title="Provided is a case study comparing two companies. One that did not use our product and another that did. Company A and B are mid-sized company with about 150 staff members, from which include: executives, middle management, supervisors, administration and employees."
        ></Title>

        <Title
          small
          dark
          title="Company A has 5 sites with each have 25 staff members from various categories. The head office has 25 staff members, mainly directors, accounts and administration. It does not use Kadas Pro or Kadas Lite. Meanwhile, Company B uses Kadas Lite for its laborers and Kadas Pro for staff members from Supervisors level and up."
        ></Title>

        <Title small bold dark title="Company A"></Title>

        <Title
          small
          dark
          title="faces a challenge; whereby, its staff work on remote sites. Therefore, daily supervision is difficult, especially, on the road projects where the company has a routine road maintenance and thus, does not have enough documentation on the time and location of its patrol team. Moreover, the company does not have a proof that its team has been patrolling at the speed and frequency stipulated in the contract. The route patrol has a limited capacity to receive instructions while on the road, or even report back to the company on the tasks allocated to it."
        ></Title>

        <Title small bold dark title="Company B"></Title>

        <Title
          small
          dark
          title="allows Line Managers now to give instruction on tasks, allocate tasks to team and assist when necessary. All needed communications to teams and individuals are logged for ease of tracking and follow up. Kadas for the first time allows the supervisors to assign tasks daily with ease to their subordinates, thus, ensure promptness and reporting on the activities."
        ></Title>

        <Title small dark bold title="Company A"></Title>

        <Title
          small
          dark
          title="has to have an administrative staff on each site for book keeping and to ensure that the company assets and stock are in place. Their staff has to, manually or through excel, work for at least a day on each site to report the working hours and days for each of the staff members. However, with no proof that the respective staff members were actually on the road or on site."
        ></Title>

        <Title small dark bold title="Company B"></Title>

        <Title
          small
          dark
          title="Company B’s accounting department extracts a CSV file, with all the working hours locations and leaves of its company that can be imported to any payroll package with ease and in less than hour work."
        ></Title>

        <Title small dark bold title="Company A"></Title>

        <Title
          small
          dark
          title="required services by a haulage company to haul anchor bolts to its site. It’s expected to be done quickly, and at specific time before casting. Company A makes multiple calls to find who can provide the service. The undocumented service resulted in the haulage company coming a day late. They argued that the quantity and the price are not the same and that the length of the bolts do not suit the truck. Additionally, the haulage company asked for extra money to deliver the bolts as the distance was not as described on the phone."
        ></Title>

        <Title small dark bold title="Company B"></Title>

        <Title
          small
          dark
          title="used Kadas’s smart procurement system by taking a video of the bolts, identifying the geo-location on the map (for pick-up point and delivery point) and specified its budget. Uploaded all that on the smart procurement system, BTS, linked with Kadas. They received within an hour more than 5 bids with their suppliers’ rating, location and their prices to select from. They had all the relevant proof of the bid and also tracked the bidder throughout the trip."
        ></Title>

        <Title small dark bold title="Company A"></Title>

        <Title
          small
          dark
          title="needed to advertise its service; they had limited exposure; they had to find a someone to design the advert for them to spread the word."
        ></Title>

        <Title small dark bold title="Company B"></Title>

        <Title
          small
          dark
          title="uses Kadas inbuilt advertisement system to tell the entire Kadas community about its services and what they can do for them. They keep changing the information daily and present more capabilities among the Kadas member companies to use their services or partnership for the said-coming tender."
        ></Title>

        <Title small dark bold title="Cost Saving"></Title>

        <Title
          small
          dark
          title="The two companies are cost- and efficiency-conscious. Communication amongst members of the company is imperative, as well as, the ability to align companies’ goals through specific sets of tasks."
        ></Title>

        <Title
          small
          dark
          title="The costing does not include the indirect costs/rewards for increased efficiency of all company staff, ability to locate and ensure that laborers and staff members are on site and doing what the company has tasked them with. It also does not include the privacy accruals due to confidential communication system, and also the ease of transmission of instructions."
        ></Title>

        <Title
          small
          dark
          title="Also, the costs do not include indirect cost of performance evaluation system, that is implied in the system, when HR department can, with ease, assess the percent of task accomplishment of each staff members."
        ></Title>

        <Title
          small
          dark
          title="Details of costs savings vary from one company to another, we will be delighted to share this information with any company that is interested in Kadas."
        ></Title>
      </b-container>
    </div>
    <div class="divider"></div>
    <div class="divider"></div>
  </div>
</template>

<script>
import InternalHeader from "../components/InternalHeader/InternalHeader";
import Title from "../components/Title/Title";

export default {
  name: "CaseStudyDetailsPage",

  components: {
    InternalHeader,
    Title
  }
};
</script>

<style scoped>
.main-post-img img {
  height: 500px;
  object-fit: cover;
}
@media (min-width: 320px) and (max-width: 767px) {
  .main-post-img img {
    height: auto;
  }
}
</style>