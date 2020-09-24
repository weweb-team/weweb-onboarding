<template>
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
			<button class="back-button">Back</button>
		</router-link>
		<router-link to="/letsgo">
			<button class="next-button">Next</button>
		</router-link>
	</div>
</template>

<script>
import GoogleSheetsButton from '../components/GoogleSheetsButton'
import AirtableButton from '../components/AirtableButton'
import ContentfulButton from '../components/ContentfulButton'
import StrapiButton from '../components/StrapiButton'
import WordpressButton from '../components/WordpressButton'
import PrismicButton from '../components/PrismicButton'
import CustomAPIButton from '../components/CustomAPIButton'
import OtherSmallButton from '../components/OtherSmallButton'

export default {
	name: 'DataOrigins',
	components: { GoogleSheetsButton, AirtableButton, ContentfulButton, StrapiButton, WordpressButton, PrismicButton, CustomAPIButton, OtherSmallButton },
}
</script>

<style></style>
