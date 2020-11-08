<template lang="pug">
  v-container 
    v-row 
      v-col(md="4" )
        FilterComponent(@newDat="renderNew")
      v-col(md="8" lg="7")
        AllItems(:renderNewView="renderNewView")
</template>

<script>
import FilterComponent from './FilterComponent'
import AllItems from './AllItems'
export default {
  name:'Browse',
  components:{
    FilterComponent,
    AllItems,
    
  },
  data: () => ({
    renderNewView:'standardFilter'
  }),
  methods:{
    renderNew(e){
      this.renderNewView = e

    },
    
  }
}
</script>