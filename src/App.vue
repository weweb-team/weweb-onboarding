<template>
	<div id="app">
		<div class="page-container">
			<WewebLogo></WewebLogo>
			<transition name="fade">
				<router-view></router-view>
			</transition>
		</div>
	</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import WewebLogo from './components/WewebLogo.vue'

export default defineComponent({
	name: 'App',
	components: { WewebLogo },
})
</script>

<style lang="scss">
body {
	background-color: #f5f5f5;
}

#app {
	font-family: 'Work Sans', sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #1e2324;

	width: 100vw;
	height: 95vh;
	display: flex;
	align-items: center;
	justify-content: center;

	overflow: hidden;

	#weweb-logo {
		position: absolute;
		top: 16px;
		left: 16px;
		height: 50px;
	}

	h2 {
		margin: 0% 0 30px 0;
	}

	.buttons-container {
		margin: auto;
		width: 70%;
		max-width: 1500px;
		min-height: 478px;
		display: flex;
		flex-flow: row wrap;
		justify-content: space-around;
	}
	.buttons-container-small {
		width: 70%;
		max-width: 1500px;
		min-height: 478px;

		display: flex;
		flex-direction: column;
		justify-content: space-around;

		.button-container.small {
			width: 406px;
			height: 38px;
			margin: 8px auto;
			text-align: left;
			padding-left: 30px;

			&:hover {
				cursor: pointer;
				background-color: #f4fbff;
				border: 1px solid transparent;
				color: #077ac0;
				transition: all 0.2s;
			}

			&.active {
				cursor: pointer;
				background-color: #f4fbff;
				border: 1px solid transparent;
				color: #077ac0;
				box-shadow: 0px 1px 2px rgba(30, 35, 36, 0.16);
				transform: translateY(1px);
				transition: all 0.2s;

				path {
					fill: #077ac0;
					transition: all 0.2s;
				}
			}
		}
	}
	.button-container {
		margin: 30px;
		width: 206px;
		height: 177px;
		border: 1px solid #eeeeee;
		background-color: #ffffff;
		border-radius: 3px;
		box-shadow: 0px 4px 4px rgba(30, 35, 36, 0.16);

		display: flex;
		flex-direction: column;
		justify-content: center;
		transition: all 0.2s;

		&:hover {
			cursor: pointer;
			background-color: #f4fbff;
			border: 1px solid #077ac0;
			color: #077ac0;
			transition: all 0.2s;

			path {
				fill: #077ac0;
				transition: all 0.2s;
			}
		}

		&.active {
			cursor: pointer;
			background-color: #f4fbff;
			border: 1px solid #077ac0;
			color: #077ac0;
			box-shadow: 0px 1px 2px rgba(30, 35, 36, 0.16);
			transform: translateY(1px);
			transition: all 0.2s;

			path {
				fill: #077ac0;
				transition: all 0.2s;
			}
		}

		svg {
			margin-left: 50%;
			transform: translateX(-50%);
		}

		p {
			font-weight: 500;
		}
	}

	.navigation-buttons {
		margin: 30px 0 0% 0;

		button {
			outline: none;
			font-size: 16px;
			font-weight: 700;
			padding: 8px 32px;
			margin: 16px;
			border: none;
			border-radius: 8px;
			transition: 0.2s;

			&:hover {
				cursor: pointer;
				transition: 0.2s;
			}

			&.next-button {
				color: #ffffff;
				background-color: #099af2;
			}

			&.back-button {
				color: #6a7678;
				background-color: #eceeef;
			}
		}
	}
}

.fade-enter-active,
.fade-leave-active {
	transition-property: opacity;
	transition-duration: 0.25s;
}

.fade-enter-active {
	transition-delay: 0.25s;
}

.fade-enter,
.fade-leave-active {
	opacity: 0;
}
</style>
