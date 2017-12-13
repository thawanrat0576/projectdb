<template>
  <div>
    <b-container class="bv-example-row">
        <b-row>
            <b-col cols="2"></b-col>
            <b-col cols="8">
                <h2>Buy Ticket</h2><hr>
                <p align="left">Seat NO.: {{ seatno }}</p>
                <p align="left">Ticket price: {{ ticket }}</p>
                <p align="left">Event: {{ event }}</p>
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
                
                <!-- 
                    <b-form-input id="exampleInput1" type="text" v-model="form.card_name" required placeholder="Enter Card Holder">
                    </b-form-input><br>
                    <b-form-input id="exampleInput1" type="number" v-model="form." required placeholder="Enter ">
                    </b-form-input><br>
                    <b-form-input id="exampleInput1" type="date" v-model="form." required placeholder="Enter ">
                    </b-form-input><br>
                    <b-form-input id="exampleInput1" type="number" v-model="form." required placeholder="Enter Card CVV">
                    </b-form-input><br>
                </b-form><br> -->
                <b-button type="submit">Confirm</b-button>
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
      seatno: '',
      ticket: '',
      event: '',
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