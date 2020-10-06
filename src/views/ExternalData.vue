<template>
	<div>
		<h2>Will you project need to pull external data to this project?</h2>
		<div class="buttons-container">
			<YesButton></YesButton>
			<NoButton></NoButton>
		</div>
		<div class="navigation-buttons">
			<router-link to="/project">
				<button class="back-button" @mouseover="setTransitionDirection('left')">
					<ReturnArrow />
					Back
				</button>
			</router-link>
			<button class="next-button" @mouseover="setTransitionDirection('right')" @click="goTo(setNextRoute)">
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
	name: 'ExternalData',
	props: {
		setTransitionDirection: Function,
	},
	components: { YesButton, NoButton, ReturnArrow, NextArrow },
	computed: {
		setNextRoute() {
			return this.$store.state.externalData === 'Yes' ? '/data-origin' : '/letsgo'
		},
	},
	methods: {
		goTo(to) {
			const response = this.$store.state.externalData
			if (!response || response.lenght <= 0) {
				this.$store.dispatch('displayWarning', true)
			} else {
				this.$router.push({ path: to })
			}
		},
		checkPreviousResponses() {
			const teamResponse = this.$store.state.team
			const projectResponse = this.$store.state.project

			if (!teamResponse || teamResponse.length <= 0) {
				this.$router.push('/')
			} else if (!projectResponse || projectResponse.length <= 0) {
				this.$router.push('/project')
			}
		},
	},
	mounted() {
		this.checkPreviousResponses()
	},
})
</script>

<style></style>
