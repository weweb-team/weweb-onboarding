<template>
	<h2>Lets go!</h2>
</template>

<script>
import { defineComponent } from 'vue'
export default defineComponent({
	name: 'Letsgo',
	components: {},
	mounted() {
		console.log(this.$store.getters.responses)
	},
})
</script>

<style></style>
