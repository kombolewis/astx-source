<template lang="pug">
    v-app
      Navbar(:links="links")
      v-main
        router-view
      Footer(:links="links")

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
    links: [
			{
				label: 'Home',
				url:'/'
			},
			{
				label: 'Login',
				url:'/login'
      },
      {
				label: 'Browse',
				url:'/browse'
      },
		]
  }),
};
</script>
