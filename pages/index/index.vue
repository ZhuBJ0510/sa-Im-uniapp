<template>
	<view>
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
			
		},
		onShow(){
			this.list = this.$index.state.list;
		}
	}
</script>

<style>

</style>
