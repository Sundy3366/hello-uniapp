<template>
	<view class="regBg">
		<view class="regBox" v-if="pageLoad">
			<form @submit="formSubmit">
				<view class="input-flex">
					<view class="input-flex-label">手机</view>
					<input class="input-flex-text" name="telephone" v-model="telephone" type="text" placeholder="请填手机号码">
				</view>

				<view class="input-flex">
					<view class="input-flex-label">验证码</view>
					<input type="text" class="input-flex-text" name="yzm" v-model="yzm">
					<view class="input-flex-btn" v-bind:class="yzmClass" @click="getYzm()">{{yzmStatus}}</view>
				</view>

				<view class="input-flex">
					<view class="input-flex-label">昵称</view>
					<input class="input-flex-text" name="nickname" type="text" placeholder="请填写昵称">
				</view>

				<view class="input-flex">
					<view class="input-flex-label">密码</view>
					<input class="input-flex-text" name="password" type="text" password=true placeholder="请填写密码">
				</view>



				<button type="primary" form-type="submit" class="btn-row-submit btn-success">立即注册</button>

			</form>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				pageLoad: false,
				yzmStatus: "获取验证码",
				telephone:''
			}
		},
		onLoad: function(option) {
			this.pageLoad = true;
		},
		methods: {
			getYzm: function() {
				if (!yzmEnable) return false;
				let that = this;
				uni.request({
					url: that.app.apiHost + "?m=register&a=SendSms&ajax=1",
					data: {
						telephone: this.telephone,
						fromapp: that.app.fromapp()
					},
					success: function(res) {
						uni.showToast({
							title: res.data.message,
						})
						if (!res.error) {
							that.downTimer();
						}

					}
				})
			}
		}
	}
</script>

<style>
	.yzmDisable {
		background-color: #eee;
		color: #999;
	}

	.regBox {
		position: absolute;
		top: 50%;
		left: 30upx;
		right: 30upx;
		margin-top: -390upx;
		padding: 30upx 20upx;
		background-color: #fff;
		border-radius: 20upx;
	}

	.regBg {
		background: linear-gradient(#29cee8, #619ad6);
		position: absolute;
		top: 0upx;
		bottom: 0upx;
		left: 0upx;
		right: 0upx;
	}
</style>
