<template lang="pug">

  v-card(elevation="4").mt-5
    v-card-title
      .title.mb-n3 ID:
    v-card-text
      v-form
        v-text-field(
          label="Enter Asteroid ID"
          prepend-icon="mdi-identifier"
          
        )

    v-card-actions
      v-spacer
      v-btn(color="primary" outlined) Submit


</template>

<script>
  export default {
    name: 'IdSearch',
    data: () => ({
      showPassword: false,
    })

  }
</script>
