<template>
	<div id="app">
		<WewebLogo></WewebLogo>
		<div class="container">
			<router-view v-slot="{ Component }">
				<transition :name="transitionDirection" mode="out-in">
					<component :setTransitionDirection="setTransitionDirection" :is="Component"></component>
				</transition>
			</router-view>
		</div>
	</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import WewebLogo from './components/WewebLogo.vue'

export default defineComponent({
	name: 'App',
	data() {
		return {
			transitionDirection: 'right',
		}
	},
	components: { WewebLogo },
	methods: {
		setTransitionDirection(direction: string) {
			this.transitionDirection = direction
		},
	},
	beforeRouteLeave() {
		console.log('test')
		// const answer = window.confirm('Do you really want to leave? you have unsaved changes!')
	},
	beforeMount() {
		if (localStorage.getItem('wwForm-team')) {
			this.$store.dispatch('changeTeam', localStorage.getItem('wwForm-team'))
		}
		if (localStorage.getItem('wwForm-project')) {
			this.$store.dispatch('changeProject', localStorage.getItem('wwForm-project'))
		}
		if (localStorage.getItem('wwForm-externalData')) {
			this.$store.dispatch('changeExternalData', localStorage.getItem('wwForm-externalData'))
		}
		if (localStorage.getItem('wwForm-dataOrigin')) {
			const jsonData = localStorage.getItem('wwForm-dataOrigin')
			const originData = jsonData !== null ? JSON.parse(jsonData) : '[]'
			this.$store.dispatch('externalDataFromLocalStorage', originData)
		}
		if (localStorage.getItem('wwForm-frontendComponents')) {
			this.$store.dispatch('changeExternalComponents', localStorage.getItem('wwForm-frontendComponents'))
		}
	},
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

	.container {
		//position: absolute;
		transition: 0.3s;
	}

	.buttons-container {
		margin: auto;
		width: 70vw;
		max-width: 1000px;
		min-height: 478px;
		display: flex;
		flex-flow: row wrap;
		align-items: center;
		justify-content: center;
	}
	.buttons-container-small {
		width: 70%;
		max-width: 1500px;
		min-height: 478px;

		display: flex;
		flex-direction: column;
		justify-content: space-evenly;

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
		position: relative;
		//flex: 0 1 calc(3% - 54px);
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

			#tick {
				opacity: 1;
				transition: all 0.2s;

				path {
					fill: #1e2324;
					transition: all 0.2s;
				}
			}
		}

		svg {
			margin-left: 50%;
			transform: translateX(-50%);
		}

		#tick {
			opacity: 0;
			position: absolute;
			top: 12px;
			right: 12px;
		}

		p {
			font-weight: 500;
		}
	}

	.navigation-buttons {
		margin: 30px 0 0% 0;

		button {
			position: relative;
			outline: none;
			font-size: 16px;
			font-weight: 700;
			padding: 8px 32px;
			margin: 16px;
			border: none;
			border-radius: 8px;
			transition: 0.3s;

			&.next-button {
				color: #ffffff;
				background-color: #099af2;

				&:hover {
					cursor: pointer;
					transition: 0.3s;
					padding-left: 22px;
					padding-right: 42px;

					.nextArrow {
						opacity: 1;
						transform: translateY(calc(-50% + 2px)) translateX(0px);
						transition: all 0.4s;
					}
				}
			}

			&.back-button {
				color: #6a7678;
				background-color: #eceeef;

				&:hover {
					cursor: pointer;
					transition: 0.3s;
					padding-left: 42px;
					padding-right: 22px;

					.returnArrow {
						opacity: 1;
						transform: translateY(calc(-50% + 1px)) translateX(0px);
						transition: all 0.4s;
					}
				}
			}

			.nextArrow {
				opacity: 0;
				width: 16px;
				height: 16px;

				position: absolute;
				top: 50%;
				right: 18px;
				transform: translateY(calc(-50% + 2px)) translateX(-10px);
				transition: all 0.2s;

				path {
					fill: white;
				}
			}

			.returnArrow {
				opacity: 0;
				width: 16px;
				height: 16px;

				position: absolute;
				top: 50%;
				left: 18px;
				transform: translateY(calc(-50% + 1px)) translateX(10px);
				transition: all 0.2s;

				path {
					fill: #6a7678;
				}
			}
		}
	}
}
.right-enter-active {
	transition: all 0.5s ease;
}
.right-leave-active {
	transition: all 0.5s ease;
}

.right-enter-from,
.right-leave-to {
	transform: translateX(20px);
	opacity: 0;
}

.left-enter-active {
	transition: all 0.5s ease;
}
.left-leave-active {
	transition: all 0.5s ease;
}

.left-enter-from,
.left-leave-to {
	transform: translateX(-20px);
	opacity: 0;
}
</style>
