<template>
	<view>
		<view class="chat_head">
			客服
		</view>
		<view>
			<scroll-view scroll-y="true"   :scroll-with-animation="true" id="scroll-view" :scroll-into-view="cc" :scroll-top="top">
				<view v-for="(item,index) in list" class="receie" :id="'id'+index">
					<u-avatar :src="user.id != item.sid?fUser.img:user.img" mode="circle" :class="user.id != item.sid?'receie_img receie_left':'receie_img receie_right'"></u-avatar>
					<view :class="user.id != item.sid?'receie_text receie_left':'receie_text receie_right'" v-if="item.genre == 'text' " v-html="item.text">
					</view>
					<view class="receie_no"></view>
				</view>
			</scroll-view>
		</view>
		<view class="chat_send">
			<view class="chat_text">
				<view class="chat_grow">
						<textarea  v-model="senddata.text" maxlength="-1" focus="true" :auto-height="textarea" @input="textare"></textarea>
				</view>
				<view class="chat_but">
					<u-button type="primary" size="medium" @click="send">发送</u-button>
				</view>
			</view>
			<view class="chat_fun">
			</view>
		</view>
	</view>
</template>

<script>
	import { d } from "@/static/js/date.js"
	
	export default{
		data(){
			return{
				id:'',
				list:[],
				joindata:{
					type:'joinChat',
					pageNo:1,
					pageSize:10
				},
				senddata:{
					type:'sendText',
					text:'',
					genre:''
				},
				readdate:{
					type:'readChat',
					fId:''
				},
				fUser:{},
				user:{},
				textarea:true,
				cc:"",
				top:'',
				show:true
			};
		},
		methods:{
			// 发送消息
			send(){
				this.senddata.genre = 'text';
				this.$Socket.nsend(JSON.stringify(this.senddata));
				this.senddata.text = '';
				this.textarea = true
			},
			// websocket操作
			websocket(){
				this.$Socket.nsend(JSON.stringify(this.joindata));
				this.$Socket.eventPatch.onMsg((msg,sk)=>{    //监听是否接受消息
				    
					var msg = JSON.parse(msg.data);
					if(msg.type == 'joinChat'){
						this.list = msg.data.reverse()
						this.$nextTick(function(){
							this.top = 9999;
						})
					}
					
					if(msg.type == "sendText"){
						
						this.list.push(msg);
						this.$forceUpdate()
					}
					
					if(msg.type == "receiveText"&&msg.sid == this.id){
						this.list.push(msg);
						this.$forceUpdate()
						
						this.$Socket.nsend(JSON.stringify(this.readdate));
					}
					// console.log(this.list)
				});
			},
			// 时间处理
			date(date){
				return d(date)
			},
			textare(){
				if( this.senddata.text.length >= 90){
					this.textarea = false
				}else{
					this.textarea = true
				}
			}
		},
		onLoad(){	
						
			this.user = uni.getStorageSync("user")
			
			// 调用websocket
			this.websocket()
			
		},
		deactivated(){
			
		}
	}
</script>

<style lang="scss">
	page{
		background-color: #2B85E4;
	}
	/* 标题 */
	.chat_head{
		height: 80rpx;
		width: 100%;
		background-color: #DBF1E1;
		
		text-align: center;
		line-height: 80rpx;
		font-size: 50rpx;
	}
	.chat_send{
		background-color: #F8F8F8;
		width: 100%;
		position: fixed;
		bottom: 0;
	}
	.chat_grow{
		margin-top: 10rpx;
		margin-left: 20rpx;
		float: left;
		background-color: #fff;
		width: 60%;
		border-radius:20rpx;
		max-height: 320rpx;
		textarea{
			width: 100%;
			height: 100%;
			font-size: 35rpx;
		}
	}
	.chat_but{
		float: right;
		margin-right: 25rpx;
	}
	.chat_text:after{
		  content: "";
		  display: table;
		  clear: both;
	}
	.chat_fun{
		height: 60rpx;
		width: 100%;
		background-color: #000000;
	}
	
	#scroll-view{
		background-color: #18B566;
		/* height: 1150rpx; */
		height: 84vh;
	}
	.receie{
		margin-top: 30rpx;
		margin-bottom: 30rpx;
	}
	.receie_no{
		clear: both;
	}
	
	.receie_text{
		position:relative;
		width: 400rpx;
		background-color: #A0CFFF;
		padding: 20rpx;
		border-radius: 25rpx;
		word-wrap: break-word;
		min-height: 42rpx;
	}
	.receie_left{
		float: left;
		margin-left: 20rpx;
		
	}
	.receie_right{
		float: right;
		margin-right: 20rpx;
		
	}
	

</style>
