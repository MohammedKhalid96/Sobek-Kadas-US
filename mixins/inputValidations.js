export default {
  data() {
    return {
      loginShowPassword: false, //login show password 
      show: false, //password
      show2: false, //confirm password
      loginPassword: "",
      password: "",
      confirmPassword: "",
      rules: {
        required: (value) => !!value || "Required.",
        min: (v) => v.length >= 8 || "Min 8 characters",
        passwordMatch: () => this.password === this.confirmPassword || "The password you entered don't match",
      },
    };
  },
};
