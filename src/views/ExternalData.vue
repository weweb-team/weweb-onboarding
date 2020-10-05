<template>
	<h2>Will you project need to pull external data to this project?</h2>
	<div class="buttons-container">
		<YesButton></YesButton>
		<NoButton></NoButton>
	</div>
	<div class="navigation-buttons">
		<router-link to="/project">
			<button class="back-button">
				<ReturnArrow />
				Back
			</button>
		</router-link>
		<router-link :to="setNextRoute">
			<button class="next-button">
				<NextArrow />
				Next
			</button>
		</router-link>
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
	components: { YesButton, NoButton, ReturnArrow, NextArrow },
	computed: {
		setNextRoute() {
			return this.$store.state.externalData === 'Yes' ? '/data-origin' : '/letsgo'
		},
	},
})
</script>

<style></style>
