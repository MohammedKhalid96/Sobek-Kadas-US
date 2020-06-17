const headers = {
  Accept: "application/json",
  "Content-Type": "application/json"
};
export default {
  data() {
    return {
      users: [],
      form: {
        username: "",
        email: "",
        subject: "",
        message: ""
      },
      show: true
    };
  },

  methods: {
    onSubmit() {
      this.onSubmit;
    },

    async addUser() {
      const res = await this.$axios
        .post("http://kadas.co/api/customer/contacts", {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
          },
          username: this.form.username,
          email: this.form.email,
          subject: this.form.subject,
          message: this.form.message
        })
        .catch(err => console.log(err.response.data, this.form.username));
    }
  }
};
