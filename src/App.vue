<template>
	<div id="app">
		<div class="page-container">
			<router-view />
		</div>
	</div>
</template>

<script>
export default {
	name: 'App',
	components: {},
}
</script>

<style lang="scss">
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;

	width: 100%;
	height: 95vh;
	display: flex;
	align-items: center;

	h2 {
		margin: 0% 0 3% 0;
	}

	.buttons-container {
		margin: auto;
		width: 70%;
		max-width: 1500px;

		display: flex;
		flex-flow: row wrap;
		justify-content: space-around;
	}
	.button-container {
		margin: 30px;
		width: 206px;
		height: 177px;
		border: 1px solid lightgray;
	}

	.navigation-buttons {
		margin: 3% 0 0% 0;
	}
}
</style>
