import { createStore } from 'vuex'

export const store = createStore({
	state: {
		user: {},
		team: '',
		project: '',
		externalData: '',
		dataOrigins: [] as string[],
		frontendComponents: '',
	},
	mutations: {
		setTeam(state, team: string) {
			state.team = team
		},
		setProject(state, project: string) {
			state.project = project
		},
		setExternalData(state, externalData: string) {
			state.externalData = externalData
		},
		addExternalData(state, dataOrigin: string) {
			state.dataOrigins.push(dataOrigin)
		},
		removeExternalData(state, dataOrigin: string) {
			state.dataOrigins = state.dataOrigins.filter((item) => item !== dataOrigin)
		},
		setFrontendComponents(state, frontendComponents) {
			state.frontendComponents = frontendComponents
		},
	},
	actions: {
		changeTeam({ commit }, team) {
			commit('setTeam', team)
		},
		changeProject({ commit }, project) {
			commit('setProject', project)
		},
		changeExternalData({ commit }, externalData) {
			commit('setExternalData', externalData)
		},
		addExternalDataItem({ commit }, externalData) {
			commit('addExternalData', externalData)
		},
		removeExternalDataItem({ commit }, externalData) {
			commit('removeExternalData', externalData)
		},
	},
	getters: {
		team(state) {
			return state.team
		},
		project(state) {
			return state.project
		},
		externalData(state) {
			return state.externalData
		},
		dataOrigins(state) {
			return state.dataOrigins
		},
		responses(state) {
			return {
				user: state.user,
				team: state.team,
				project: state.project,
				externalData: state.externalData,
				dataOrigins: state.dataOrigins,
				frontendComponents: state.frontendComponents,
			}
		},
	},
	modules: {},
})
