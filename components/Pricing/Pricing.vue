<template>
  <div id="pricing">
    <div class="internal__wrap text-center">
      <b-container>
        <Title orange medium bold center title="Pricing Options" />

        <div class="pricing__table">
          <Table>
            <b-table responsive striped :items="items" :fields="fields"></b-table>
          </Table>
        </div>
      </b-container>
      
      <div class="divider"></div>
    </div>
  </div>
</template>

<script>
import Title from "../Title/Title";
import Table from "../Table/Table";

export default {
  name: "Pricing",

  components: {
    Title,
    Table
  },

  data() {
    return {
      fields: ["Features", "Kadas_Lite", "KADAS_COMPANY_SUITE", "Custom"],
      items: [
        {
          Features: "Profile and Profile Editing",
          Kadas_Lite: true,
          KADAS_COMPANY_SUITE: true,
          Custom: true
        },
        {
          Features: "Clocking",
          Kadas_Lite: true,
          KADAS_COMPANY_SUITE: true,
          Custom: true
        },
        {
          Features: "Leave Application and Status",
          Kadas_Lite: true,
          KADAS_COMPANY_SUITE: true,
          Custom: true
        },
        {
          Features: "Overtime and Status",
          Kadas_Lite: true,
          KADAS_COMPANY_SUITE: true,
          Custom: true
        },
        {
          Features: "Ticketing (Internal and External)",
          Kadas_Lite: true,
          KADAS_COMPANY_SUITE: true,
          Custom: true
        },
        {
          Features: "Feedback System",
          Kadas_Lite: true,
          KADAS_COMPANY_SUITE: true,
          Custom: true
        },
        {
          Features: "Tasks Allocation and Follow-up",
          Kadas_Lite: false,
          KADAS_COMPANY_SUITE: true,
          Custom: true
        },
        {
          Features: "Reporting System",
          Kadas_Lite: false,
          KADAS_COMPANY_SUITE: true,
          Custom: true
        },
        {
          Features: "Advance Application and Status",
          Kadas_Lite: false,
          KADAS_COMPANY_SUITE: true,
          Custom: true
        },
        {
          Features: "Calendar and Calendar Sharing",
          Kadas_Lite: false,
          KADAS_COMPANY_SUITE: true,
          Custom: true
        },
        {
          Features: "Scanning",
          Kadas_Lite: true,
          KADAS_COMPANY_SUITE: true,
          Custom: true
        }
      ]
    };
  },

  created() {}
};
</script>

<style scoped>
</style>