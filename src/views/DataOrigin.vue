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
			<router-link :to="setNextRoute">
				<button class="next-button" @mouseover="setTransitionDirection('right')">
					<NextArrow />
					Next
				</button>
			</router-link>
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
})
</script>

<style></style>
