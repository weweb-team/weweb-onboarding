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
			<path d="M2.99999 64.7871H12.1738V47.3975H2.99999V64.7871ZM4.99999 49.3975H10.1738V62.7871H4.99999V49.3975Z" fill="black" />
			<path d="M21.2759 64.7871H30.4492V36.8174H21.2759V64.7871ZM23.2759 38.8174H28.4492V62.7871H23.2759V38.8174Z" fill="black" />
			<path d="M39.5513 64.7871H48.7246V26.2363H39.5513V64.7871ZM41.5513 28.2363H46.7246V62.7871H41.5513V28.2363Z" fill="black" />
			<path d="M57.8266 13.7324V64.7871H67V13.7324H57.8266ZM65 62.7871H59.8266V15.7324H65V62.7871Z" fill="black" />
			<path d="M37.4609 7.19922L48.8493 8.5625L7.80175 40.835L9.03808 42.4072L50.0854 10.1348L48.7227 21.5234L50.7085 21.7617L52.4771 6.98242L37.6982 5.21289L37.4609 7.19922Z" fill="black" />
		</svg>
		<p>Growth</p>
	</div>
</template>

<script>
export default {
	name: 'GrowthButton',
	data() {
		return {
			label: 'Growth',
		}
	},
	components: {},
	computed: {
		isClicked() {
			return this.$store.state.team === this.label
		},
	},
	methods: {
		buttonClick() {
			if (this.isClicked) {
				this.$store.dispatch('changeTeam', '')
			} else {
				this.$store.dispatch('changeTeam', this.label)
			}
		},
	},
}
</script>

<style lang="scss" scoped></style>
