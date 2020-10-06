<template>
	<div class="button-container small" :class="{ active: isClicked }" @click="buttonClick">
		<svg id="tick" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path
				fill-rule="evenodd"
				clip-rule="evenodd"
				d="M13.6585 3.24744C14.0741 3.61112 14.1163 4.24288 13.7526 4.65852L6.75258 12.6585C6.57032 12.8668 6.30989 12.9902 6.03328 12.9995C5.75666 13.0087 5.4886 12.9028 5.29289 12.7071L2.29289 9.70712C1.90237 9.3166 1.90237 8.68343 2.29289 8.29291C2.68342 7.90238 3.31658 7.90238 3.70711 8.29291L5.95129 10.5371L12.2474 3.34151C12.6111 2.92587 13.2429 2.88375 13.6585 3.24744Z"
				fill="#1E2324"
			/>
		</svg>
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
			return this.$store.state.dataOrigin.includes(this.label)
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
