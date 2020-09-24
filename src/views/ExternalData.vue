<template>
	<h2>Will you project need to pull external data to this project?</h2>
	<div class="buttons-container">
		<YesButton></YesButton>
		<NoButton></NoButton>
	</div>
	<div class="navigation-buttons">
		<router-link to="/project">
			<button class="back-button">Back</button>
		</router-link>
		<router-link to="/data-origins">
			<button class="next-button">Next</button>
		</router-link>
	</div>
</template>

<script>
import YesButton from '../components/YesButton'
import NoButton from '../components/NoButton'

export default {
	name: 'ExternalData',
	components: { YesButton, NoButton },
}
</script>

<style></style>
