<template>
	<h2>Will you import your frontend components?</h2>
	<div class="buttons-container">
		<YesButton></YesButton>
		<NoButton></NoButton>
	</div>
	<div class="navigation-buttons">
		<router-link to="/data-origins">
			<button class="back-button">Back</button>
		</router-link>
		<router-link to="/letsgo">
			<button class="next-button">Next</button>
		</router-link>
	</div>
</template>

<script>
import { defineComponent } from 'vue'
import YesButton from '../components/YesButton'
import NoButton from '../components/NoButton'

export default defineComponent({
	name: 'FrontendComponents',
	components: { YesButton, NoButton },
})
</script>

<style></style>
