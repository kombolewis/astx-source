<template lang="pug">
  div 
    v-sheet(elevation="4" class="pa-6" tile)
      .title.mb-1 Filters:
        v-radio-group.mb-n4(v-model="requiredComponent")
          .d-flex.flex-row.justify-space-between
            v-radio(
              name="compomentSelection" 
              value="dateComponent" 
              label="Search by Date"
            ) 
            v-radio(
              name="compomentSelection" 
              value="idComponent" 
              label="Search by Id" 
            )
        
    div(v-if="requiredComponent == 'dateComponent'")
      NeoFeed(@newDat="remit")
    div(v-else-if="requiredComponent == 'idComponent'")
      IdSearch(@newDat="remit")
</template>

<script>
import NeoFeed from './cards/NeoFeed'
import IdSearch from './cards/IdSearch'
export default {
  name:'FilterComponent',
  components:{
    NeoFeed,
    IdSearch
  },
  data: () => ({
    requiredComponent:''
  }),
  methods:{
    remit(e){
      console.log(e)
      this.$emit('newDat', e)
    }
  }

}
</script>