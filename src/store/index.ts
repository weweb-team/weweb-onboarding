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
			localStorage.setItem('wwForm-team', team)
		},
		setProject(state, project: string) {
			state.project = project
			localStorage.setItem('wwForm-project', project)
		},
		setExternalData(state, externalData: string) {
			state.externalData = externalData
			localStorage.setItem('wwForm-externalData', externalData)
		},
		addExternalData(state, dataOrigin: string) {
			state.DataOrigin.push(dataOrigin)
			localStorage.setItem('wwForm-dataOrigin', JSON.stringify(state.DataOrigin))
		},
		removeExternalData(state, dataOrigin: string) {
			state.DataOrigin = state.DataOrigin.filter((item) => item !== dataOrigin)
			localStorage.setItem('wwForm-dataOrigin', JSON.stringify(state.DataOrigin))
		},
		externalDataFromLocalStorage(state, dataOrigins) {
			state.DataOrigin = dataOrigins
		},
		setFrontendComponents(state, frontendComponents) {
			state.frontendComponents = frontendComponents
			localStorage.setItem('wwForm-frontendComponents', frontendComponents)
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
		addExternalDataItem({ commit }, dataOrigin) {
			commit('addExternalData', dataOrigin)
		},
		removeExternalDataItem({ commit }, dataOrigin) {
			commit('removeExternalData', dataOrigin)
		},
		externalDataFromLocalStorage({ commit }, dataOrigins) {
			commit('externalDataFromLocalStorage', dataOrigins)
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
