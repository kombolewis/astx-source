<template lang="pug">
  v-card(outlined)
    v-img(:src="item.url" height="200px")
    v-card-title
      .text-truncate {{item.name}}
    v-card-subtitle
      .subtitle Id: <span class="font-weight-medium">{{item.id}}</span>
      .subtitle Avg Diameter(km): <span class="font-weight-medium">{{item.estimatedDiameter}}</span>
      .subtitle Time of Approach: <span class="font-weight-medium">{{item.timeOfApproach}}</span>
    
    v-card-actions
      v-btn(color="error" outlined @click="deleteAsteroid(item['.key'])")
        v-icon(left small) mdi-delete
        | Delete
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
    deleteAsteroid(id){
      this.$firestore.asteroids.doc(id).delete()
      .then(() => {
          this.$store.commit('updateSnackbar', {
            show:true,
            variant:'success',
            message:'Item removed successfully'
          })
      })
      .catch(() => {
          this.$store.commit('updateSnackbar', {
            show:true,
            variant:'error',
            message:'Item removal failed'
          })
      })
    }
  }
}
</script>