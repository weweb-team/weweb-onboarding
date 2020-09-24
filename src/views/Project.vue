<template>
	<h2>What type of project do you want to create with WeWeb?</h2>
	<div class="buttons-container">
		<ShowcaseWebsiteButton></ShowcaseWebsiteButton>
		<LandingPageButtonGrowthButton></LandingPageButtonGrowthButton>
		<BlogButton></BlogButton>
		<MarketplaceButton></MarketplaceButton>
		<OtherButton></OtherButton>
	</div>
	<div class="navigation-buttons">
		<router-link to="/" tag="button" class="back-button">Back</router-link>
		<router-link to="/external-data" tag="button" class="next-button">Next</router-link>
	</div>
</template>

<script>
import ShowcaseWebsiteButton from '../components/ShowcaseWebsiteButton'
import LandingPageButtonGrowthButton from '../components/LandingPageButton'
import BlogButton from '../components/BlogButton'
import MarketplaceButton from '../components/MarketplaceButton'
import OtherButton from '../components/OtherButton'

export default {
	name: 'Project',
	components: { ShowcaseWebsiteButton, LandingPageButtonGrowthButton, BlogButton, MarketplaceButton, OtherButton },
}
</script>

<style></style>
