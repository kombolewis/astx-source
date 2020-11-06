<template lang="pug">
	v-container 
		v-row
			v-col(class="d-flex justify-center mb-6")
				v-form(ref="registerForm" v-model="formValidity")
					h1 Register
					v-text-field(
						label="Email"
						type="Email" 
						v-model="email" 
						:rules="emailRules"
						required
					)
					v-text-field(
						label="Password" 
						type="password" 
						v-model="password"
						required
						:rules="passwordRules"
					)
					v-switch(
						label="Agree to terms and conditions" 
						v-model="agreeToTerms"
						required
						:rules="agreeToTermRules"
					)
					v-btn.mr-4(type="submit" color="primary" :disabled="!formValidity") Submit
					v-btn.mr-4(color="warning" @click="resetValidation") Reset Validation
					v-btn(color="error" @click="resetForm") Reset 
			
		
</template>

<script>
export default {
		name:'Register',
		data: () => ({
			agreeToTerms:false,
			agreeToTermRules:[
				value => !!value || 'You must agree to the terms and conditions to sign up for an account.'
			],
			email:'',
			emailRules: [
				value => !!value || 'Email is required.',
				value => value.indexOf('@') !== 0 || 'Email should have a username.',
				value => value.includes('@')|| 'Email should include \'@\' symbol',
				value => value.indexOf('.') - value.indexOf('@') > 1 || 'Email should contain a valid domain.',
				value => value.indexOf('.') <= value.length - 3 || 'Email should contain a valid domain extension'

			],
			formValidity:false,
			password:'',
			passwordRules:[
				value => !!value || 'Password is required.',
				value => value.length >= 6 || 'Password too short. Atleast 6 characters required',

			]
		}),
		methods: {
			resetForm(){
				this.$refs.registerForm.reset()
			},
			resetValidation(){
				this.$refs.registerForm.resetValidation()
			}
		},

}
</script>