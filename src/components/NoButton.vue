<template>
	<div class="button-container" :class="{ active: isClicked }" @click="buttonClick">
		<svg width="70" height="70" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path
				d="M42.6404 34.9996L64.0263 13.6137C65.0413 12.6005 65.6122 11.2257 65.6134 9.79154C65.6147 8.35742 65.0462 6.98153 64.033 5.96656C63.0199 4.95159 61.645 4.38068 60.2109 4.37941C58.7767 4.37814 57.4009 4.94663 56.3859 5.95981L35 27.3457L13.6141 5.95981C12.5991 4.94484 11.2225 4.37463 9.7871 4.37463C8.35171 4.37463 6.97512 4.94484 5.96015 5.95981C4.94517 6.97478 4.37497 8.35138 4.37497 9.78676C4.37497 11.2222 4.94517 12.5987 5.96015 13.6137L27.3461 34.9996L5.96015 56.3856C4.94517 57.4005 4.37497 58.7771 4.37497 60.2125C4.37497 61.6479 4.94517 63.0245 5.96015 64.0395C6.97512 65.0544 8.35171 65.6246 9.7871 65.6246C11.2225 65.6246 12.5991 65.0544 13.6141 64.0395L35 42.6535L56.3859 64.0395C57.4009 65.0544 58.7775 65.6246 60.2128 65.6246C61.6482 65.6246 63.0248 65.0544 64.0398 64.0395C65.0548 63.0245 65.625 61.6479 65.625 60.2125C65.625 58.7771 65.0548 57.4005 64.0398 56.3856L42.6404 34.9996Z"
				fill="#1E2324"
			/>
		</svg>
		<p>No</p>
	</div>
</template>

<script>
export default {
	name: 'NoButton',
	data() {
		return {
			label: 'No',
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
