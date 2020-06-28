const headers = {
  Accept: "application/json",
  "Content-Type": "application/json"
};
export default {
  data() {
    return {
      users: [],
      form: {
        user_name: "",
        email: "",
        subject: "",
        message: "",
        clicked: false,
        btnContent: "Submit"
      },
      show: true
    };
  },

  methods: {
    onSubmit() {
      this.onSubmit;
    },

    async addUser() {
      const res = await this.$axios.post(
        "https://kadas.co/api/customer/contacts",
        {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
          },
          user_name: this.form.user_name,
          email: this.form.email,
          subject: this.form.subject,
          message: this.form.message,
          clicked: (this.form.clicked = true),
          btnContent: (this.form.btnContent =
            "Thanks for contacting us we will be in touch with you shortly")
        }
      );
    }
  }
};
