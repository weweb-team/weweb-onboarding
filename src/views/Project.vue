<template>
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
			<button class="back-button">
				<ReturnArrow />
				Back
			</button>
		</router-link>
		<router-link to="/external-data">
			<button class="next-button">
				Next
				<NextArrow />
			</button>
		</router-link>
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
	components: { CompanyWebsiteButton, LandingPageButton, BlogButton, MarketplaceButton, OtherButton, ReturnArrow, NextArrow },
})
</script>

<style></style>
