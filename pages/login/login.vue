<template>
	<view>
		<u-input v-model="user.id" type="number" placeholder="请输入账号" :border="true"/>
		<u-button @click="login">登录</u-button>
	</view>
</template>

<script>
	import Vue from 'vue'
	//引入socket.js 重要
	import socket from "../../websocket/socket.js"; 
	export default {
		data() {
			return {
				user:{
					id:'',
				},
				unread:{
					type:"unread"
				}
			}
		},
		onLoad() {
			this.without();
		},
		methods: {
			login(){
				uni.setStorageSync("user",this.user);
				this.websocket();
			},
			// 自动登录
			without(){
				if(uni.getStorageSync("user") != ''){
					this.websocket();
				}
			},
			// websocket
			websocket(){
				this.user = uni.getStorageSync("user");
				const Socket = new socket({
				    url: 'ws://127.0.0.1:8444/websocket/'+this.user.id+'/2',
				})
				Vue.prototype.$Socket = Socket;
				this.websock();
				uni.switchTab({
					url:"/pages/index/index",
				})
			},
			// 回调
			websock(){
				this.$Socket.nsend(JSON.stringify(this.unread))
				this.$Socket.eventPatch.onMsg((msg,sk)=>{    //监听是否接受消息
					
					msg = JSON.parse(msg.data)
					if(msg.type == 'unread'){
						this.$index.state.list[2].count = msg.unread;
					}
					
					if(msg.type == 'receiveText'){
						this.$index.state.list[2].count = msg.unread;
					}
				})
			}
			
		}
	}
</script>

<style>

</style>
