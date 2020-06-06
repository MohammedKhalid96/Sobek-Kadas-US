<template>
  <div id="form">
    <b-form @submit="onSubmit" v-if="show">
      <b-row>
        <b-col>
          <b-form-group id="input-name" label-for="name">
            <b-form-input id="name" v-model="form.name" required placeholder="Enter name"></b-form-input>
          </b-form-group>
        </b-col>

        <b-col>
          <b-form-group
            id="input-email"
            label-for="email"
            description="We'll never share your email with anyone else."
          >
            <b-form-input
              id="email"
              v-model="form.email"
              :state="validation"
              type="email"
              required
              placeholder="Enter email"
            ></b-form-input>
            <b-form-invalid-feedback :state="validation">Your user ID must be 5-12 characters long.</b-form-invalid-feedback>
            <b-form-valid-feedback :state="validation">Looks Good.</b-form-valid-feedback>
          </b-form-group>
        </b-col>
      </b-row>

      <b-form-group id="input-subject" label-for="subject">
        <b-form-input id="subject" v-model="form.subject" required placeholder="Subject"></b-form-input>
      </b-form-group>

      <b-form-group id="input-message" label-for="message">
        <b-form-textarea id="message" v-model="form.message" required rows="6" placeholder="Enter Message"></b-form-textarea>
      </b-form-group>
    </b-form>
  </div>
</template>

<script>
import inputValidations from "../../mixins/inputValidations";

export default {
  name: "Form",

  mixins: [inputValidations]
};
</script>

<style scoped>
</style>