<template>
	<div>
		<h2>From where will this data come from?</h2>
		<div class="buttons-container-small">
			<GoogleSheetsButton></GoogleSheetsButton>
			<AirtableButton></AirtableButton>
			<ContentfulButton></ContentfulButton>
			<StrapiButton></StrapiButton>
			<WordpressButton></WordpressButton>
			<PrismicButton></PrismicButton>
			<CustomAPIButton></CustomAPIButton>
			<OtherSmallButton></OtherSmallButton>
		</div>
		<div class="navigation-buttons">
			<router-link to="/external-data">
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
import GoogleSheetsButton from '../components/GoogleSheetsButton'
import AirtableButton from '../components/AirtableButton'
import ContentfulButton from '../components/ContentfulButton'
import StrapiButton from '../components/StrapiButton'
import WordpressButton from '../components/WordpressButton'
import PrismicButton from '../components/PrismicButton'
import CustomAPIButton from '../components/CustomAPIButton'
import OtherSmallButton from '../components/OtherSmallButton'
import ReturnArrow from '../components/ReturnArrow'
import NextArrow from '../components/NextArrow'

export default defineComponent({
	name: 'DataOrigin',
	props: {
		setTransitionDirection: Function,
	},
	components: { GoogleSheetsButton, AirtableButton, ContentfulButton, StrapiButton, WordpressButton, PrismicButton, CustomAPIButton, OtherSmallButton, ReturnArrow, NextArrow },
	computed: {
		setNextRoute() {
			return this.$store.state.team === 'Engineering' ? '/frontend-components' : '/letsgo'
		},
	},
	methods: {
		goTo(to) {
			const response = this.$store.state.dataOrigin
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

			if (!teamResponse || teamResponse.length <= 0) {
				this.$router.push('/')
			} else if (!projectResponse || projectResponse.length <= 0) {
				this.$router.push('/project')
			} else if (!externalDataResponse || externalDataResponse.length <= 0) {
				this.$router.push('/external-data')
			}
		},
	},
	mounted() {
		this.checkPreviousResponses()
		window.analytics.page('Onboarding', 'Data Origin')
	},
})
</script>

<style></style>
