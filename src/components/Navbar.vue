<template lang="pug">
	v-app-bar(app color="primary" dark)
		v-toolbar-title.font-weight-bold NEOWS
		v-spacer
		v-btn(
			v-for="link in links"
			:key="`${link.label}-header-link`"
			text 
			rounded 
			:to="link.url"
		)
			| {{ link.label }}

		
</template>

<script>
export default {
		name:'Navbar',
		props:['links']
}
</script>