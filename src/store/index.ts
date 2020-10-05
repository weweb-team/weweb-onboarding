import { createStore } from 'vuex'

export const store = createStore({
	state: {
		user: {},
		team: '',
		project: '',
		externalData: '',
		DataOrigin: [] as string[],
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
			state.DataOrigin.push(dataOrigin)
		},
		removeExternalData(state, dataOrigin: string) {
			state.DataOrigin = state.DataOrigin.filter((item) => item !== dataOrigin)
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
		changeExternalComponents({ commit }, externalComponents) {
			commit('setFrontendComponents', externalComponents)
		},
	},
	getters: {
		responses(state) {
			return {
				user: state.user,
				team: state.team,
				project: state.project,
				externalData: state.externalData,
				DataOrigin: state.DataOrigin,
				frontendComponents: state.frontendComponents,
			}
		},
	},
	modules: {},
})
