<template lang="pug">
    v-app
      Navbar(:links="linksComputed")
      v-main
        router-view
      v-snackbar(
        v-model="$store.getters.checkShow"
        :multi-line="true"
        :right="true"
        :top="true"
        :timeout="6000"
        :color="$store.getters.checkVariant"

      )
        | {{$store.getters.checkMessage}}
        v-btn(
          dark
          text
          @click="$store.commit('updateSnackbar', {show: false})"
        )
            | Close
      Footer(:links="linksComputed")

</template>

<script>
import Navbar from './components/Navbar'
import Footer from './components/Footer'
export default {
  name: 'App',

  components: {
    Navbar,
    Footer
  },

  data: () => ({
    show:this.$store.getters.checkshow,
    variant:'',
    message:''
  }),

  computed:{
    linksComputed(){
      return[
        {
          label: 'Home',
          url:'/'
        },
        {
          label: 'Browse',
          url:'/browse'
        },
        {
          label: 'Saved Items',
          url:'/saved-items'
        },
        {
          label: this.$store.getters.isLoggedIn ? 'Logout':'Login',
          url:'/login'
        },
      ]
    },
  },



};
</script>
