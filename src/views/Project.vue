<template>
	<div>
		<h2>What type of project do you want to create with WeWeb?</h2>
		<div class="buttons-container">
			<CompanyWebsiteButton></CompanyWebsiteButton>
			<LandingPageButton></LandingPageButton>
			<BlogButton></BlogButton>
			<MarketplaceButton></MarketplaceButton>
			<OtherButton></OtherButton>
		</div>
		<div class="navigation-buttons">
			<router-link to="/">
				<button class="back-button" @mouseover="setTransitionDirection('left')">
					<ReturnArrow />
					Back
				</button>
			</router-link>
			<button class="next-button" @mouseover="setTransitionDirection('right')" @click="goTo('/external-data')">
				Next
				<NextArrow />
			</button>
		</div>
	</div>
</template>

<script>
import { defineComponent } from 'vue'
import CompanyWebsiteButton from '../components/CompanyWebsiteButton'
import LandingPageButton from '../components/LandingPageButton'
import BlogButton from '../components/BlogButton'
import MarketplaceButton from '../components/MarketplaceButton'
import OtherButton from '../components/OtherButton'
import ReturnArrow from '../components/ReturnArrow'
import NextArrow from '../components/NextArrow'

export default defineComponent({
	name: 'Project',
	props: {
		setTransitionDirection: Function,
	},
	components: { CompanyWebsiteButton, LandingPageButton, BlogButton, MarketplaceButton, OtherButton, ReturnArrow, NextArrow },
	methods: {
		goTo(to) {
			const response = this.$store.state.project
			if (!response || response.lenght <= 0) {
				this.$store.dispatch('displayWarning', true)
			} else {
				this.$router.push({ path: to })
			}
		},
		checkPreviousResponses() {
			const teamResponse = this.$store.state.team

			if (!teamResponse || teamResponse.length <= 0) {
				this.$router.push('/')
			}
		},
	},
	mounted() {
		this.checkPreviousResponses()
		window.analytics.track('Onboarding', 'Project')
	},
})
</script>

<style></style>
