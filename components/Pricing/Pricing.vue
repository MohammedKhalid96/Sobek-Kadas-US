<template>
  <div id="pricing">
    <div class="internal__wrap text-center">
      <div class="top-shape">
        <b-img src="../../assets/images/backgrounds/shape-10.png" fluid-grow></b-img>
      </div>
      <b-container>
        <div class="main-section-title">
          <Title orange medium bold center title="Pricing Options" />
        </div>

        <div class="pricing__table">
          <Table>
            <table>
              <thead>
                <tr>
                  <th v-for="field in fields" :key="field.id">{{field.fieldName}}</th>
                </tr>
              </thead>

              <tbody>
                <tr v-for="item in items" :key="item.id">
                  <td>{{item.Features}}</td>
                  <td>{{item.Kadas_Lite}}</td>
                  <td>{{item.KADAS_COMPANY_SUITE}}</td>
                  <td>{{item.Custom}}</td>
                </tr>
                <tr class="tr-request">
                  <td>Demo Trial (From Sales Team)</td>
                  <td v-for="item in 3" :key="item">Request Trial</td>
                </tr>
                <tr class="tr-action">
                  <td></td>
                  <td v-for="item in 3" :key="item">
                    <Button to="/contact" smallRadius bgOrange content="Contact Sales" />
                  </td>
                </tr>
              </tbody>
            </table>
          </Table>
        </div>
      </b-container>
      <div class="bottom-shape">
        <b-img src="../../assets/images/backgrounds/shape-11.png" fluid-grow></b-img>
      </div>

      <div class="divider"></div>
    </div>
  </div>
</template>

<script>
import Title from "../Title/Title";
import Table from "../Table/Table";

import Button from "../Button/Button";

