<template>
	<div>
		<h2>Will you import your frontend components?</h2>
		<div class="buttons-container">
			<YesButton></YesButton>
			<NoButton></NoButton>
		</div>
		<div class="navigation-buttons">
			<router-link to="/data-origin">
				<button class="back-button" @mouseover="setTransitionDirection('left')">
					<ReturnArrow />
					Back
				</button>
			</router-link>
			<button class="next-button" @mouseover="setTransitionDirection('right')" @click="goTo('/letsgo')">
				<NextArrow />
				Next
			</button>
		</div>
	</div>
</template>

<script>
import { defineComponent } from 'vue'
import YesButton from '../components/YesButton'
import NoButton from '../components/NoButton'
import ReturnArrow from '../components/ReturnArrow'
import NextArrow from '../components/NextArrow'

export default defineComponent({
	name: 'FrontendComponents',
	props: {
		setTransitionDirection: Function,
	},
	components: { YesButton, NoButton, ReturnArrow, NextArrow },
	methods: {
		goTo(to) {
			const response = this.$store.state.frontendComponents
			if (!response || response.length <= 0) {
				this.$store.dispatch('displayWarning', true)
			} else {
				this.$router.push({ path: to })
			}
		},
		checkPreviousResponses() {
			const teamResponse = this.$store.state.team
			const projectResponse = this.$store.state.project
			const externalDataResponse = this.$store.state.externalData
			const dataOriginResponse = this.$store.state.dataOrigin

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
			}
		},
	},
	mounted() {
		this.checkPreviousResponses()
		window.analytics.page('Onboarding', 'Frontend Components')
	},
})
</script>

<style></style>
