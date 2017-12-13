<template>
    <div>
        <b-container class="bv-example-row">
            <b-row>
                <b-col></b-col>
                <b-col>
                    <h2>Sign Up</h2><hr>
                    <b-card class="text-center">
                        <b-form @submit="onSubmit" @reset="onReset" v-if="show">
                            <b-form-group id="exampleInputGroup1" label="Event Name:" align="left">
                                <b-form-input id="exampleInput1" type="text" v-model="form.event" required placeholder="Enter Event Name">
                                </b-form-input>
                            </b-form-group>
                            <div align="left">
                                <label>Hall:</label>
                                <b-dropdown id="ddown1" text="Hall" class="m-md-2">
                                    <b-dropdown-item>Plays</b-dropdown-item>
                                    <b-dropdown-item>Concerts</b-dropdown-item>
                                    <b-dropdown-item>Lectures</b-dropdown-item>
                                    <b-dropdown-item>Conferences</b-dropdown-item>
                                </b-dropdown>
                            </div>
                            <b-form-group id="exampleInputGroup1" label="Time:" align="left">
                                <b-form-input id="exampleInput1" type="time" v-model="form.time" required placeholder="Enter time">
                                </b-form-input>
                            </b-form-group>
                        </b-form>
                        <b-button>Create</b-button>   
                    </b-card>       
                </b-col>
                <b-col></b-col>
            </b-row>
        </b-container>            
    </div>                
</template>
<script>
export default {
  data () {
    return {
      form: {
        event: '',
        hall: '',
        time: '',
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
      this.form.event = '';
      this.form.time = '';
      // Trick to reset/clear native browser form validation state
      this.show = false;
      this.$nextTick(() => { this.show = true });
    }
  }
}
</script>
