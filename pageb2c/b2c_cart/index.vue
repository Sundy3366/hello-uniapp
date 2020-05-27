<template>
	<view>
		<view class="main-body" id="app">
			<view v-if="unLogin">
				<div class="emptyData">您还未登录</div>
				<div class="flex flex-center">
					<div @click="gourl('../../pages/login/index')" class="btn">去登录</div>
				</div>
			</view>
			<view v-if="pageLoad">
				<view v-if="!pageData.cartList" class="emptyData">购物车，暂无商品</view>
				<view v-else>
					<view class="flexlist">

					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				pageData: {},
				pageLoad: false,
				unLogin: true
			}
		},
		created: function() {
			this.getPage();
		},
		methods: {
			getPage: function() {
				uni.request({
					url: this.app.apiHost + "/module.php?m=b2c_cart&ajax=1",
					data: {
						authcode: this.app.getAuthCode()
					},
					dataType: "json",
					success: rs => {
						let res = rs.data
						if (res.error) {
							return false
						}
						this.unLogin = false;
						this.pageLoad = true;
						this.pageData = res.data;
					}
				})
			},
			gourl: function(url) {
				uni.navigateTo({
					url: url
				})
			},
		}
	}
</script>

<style>

</style>
