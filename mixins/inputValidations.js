export default {
  data() {
    return {
      form: {
        name: "",
        email: "",
        subject: "",
        message: ""
      },
      show: true
    };
  },

  methods: {
    onSubmit(evt) {
      evt.preventDefault();
      alert(JSON.stringify(this.form));
    }
  }
};
