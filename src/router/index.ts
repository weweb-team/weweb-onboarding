import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Team from '../views/Team.vue'

const routes: Array<RouteRecordRaw> = [
	{
		path: '/',
		name: 'Team',
		component: Team,
	},
	{
		path: '/project',
		name: 'Project',
		// route level code-splitting
		// this generates a separate chunk (about.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: () => import(/* webpackChunkName: "Project" */ '../views/Project.vue'),
	},
	{
		path: '/external-data',
		name: 'ExternalData',
		component: () => import('../views/ExternalData.vue'),
	},
	{
		path: '/data-origins',
		name: 'DataOrigins',
		component: () => import('../views/DataOrigins.vue'),
	},
	{
		path: '/frontend-components',
		name: 'FrontendComponents',
		component: () => import('../views/FrontendComponents.vue'),
	},
	{
		path: '/letsgo',
		name: 'Letsgo',
		component: () => import('../views/Letsgo.vue'),
	},
]

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes,
})

export default router
