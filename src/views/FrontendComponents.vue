<template>
	<div>
		<h2>Will you import your frontend components?</h2>
		<div class="buttons-container">
			<YesButton></YesButton>
			<NoButton></NoButton>
		</div>
		<div class="navigation-buttons">
			<router-link to="/data-origin">
				<button class="back-button" @mouseover="setTransitionDirection('left')">
					<ReturnArrow />
					Back
				</button>
			</router-link>
			<router-link to="/letsgo">
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
import YesButton from '../components/YesButton'
import NoButton from '../components/NoButton'
import ReturnArrow from '../components/ReturnArrow'
import NextArrow from '../components/NextArrow'

export default defineComponent({
	name: 'FrontendComponents',
	props: {
		setTransitionDirection: Function,
	},
	components: { YesButton, NoButton, ReturnArrow, NextArrow },
})
</script>

<style></style>
