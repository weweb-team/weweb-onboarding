<template>
	<div>
		<h2>Here we go!</h2>
	</div>
</template>

<script>
import { defineComponent } from 'vue'
export default defineComponent({
	name: 'Letsgo',
	components: {},
	mounted() {
		this.checkPreviousResponses()
		console.log(this.$store.getters.responses)
		window.analytics.track("Onboarding - Let's go")
	},
	methods: {
		checkPreviousResponses() {
			const teamResponse = this.$store.state.team
			const projectResponse = this.$store.state.project
			const externalDataResponse = this.$store.state.externalData
			const dataOriginResponse = this.$store.state.dataOrigin
			const frontendComponentsResponse = this.$store.state.frontendComponents

			if (!teamResponse || teamResponse.length <= 0) {
				this.$router.push('/')
			} else if (!projectResponse || projectResponse.length <= 0) {
				this.$router.push('/project')
			} else if (!externalDataResponse || externalDataResponse.length <= 0) {
				this.$router.push('/external-data')
			} else if (!dataOriginResponse || dataOriginResponse.length <= 0) {
				if (this.$store.state.externalData === 'Yes') {
					this.$router.push('/data-origin')
				}
			} else if (!frontendComponentsResponse || frontendComponentsResponse.length <= 0) {
				if (this.$store.state.team === 'Engineering') {
					this.$router.push('/frontend-components')
				}
			}
		},
	},
})
</script>

<style></style>
