<template>
	<div class="button-container small" :class="{ active: isClicked }" @click="buttonClick">
		<p>Strapi</p>
	</div>
</template>

<script>
export default {
	name: 'StrapiButton',
	data() {
		return {
			label: 'Strapi',
		}
	},
	components: {},
	computed: {
		isClicked() {
			return this.$store.getters.dataOrigins.includes(this.label)
		},
	},
	methods: {
		buttonClick() {
			if (this.isClicked) {
				this.$store.dispatch('removeExternalDataItem', this.label)
			} else {
				this.$store.dispatch('addExternalDataItem', this.label)
			}
		},
	},
}
</script>

<style></style>
