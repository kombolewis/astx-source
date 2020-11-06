<template lang="pug">
  v-card.mt-5(elevation="4")
    v-card-title
      .title.mb-n3 Date:
    v-card-text
      v-form
        v-dialog(
          ref="dialog"
          v-model="modal"
          :return-value.sync="date"
          persistent
          width="290px"
        )
          template(v-slot:activator="{on, attrs}")
            v-text-field(
              label="Date Range" 
              v-model="dateRangeText" 
              prepend-icon="mdi-calendar"
              v-bind="attrs"
              v-on="on"
              readonly
            )
          v-date-picker(
            v-model="dates"
            range
            scrollable
          )
            v-spacer 
            v-btn(
              text
              color="primary"
              @click="modal = false"
            )
              | Cancel
            v-btn(
              text
              color="primary"
              @click="$refs.dialog.save(date)"
            )
              | Ok

    v-card-actions
      v-spacer
      v-btn(outlined color="primary" @click="getData") Submit

</template>

<script>
// import urls from '@/store/db/imageUrl'
export default {
  name:'NeoFeed',
  data: () => ({
    date: new Date().toISOString().substr(0,10),
    modal:false,
    dates:[],
    neoFeedData:[]
  }),
  methods:{
    getData(){
      this.$store.dispatch('fetchFromNeoFeed', this.dates)
      .then(data => {
        this.$emit('newDat')
        console.log(data)
      })
      .catch(err => {
        console.log(err)
      })
    },

  },
  computed:{
    dateRangeText(){
      return this.dates.join('~')
    }
  }
}
</script>