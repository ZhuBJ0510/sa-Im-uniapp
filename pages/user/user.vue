<template>
	<view>
		<view class="top">
			
		</view>
		<view>
			<u-grid :col="3">
				<u-grid-item>
					<u-icon name="photo" :size="46"></u-icon>
					<view class="grid-text">图片</view>
				</u-grid-item>
				<u-grid-item>
					<u-icon name="lock" :size="46"></u-icon>
					<view class="grid-text">锁头</view>
				</u-grid-item>
				<u-grid-item>
					<u-icon name="hourglass" :size="46"></u-icon>
					<view class="grid-text">沙漏</view>
				</u-grid-item>
				<u-grid-item>
					<u-icon name="photo" :size="46"></u-icon>
					<view class="grid-text">图片</view>
				</u-grid-item>
				<u-grid-item>
					<u-icon name="lock" :size="46"></u-icon>
					<view class="grid-text">锁头</view>
				</u-grid-item>
				<u-grid-item>
					<u-icon name="hourglass" :size="46"></u-icon>
					<view class="grid-text">沙漏</view>
				</u-grid-item>
				<u-grid-item>
					<u-icon name="photo" :size="46"></u-icon>
					<view class="grid-text">图片</view>
				</u-grid-item>
				<u-grid-item @click="quit">
					<u-icon name="lock" :size="46"></u-icon>
					<view class="grid-text">退出</view>
				</u-grid-item>
				<u-grid-item @click="service">
					<u-badge :count="list[2].count" :offset="[20, 20]"></u-badge>
					<u-icon name="server-man" :size="46"></u-icon>
					<view class="grid-text">客服聊天</view>
				</u-grid-item>
			</u-grid>
		</view>
		<u-tabbar v-model="current" :list="list" :mid-button="true"></u-tabbar>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				list:[],
				current: 0
			}
		},
		onLoad() {
			
		},
		methods: {
			// 客服
			service(){
				uni.navigateTo({
					url:"/pages/user/service/chat"
				})
			},
			quit(){
				uni.removeStorageSync("user")
				uni.navigateTo({
					url:"/pages/login/login"
				})
			}
			
		},
		onShow(){
			this.list = this.$index.state.list;
		}
	}
</script>

<style>
	.top{
		height: 300rpx;
	}
</style>
