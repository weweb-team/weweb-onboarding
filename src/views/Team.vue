<template>
	<h2>What team do you work on, John?</h2>
	<div class="buttons-container">
		<MarketingButton></MarketingButton>
		<GrowthButton></GrowthButton>
		<ProductButton></ProductButton>
		<EngineeringButton></EngineeringButton>
		<DesignButton></DesignButton>
		<OtherButton></OtherButton>
	</div>
	<div class="navigation-buttons">
		<router-link to="/project">
			<button class="next-button">Next</button>
		</router-link>
	</div>
</template>

<script>
import MarketingButton from '../components/MarketingButton'
import GrowthButton from '../components/GrowthButton'
import ProductButton from '../components/ProductButton'
import EngineeringButton from '../components/EngineeringButton'
import DesignButton from '../components/DesignButton'
import OtherButton from '../components/OtherButton'

export default {
	name: 'Team',
	components: { MarketingButton, GrowthButton, ProductButton, EngineeringButton, DesignButton, OtherButton },
}
</script>

<style></style>
