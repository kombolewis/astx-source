<template lang="pug">

  v-container 
    v-row 
      v-col
        .title Saved Items
    v-row 
      v-col(
        sm="6"
        md="3"
        v-for="item in asteroids"
        :key="item.id"
      )
        VerticalSavedItems(:item="item" :location="'Saved Items'")
</template>

<script>
import VerticalSavedItems from './cards/VerticalSavedItems'
import {db} from '../firebase'
export default {
  name:'SavedItems',
  components:{
    VerticalSavedItems,
  },
  firestore(){
    return {
      asteroids: db.collection('asteroids')
    }
  },


}
</script>