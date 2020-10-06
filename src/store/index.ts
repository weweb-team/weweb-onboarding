import { createStore } from 'vuex'

export const store = createStore({
	state: {
		user: {},
		team: '',
		project: '',
		externalData: '',
		dataOrigin: [] as string[],
		frontendComponents: '',
		displayWarning: false,
	},
	mutations: {
		setTeam(state, team: string) {
			state.team = team
			sessionStorage.setItem('wwForm-team', team)
		},
		setProject(state, project: string) {
			state.project = project
			sessionStorage.setItem('wwForm-project', project)
		},
		setExternalData(state, externalData: string) {
			state.externalData = externalData
			sessionStorage.setItem('wwForm-externalData', externalData)
		},
		addExternalData(state, dataOrigin: string) {
			state.dataOrigin.push(dataOrigin)
			sessionStorage.setItem('wwForm-dataOrigin', JSON.stringify(state.dataOrigin))
		},
		removeExternalData(state, dataOrigin: string) {
			state.dataOrigin = state.dataOrigin.filter((item) => item !== dataOrigin)
			sessionStorage.setItem('wwForm-dataOrigin', JSON.stringify(state.dataOrigin))
		},
		externalDataFromsessionStorage(state, dataOrigins) {
			state.dataOrigin = dataOrigins
		},
		setFrontendComponents(state, frontendComponents) {
			state.frontendComponents = frontendComponents
			sessionStorage.setItem('wwForm-frontendComponents', frontendComponents)
		},
		changeDisplayWarning(state, displayWarning) {
			state.displayWarning = displayWarning
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
		externalDataFromsessionStorage({ commit }, dataOrigins) {
			commit('externalDataFromsessionStorage', dataOrigins)
		},
		changeExternalComponents({ commit }, externalComponents) {
			commit('setFrontendComponents', externalComponents)
		},
		displayWarning({ commit }, isDisplayed) {
			commit('changeDisplayWarning', isDisplayed)
		},
	},
	getters: {
		responses(state) {
			return {
				user: state.user,
				team: state.team,
				project: state.project,
				externalData: state.externalData,
				dataOrigin: state.dataOrigin,
				frontendComponents: state.frontendComponents,
			}
		},
	},
	modules: {},
})
