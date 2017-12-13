<template>
  <div>
    <b-container class="bv-example-row">
        <b-row>
            <b-col cols="2"></b-col>
            <b-col cols="8">
                <h2>Payment Form</h2><hr>
                <p align="left">Event: {{ event }}</p>
                <p align="left">Hall: {{ hall }}</p>
                <p align="left">Time: {{ time }}</p>
                <p align="left">Ticket price: {{ ticket }}</p>
                <b-row align="left">
                    <b-col sm="2"><label for="input-small">Card Holder:</label></b-col>
                    <b-col sm="9">
                        <b-form-input id="input-small" size="sm" type="text" required placeholder="Enter Card Holder"></b-form-input>
                    </b-col>
                </b-row><br>
                <b-row align="left">
                    <b-col sm="2"><label for="input-small">Card NO.</label></b-col>
                    <b-col sm="9">
                        <b-form-input id="input-small" size="sm" type="text" required placeholder="Enter Card Number"></b-form-input>
                    </b-col>
                </b-row><br>
                <b-row align="left">
                    <b-col sm="2"><label for="input-small">Card Expired:</label></b-col>
                    <b-col sm="9">
                        <b-form-input id="input-small" size="sm" type="text" required placeholder="Enter Card Expired Date"></b-form-input>
                    </b-col>
                </b-row>
                <b-row align="left">
                    <b-col sm="2"><label for="input-small">Card CVV:</label></b-col>
                    <b-col sm="9">
                        <b-form-input id="input-small" size="sm" type="text" required placeholder="Enter Card CVV"></b-form-input>
                    </b-col>
                </b-row><br>
                <router-link :to="{ path: '/Homepage' }">
                    <b-button type="submit">Confirm</b-button>
                </router-link>
            </b-col>
            <b-col cols="2"></b-col>
        </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  data () {
    return {
      event: '',
      hall: '',
      time: '',
      ticket: '',
      form: {
        card_name: '',
        card_number: '',
        card_expr_date: '',
        card_expr_date: '',
        card_cvv
        },
        show: true
    }
    },
    methods: {
    onSubmit (evt) {
      evt.preventDefault();
      alert(JSON.stringify(this.form));
    },
    onReset (evt) {
      evt.preventDefault();
      // Reset our form values
      this.form.email = '';
      this.form.password = '';
      // Trick to reset/clear native browser form validation state
      this.show = false;
      this.$nextTick(() => { this.show = true });
    }
  }
}
</script>