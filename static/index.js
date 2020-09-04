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
						iconPath: "http://www.cx521.cn/icon/message.png",
						selectedIconPath: "http://www.cx521.cn/icon/message-fill.png",
						text: '消息',
						midButton: true,
						customIcon: true,
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