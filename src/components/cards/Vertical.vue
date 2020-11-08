<template lang="pug">
  v-card(outlined)
    v-img(:src="item.url" height="200px")
    v-card-title
      .text-truncate {{item.name}}
    v-card-subtitle
      .subtitle Id: <span class="font-weight-medium">{{item.id}}</span>
      .subtitle Avg Diameter(km): <span class="font-weight-medium">{{(( parseFloat(item.estimated_diameter.kilometers.estimated_diameter_min) + parseFloat(item.estimated_diameter.kilometers.estimated_diameter_min) )/2).toFixed(2)}}</span>
    v-card-actions
      v-btn(color="success" outlined)
        v-icon(left small) mdi-plus
        | Save
      v-spacer
      v-btn(color="warning" outlined)
        v-icon(left small) mdi-open-in-new
        | View
</template>

<script>
export default {
  name:'Vertical',
  props:['item']
}
</script>