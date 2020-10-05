<template>
	<div class="button-container" :class="{ active: isClicked }" @click="buttonClick">
		<svg id="tick" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path
				fill-rule="evenodd"
				clip-rule="evenodd"
				d="M13.6585 3.24744C14.0741 3.61112 14.1163 4.24288 13.7526 4.65852L6.75258 12.6585C6.57032 12.8668 6.30989 12.9902 6.03328 12.9995C5.75666 13.0087 5.4886 12.9028 5.29289 12.7071L2.29289 9.70712C1.90237 9.3166 1.90237 8.68343 2.29289 8.29291C2.68342 7.90238 3.31658 7.90238 3.70711 8.29291L5.95129 10.5371L12.2474 3.34151C12.6111 2.92587 13.2429 2.88375 13.6585 3.24744Z"
				fill="#1E2324"
			/>
		</svg>
		<svg width="70" height="70" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path
				d="M31.0842 12.1737C20.9832 12.1737 12.7652 20.3917 12.7652 30.4927C12.7652 40.5937 20.9832 48.8117 31.0842 48.8117C35.2303 48.8117 39.2315 47.3921 42.462 44.8266L54.8366 57.4084C55.111 57.687 55.4722 57.827 55.8348 57.827C56.189 57.827 56.5439 57.6933 56.8162 57.4252C57.3678 56.8834 57.3748 55.9965 56.8323 55.4456L44.5284 42.9345C47.6462 39.5647 49.4025 35.1288 49.4025 30.4927C49.4025 20.391 41.1845 12.1737 31.0842 12.1737ZM31.0842 46.011C22.5267 46.011 15.5652 39.0495 15.5652 30.492C15.5652 21.9345 22.5267 14.973 31.0842 14.973C39.641 14.973 46.6025 21.9345 46.6025 30.492C46.6025 34.9755 44.6628 39.2399 41.2818 42.1904C38.458 44.6544 34.8362 46.011 31.0842 46.011Z"
				fill="black"
			/>
			<path
				d="M30.4563 17.8906C24.5889 18.6452 19.8744 23.051 18.7243 28.8547C18.5738 29.6128 19.0673 30.3499 19.8254 30.5004C19.9171 30.5186 20.0088 30.5277 20.0991 30.5277C20.7543 30.5277 21.3388 30.0657 21.4711 29.3993C22.3867 24.7779 26.1415 21.2695 30.8133 20.6689C31.5805 20.5702 32.1223 19.8681 32.0236 19.1016C31.9249 18.3337 31.2242 17.7933 30.4563 17.8906Z"
				fill="black"
			/>
		</svg>
		<p>Other</p>
	</div>
</template>

<script>
export default {
	name: 'OtherButton',
	data() {
		return {
			label: 'Other',
		}
	},
	components: {},
	computed: {
		isClicked() {
			if (this.$route.path === '/') {
				return this.$store.state.team === this.label
			}
			return this.$store.state.project === this.label
		},
	},
	methods: {
		buttonClick() {
			if (this.$route.path === '/') {
				if (this.isClicked) {
					this.$store.dispatch('changeTeam', '')
				} else {
					this.$store.dispatch('changeTeam', this.label)
				}
			} else if (this.$route.path === '/project') {
				if (this.isClicked) {
					this.$store.dispatch('changeProject', '')
				} else {
					this.$store.dispatch('changeProject', this.label)
				}
			}
		},
	},
}
</script>

<style></style>
