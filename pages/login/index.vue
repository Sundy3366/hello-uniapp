<template>
	<view class="loginBg">
		<view class="h30"></view>
		<view class="flex-center">
			<view @click="goHome()" class="flex-center">
				<image src="@/static/logo.png" class="wh-60"></image>
			</view>
		</view>
		<form class="loginBox" autocomplete="off" id="login-form" @submit="formSubmit">
			<view class="flexIcon">
				<view class="flexIcon-icon iconfont icon-phone_light"></view>
				<input type="text" placeholder-class="cl-white" class="flexIcon-text" name="a" autocomplete="off" v-model="telephone"
				 placeholder="请输入手机号码" />
			</view>
			<view class="flexIcon">
				<view class="flexIcon-icon iconfont icon-password"></view>
				<input type="password" placeholder-class="cl-white" class="flexIcon-text" name="b" autocomplete="off" v-model="password"
				 placeholder="请输入登录密码" />
			</view>
			<view></view>
			<button type="primary" formType="submit" class="btn-row-submit">登陆</button>
			<view class="flex mgb-20">
				<navigator class="cl-white pointer flex-1" url="../register/index">注册</navigator>
				<navigator class="cl-white pointer" url="../login/findpwd">忘记密码</navigator>
			</view>

			<!-- #ifdef MP-WEIXIN -->
			<view class="otherBox mgb-20">
				<view class="otherBox-line"></view>
				<view class="otherBox-text">其它方式登录</view>
			</view>
			<view class="flex flex-center">
				<button open-type="getUserInfo" @getuserinfo="wxLogin" class="btn-round bg-success icon-weixin"></button>
			</view>
			<!-- #endif -->

			<!-- #ifdef H5 -->
			<view class="otherBox mgb-20" v-if="isWeixin">
				<view class="otherBox-line"></view>
				<view class="otherBox-text">其它方式登录</view>
			</view>
			<view class="flex flex-center" v-if="isWeixin">
				<view @click="goWeixin()" class="btn-round bg-success icon-weixin"></view>
			</view>
			<!-- #endif -->
		</form>

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
		created: function() {},
		methods: {
			goHome: function() {
				this.app.goHome()
			}
		}
	}
</script>

<style>
	.otherBox {
		position: relative;
		height: 79.2upx;
	}

	.otherBox-line {
		width: 100%;
		height: 2.2upx;
		background-color: #d0d0d0;
		top: 39.6upx;
		position: absolute;
	}

	.otherBox-text {
		background-color: #50a8db;
		text-align: center;
		padding: 0upx 22upx;
		line-height: 79.2upx;
		position: absolute;
		width: 264upx;
		left: 50%;
		margin-left: -132upx;
		color: #fff;

	}

	.flexIcon {
		flex-direction: row;
		background-color: #2e85d8;
		margin-bottom: 44upx;
		border-radius: 44upx;
		padding: 22upx 22upx;
		align-items: center;
	}

	.flexIcon-icon {
		margin-right: 13.2upx;
		font-size: 39.6upx;
		color: #fff;
	}

	.flexIcon-text {
		color: #fff;
		border: 0;
		flex: 1;
		background: inherit;
		outline: 0;
		font-size: 35.2upx;
	}

	.loginBox {
		position: absolute;
		top: 50%;
		left: 22upx;
		right: 22upx;
		margin-top: -330upx;
		padding: 33upx 22upx;

		border-radius: 44upx;
	}

	.loginBg {
		background: linear-gradient(#29cee8, #619ad6);
		background-color: ;
		position: absolute;
		top: 0upx;
		bottom: 0upx;
		left: 0upx;
		right: 0upx;
	}
</style>
