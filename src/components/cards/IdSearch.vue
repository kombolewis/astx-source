<template lang="pug">

  v-card(elevation="4").mt-5
    v-card-title
      .title.mb-n3 ID:
    v-card-text
      v-form
        v-text-field(
          label="Enter Asteroid ID"
          prepend-icon="mdi-identifier"
          v-model="id"
          
        )

    v-card-actions
      v-spacer
      v-btn(color="primary" outlined @click="getData") Submit


</template>

<script>
  export default {
    name: 'IdSearch',
    data: () => ({
      showPassword: false,
      id:'',
    }),
    methods:{
      getData(){
        this.$store.dispatch('fetchItem', this.id)
        .then(data => {
          console.log(data)
          this.$emit('newDat','idFilter')
        })
        .catch(err => {
          console.log(err)
        })
      },
  },

  }
</script>
