import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const store=new Vuex.Store({
		state:{
			SocketState:{},
			SocketStateErr:{},
		},
		mutations:{
			setSocketState(that,info){
				that.SocketState=info
			},
			setSocketStateErr(that,info){
				that.SocketStateErr=info;
			}
		}
})

// function setdate(){
// 	var open;
// 	console.log(Vue.prototype.$Socket)
// 	Vue.prototype.$Socket.eventPatch.onOpen((msg,sk)=>{        //监听是否连接成功
// 		console.log("aaa")
// 	    open = true;
// 	});
// 	Vue.prototype.$Socket.eventPatch.onClose((err,sk)=>{    //监听是否关闭连接
// 	    open = false;
// 		console.log("bbb")
// 	});
// 	console.log(open)
// 	if(open){
// 		Vue.prototype.$Socket.nsend('{"type":"setdate"}');
// 	}
// }
var open;
function setdate(){
	if(Vue.prototype.$Socket.isconnect){
		Vue.prototype.$Socket.nsend('{"type":"setdate"}')
	}else{
		clearInterval(open)
	}
}
open = setInterval(function(){
	setdate()
},3000);
export default store;