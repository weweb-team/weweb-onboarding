<template>
	<h2>What type of project do you want to create with WeWeb?</h2>
	<div class="buttons-container">
		<ShowcaseWebsiteButton></ShowcaseWebsiteButton>
		<LandingPageButton></LandingPageButton>
		<BlogButton></BlogButton>
		<MarketplaceButton></MarketplaceButton>
		<OtherButton></OtherButton>
	</div>
	<div class="navigation-buttons">
		<router-link to="/">
			<button class="back-button">Back</button>
		</router-link>
		<router-link to="/external-data">
			<button class="next-button">Next</button>
		</router-link>
	</div>
</template>

<script>
import ShowcaseWebsiteButton from '../components/ShowcaseWebsiteButton'
import LandingPageButton from '../components/LandingPageButton'
import BlogButton from '../components/BlogButton'
import MarketplaceButton from '../components/MarketplaceButton'
import OtherButton from '../components/OtherButton'

export default {
	name: 'Project',
	components: { ShowcaseWebsiteButton, LandingPageButton, BlogButton, MarketplaceButton, OtherButton },
}
</script>

<style></style>
