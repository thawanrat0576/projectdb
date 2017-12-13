<template>
    <div>
        <b-container class="bv-example-row">
            <b-row>
                <b-col>
                    <b-card-group deck>
                        <b-card border-variant="secondary" header="Plays" header-border-variant="secondary" align="center">
                            <p class="card-text">
                                <b-form-radio-group v-model="selected" :options="options" stacked name="radiosStacked">
                                </b-form-radio-group>
                            </p>
                        </b-card>
                    </b-card-group>
                </b-col>
                <b-col>
                    <b-card-group deck>
                        <b-card border-variant="secondary" header="Concerts" header-border-variant="secondary" align="center">
                            <p class="card-text">
                                <b-form-radio-group v-model="selected" :options="options" stacked name="radiosStacked">
                                </b-form-radio-group>
                            </p>
                        </b-card>
                    </b-card-group>
                </b-col>
                <b-col>
                    <b-card-group deck>
                        <b-card border-variant="secondary" header="Lectures" header-border-variant="secondary" align="center">
                            <p class="card-text">
                                <b-form-radio-group v-model="selected" :options="options" stacked name="radiosStacked">
                                </b-form-radio-group>
                            </p>
                        </b-card>
                    </b-card-group>
                </b-col>
                <b-col>
                    <b-card-group deck>
                        <b-card border-variant="secondary" header="Conferences" header-border-variant="secondary" align="center">
                            <p class="card-text">
                                <b-form-radio-group v-model="selected" :options="options" stacked name="radiosStacked">
                                </b-form-radio-group>
                            </p>
                        </b-card>
                    </b-card-group>
                </b-col>
            </b-row>
        </b-container>
    </div>
</template>
<script>
    export default {
  data () {
    return {
      selected: 'first',
      options: [
        { text: 'First radio', value: 'first' },
        { text: 'Second radio', value: 'second' },
        { text: 'Third radio', value: 'third' }
      ]
    }
  }
}
</script>
