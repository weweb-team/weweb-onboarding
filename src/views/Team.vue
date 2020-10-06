<template>
	<div>
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
			<button class="next-button" @mouseover="setTransitionDirection('right')" @click="goTo('/project')">
				Next
				<NextArrow />
			</button>
		</div>
	</div>
</template>

<script>
import { defineComponent } from 'vue'
import MarketingButton from '../components/MarketingButton'
import GrowthButton from '../components/GrowthButton'
import ProductButton from '../components/ProductButton'
import EngineeringButton from '../components/EngineeringButton'
import DesignButton from '../components/DesignButton'
import OtherButton from '../components/OtherButton'
import NextArrow from '../components/NextArrow'

export default defineComponent({
	name: 'Team',
	props: {
		setTransitionDirection: Function,
	},
	components: { MarketingButton, GrowthButton, ProductButton, EngineeringButton, DesignButton, OtherButton, NextArrow },
	methods: {
		goTo(to) {
			const response = this.$store.state.team
			if (!response || response.length <= 0) {
				this.$store.dispatch('displayWarning', true)
			} else {
				this.$router.push({ path: to })
			}
		},
	},
})
</script>

<style></style>
