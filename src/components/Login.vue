<template>
    <div>
        <b-container class="bv-example-row">
            <b-row>
                <b-col>
                    <h2>Sign Up</h2><hr>
                    <b-form-input id="exampleInput2" type="text" v-model="form.name" required placeholder="Enter name">
                    </b-form-input><br>
                    <b-form-input id="exampleInput1" type="email" v-model="form.email" required placeholder="Enter email">
                    </b-form-input><br>
                    <b-form-input id="exampleInput1" type="password" v-model="form.password" required placeholder="Enter password">
                    </b-form-input><br>
                    <b-button type="submit">Sign Up</b-button>
                </b-col>
                <b-col>
                    <b-card class="text-center">
                        <b-form @submit="onSubmit" @reset="onReset" v-if="show">
                            <b-form-group id="exampleInputGroup1" label="Email address:" align="left">
                                <b-form-input id="exampleInput1" type="email" v-model="form.email" required placeholder="Enter email">
                                </b-form-input>
                            </b-form-group>
                            <b-form-group id="exampleInputGroup1" label="Password:" align="left">
                                <b-form-input id="exampleInput1" type="password" v-model="form.password" required placeholder="Enter password">
                                </b-form-input>
                            </b-form-group>
                        </b-form>
                        <b-button>Log in</b-button>   
                    </b-card>       
                </b-col>
            </b-row>
        </b-container>            
    </div>                
</template>
<script>
export default {
  data () {
    return {
      form: {
        name: '',
        email: '',
        password: '',
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
