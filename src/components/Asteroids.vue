<template lang="pug">
  v-container
    div(v-if="allItems.length > 0")
      v-row 
        v-col(sm="10" offset-sm="1" lg="8" offset-lg="2")
          h2 Featured Objects 
            v-btn(to="Register" text color="primary" small) View All
            v-btn(to="Register" text color="primary" small) Saved Items
      v-row
        v-col(sm="10" offset-sm="1" lg="8" offset-lg="2")
          v-row 
            v-col(
              sm="6" 
              md="4"
              v-for="(item, i) in $store.getters.getAllItems.slice(0,3)"
              :key="item.id"
            )    
              Vertical(:item="item")
</template>

<script>

import Vertical from './cards/Vertical'
export default {
  name: 'Asteroid',
  data: () => ({
    allItems: []
  }),
  components:{
    Vertical
  },
  
  beforeCreate(){
      this.$store.dispatch('fetchAllItems')
      .then(data => {
        this.allItems = data.near_earth_objects
      })
      .catch(err => {
        console.log(err)
      })
  }

}
</script>