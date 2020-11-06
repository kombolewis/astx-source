<template lang="pug">
  div
    .subtitle-1.ml-4(v-if="item.year") {{item.year}}
    div(v-else-if="item.name")
      v-card(outlined)
        v-img(:src="item.url" height="200px")
        v-card-title
          | {{item.name}}
        v-card-subtitle
          | Avg Diameter(km): {{(( parseFloat(item.estimated_diameter.kilometers.estimated_diameter_min) + parseFloat(item.estimated_diameter.kilometers.estimated_diameter_min) )/2).toFixed(2)}}
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