export default {
  name: "Pricing",

  components: {
    Title,
    Table,
    Button
  },

  data() {
    return {
      fields: [
        {
          id: 1,
          fieldName: "Features"
        },
        {
          id: 2,
          fieldName: "Kadas Lite"
        },
        {
          id: 3,
          fieldName: "KADAS COMPANYSUITE"
        },
        {
          id: 4,
          fieldName: "Custom"
        }
      ],
      items: [
        {
          id: 1,
          Features: "Profile and Profile Editing",
          Kadas_Lite: "✔️",
          KADAS_COMPANY_SUITE: "✔️",
          Custom: "✔️"
        },
        {
          id: 2,
          Features: "Clocking",
          Kadas_Lite: "✔️",
          KADAS_COMPANY_SUITE: "✔️",
          Custom: "✔️"
        },
        {
          id: 3,
          Features: "Leave Application and Status",
          Kadas_Lite: "✔️",
          KADAS_COMPANY_SUITE: "✔️",
          Custom: "✔️"
        },
        {
          id: 4,
          Features: "Overtime and Status",
          Kadas_Lite: "✔️",
          KADAS_COMPANY_SUITE: "✔️",
          Custom: "✔️"
        },
        {
          id: 5,
          Features: "Ticketing (Internal and External)",
          Kadas_Lite: "✔️",
          KADAS_COMPANY_SUITE: "✔️",
          Custom: "✔️"
        },
        {
          id: 6,
          Features: "Feedback System",
          Kadas_Lite: "✔️",
          KADAS_COMPANY_SUITE: "✔️",
          Custom: "✔️"
        },
        {
          id: 7,
          Features: "Tasks Allocation and Follow-up",
          Kadas_Lite: "✔️",
          KADAS_COMPANY_SUITE: "✔️",
          Custom: "✔️"
        },
        {
          id: 8,
          Features: "Reporting System",
          Kadas_Lite: "➖",
          KADAS_COMPANY_SUITE: "✔️",
          Custom: "✔️"
        },
        {
          id: 9,
          Features: "Advance Application and Status",
          Kadas_Lite: "➖",
          KADAS_COMPANY_SUITE: "✔️",
          Custom: "✔️"
        },
        {
          id: 10,
          Features: "Calendar and Calendar Sharing",
          Kadas_Lite: "➖",
          KADAS_COMPANY_SUITE: "✔️",
          Custom: "✔️"
        },
        {
          id: 11,
          Features: "Scanning",
          Kadas_Lite: "➖",
          KADAS_COMPANY_SUITE: "✔️",
          Custom: "✔️"
        },
        {
          id: 12,
          Features: "Document Sharing",
          Kadas_Lite: "➖",
          KADAS_COMPANY_SUITE: "✔️",
          Custom: "✔️"
        },
        {
          id: 13,
          Features: "Signature and Initial Recording and Filling",
          Kadas_Lite: "➖",
          KADAS_COMPANY_SUITE: "✔️",
          Custom: "✔️"
        },
        {
          id: 14,
          Features: "Trip Management and Monitoring",
          Kadas_Lite: "➖",
          KADAS_COMPANY_SUITE: "✔️",
          Custom: "✔️"
        },
        {
          id: 15,
          Features: "Location-Based Spot Check",
          Kadas_Lite: "➖",
          KADAS_COMPANY_SUITE: "✔️",
          Custom: "✔️"
        },
        {
          id: 16,
          Features: "Announcement and Notice Boards",
          Kadas_Lite: "➖",
          KADAS_COMPANY_SUITE: "✔️",
          Custom: "✔️"
        },
        {
          id: 17,
          Features: "Stock/Inventory Taking",
          Kadas_Lite: "➖",
          KADAS_COMPANY_SUITE: "✔️",
          Custom: "✔️"
        },
        {
          id: 18,
          Features: "Private Communication System (V.2)",
          Kadas_Lite: "➖",
          KADAS_COMPANY_SUITE: "✔️",
          Custom: "✔️"
        },
        {
          id: 19,
          Features: "Review Policies & Company Documents",
          Kadas_Lite: "➖",
          KADAS_COMPANY_SUITE: "✔️",
          Custom: "✔️"
        },
        {
          id: 20,
          Features: "Closed System Advertsing",
          Kadas_Lite: "➖",
          KADAS_COMPANY_SUITE: "✔️",
          Custom: "✔️"
        },
        {
          id: 21,
          Features: "Secure Data Storage",
          Kadas_Lite: "✔️",
          KADAS_COMPANY_SUITE: "✔️",
          Custom: "✔️"
        },
        {
          id: 22,
          Features: "User Access Controls (Admin Panel)",
          Kadas_Lite: "➖",
          KADAS_COMPANY_SUITE: "✔️",
          Custom: "✔️"
        },
        {
          id: 23,
          Features: "Music Streaming",
          Kadas_Lite: "➖",
          KADAS_COMPANY_SUITE: "✔️",
          Custom: "✔️"
        },
        {
          id: 24,
          Features: "Dietary Requirements (V.3)",
          Kadas_Lite: "➖",
          KADAS_COMPANY_SUITE: "✔️",
          Custom: "✔️"
        },
        {
          id: 25,
          Features: "HOD Reviews and Updates",
          Kadas_Lite: "✔️",
          KADAS_COMPANY_SUITE: "✔️",
          Custom: "✔️"
        },
        {
          id: 26,
          Features: "HR Reviews and Updates",
          Kadas_Lite: "✔️",
          KADAS_COMPANY_SUITE: "✔️",
          Custom: "✔️"
        }
      ]
    };
  }

  // created() {
  //   if (process.client) {
  //     let td = document.getElementsByTagName("td");
  //     let tdValue = document.getElementsByTagName("td").value;
  //     if (tdValue = "true") {

  //     }
  //   }
  // }
};
</script>

<style scoped>
#pricing {
  background: #f5f5f7;
}

.top-shape,
.bottom-shape {
  position: absolute;
  left: 0;
  width: 100%;
  z-index: -1;
}

.top-shape {
  bottom: 100%;
}

.bottom-shape {
  top: 100%;
}
@media (min-width: 320px) and (max-width: 767px) {
  .btn {
    font-size: 0.7rem;
  }
}
</style>