<template>
  <div id="form">
    <b-form @submit.prevent.stop="onSubmit(); addUser();">
      <b-row>
        <b-col lg="6">
          <b-form-group id="input-name" label-for="name">
            <b-form-input
              id="name"
              name="user_name"
              v-model="form.user_name"
              required
              placeholder="Enter name"
            ></b-form-input>
          </b-form-group>
        </b-col>

        <b-col lg="6">
          <b-form-group
            id="input-email"
            label-for="email"
            description="We'll never share your email with anyone else."
          >
            <b-form-input
              id="email"
              name="email"
              v-model="form.email"
              type="email"
              required
              placeholder="Enter email"
            ></b-form-input>
          </b-form-group>
        </b-col>
      </b-row>

      <b-form-group id="input-subject" label-for="subject">
        <b-form-input
          id="subject"
          name="subject"
          v-model="form.subject"
          required
          placeholder="Subject"
        ></b-form-input>
      </b-form-group>


      <b-form-group id="input-message" label-for="message">
        <b-form-textarea
          id="message"
          name="message"
          v-model="form.message"
          required
          rows="6"
          placeholder="Enter Message"
        ></b-form-textarea>
      </b-form-group>

      <Button type="submit" :disabled="form.clicked" bgOrange smallRadius :content="form.btnContent" />
    </b-form>
  </div>
</template>

<script>
import inputValidations from "../../mixins/inputValidations";
import Button from "../Button/Button";

export default {
  name: "Form",

  mixins: [inputValidations],

  data() {
    return {};
  },

  components: {
    Button
  }
};
</script>

<style scoped>
input,
textarea {
  border: 0;
  padding: 2rem 1rem;
}
</style>