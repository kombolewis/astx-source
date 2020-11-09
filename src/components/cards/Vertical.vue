<template lang="pug">
  v-card(outlined)
    v-img(:src="item.url" height="200px")
    v-card-title
      .text-truncate {{item.name}}
    v-card-subtitle
      .subtitle Id: <span class="font-weight-medium">{{item.id}}</span>
      .subtitle Avg Diameter(km): <span class="font-weight-medium">{{(( parseFloat(item.estimated_diameter.kilometers.estimated_diameter_min) + parseFloat(item.estimated_diameter.kilometers.estimated_diameter_min) )/2).toFixed(2)}}</span>
    v-card-actions
      v-btn(color="success" outlined @click="addAsteroid")
        v-icon(left small) mdi-plus
        | Save
      v-spacer
      v-btn(color="warning" outlined)
        v-icon(left small) mdi-open-in-new
        | View

</template>

<script>
import {db} from '../../firebase'
export default {
  name:'Vertical',
  props:['item'],
  firestore(){
    return {
      asteroids: db.collection('asteroids')
    }
  },
  methods:{
    addAsteroid(){
      if(this.$store.getters.isLoggedIn){
        this.$firestore.asteroids.add({
          id:this.item.id,
          name:this.item.name,
          url:this.item.url || null,
          estimatedDiameter:((parseFloat(this.item.estimated_diameter.kilometers.estimated_diameter_min) + parseFloat(this.item.estimated_diameter.kilometers.estimated_diameter_min) )/2).toFixed(2),
          day:this.item.day || null,
          // timeOfApproach:this.item.close_approach_data[0].close_approach_date_full || null
        })
        .then(() => {
          this.$store.commit('updateSnackbar', {
            show:true,
            variant:'success',
            message:'Item added successfully.'
          })
        })
        .catch(() => {
          this.$store.commit('updateSnackbar', {
            show:true,
            variant:'error',
            message:'Item addition failed.'
          })
        })
      }else{
        this.$router.push({name:'Login'})
      }
    },
  }
}
</script>