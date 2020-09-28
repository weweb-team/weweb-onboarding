<template>
	<div class="button-container" :class="{ active: isClicked }" @click="buttonClick">
		<svg width="70" height="70" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path d="M58.6475 4.375L67.3313 10.4666L29.6802 64.7722H20.9965L0 35.3513L8.68372 27.2508L25.3383 42.8037L58.6475 4.375Z" fill="black" />
		</svg>
		<p>Yes</p>
	</div>
</template>

<script>
export default {
	name: 'YesButton',
	data() {
		return {
			label: 'Yes',
		}
	},
	components: {},
	computed: {
		isClicked() {
			if (this.$route.path === '/external-data') {
				return this.$store.getters.externalData === this.label
			}
			return this.$store.getters.externalData === this.label
		},
	},
	methods: {
		buttonClick() {
			if (this.$route.path === '/external-data') {
				if (this.isClicked) {
					this.$store.dispatch('changeExternalData', '')
				} else {
					this.$store.dispatch('changeExternalData', this.label)
				}
			} else if (this.$route.path !== '/external-data') {
				if (this.isClicked) {
					this.$store.dispatch('changeExternalComponents', '')
				} else {
					this.$store.dispatch('changeExternalComponents', this.label)
				}
			}
		},
	},
}
</script>

<style></style>
