import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const index = new Vuex.Store({
	state: {
		list:[
				{
						iconPath: "home",
						selectedIconPath: "home-fill",
						text: '首页',
						// count: 2,
						isDot: true,
						customIcon: false,
						pagePath:"/pages/index/index"
					},
					{
						iconPath: "more-circle",
						selectedIconPath: "more-circle",
						text: '消息',
						midButton: true,
						customIcon: false,
						pagePath:"/pages/message/message"
					},
					{
						iconPath: "account",
						selectedIconPath: "account-fill",
						text: '我的',
						count: 0,
						isDot: false,
						customIcon: false,
						pagePath:"/pages/user/user"
					}
			]
	}
})
export default index