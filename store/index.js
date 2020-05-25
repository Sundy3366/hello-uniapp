import Vue from 'vue'
import Vuex from 'vuex'
import api from '@/api'
import addresses from '@/api/addresses'

Vue.use(vuex)

const store = new Vuex.Store({
	state:{
		store: {},
		cart: [],
		orderType: 'takein',
		address: {},
		addresses: addresses,
		member: {},
		order: {}
	},
	getters:{
		isLogin: state => Object.keys(state.member).length > 0 //是否登录
	},
	mutations:{
		SET_ORDER_TYPE(state, type) {
			state.orderType = type
		}
	},
	actions:{
		async getStore({commit}){
			const store = await api('store')
			commit('SET_STORE',store)
		}
	}
})