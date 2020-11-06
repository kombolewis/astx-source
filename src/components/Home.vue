<template lang="pug">
	div
		Header
		v-row 
			v-col(offset-md="2" cols="8" )
				v-divider
		Asteroid
</template>

<script>
import Asteroid from './Asteroids'
import Header from './Header'
export default {
	name: 'Home',
	components:{
		Asteroid,
		Header,
	},

}
</script>