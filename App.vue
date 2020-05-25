<script>
	export default {
		onLaunch: function() {
			console.log('App Launch');
		},
		onShow: function() {
			console.log('App Show');
		},
		onHide: function() {
			console.log('App Hide');
		},
	};
</script>
<style>
	@import "./common/iconfont.css";
	@import "./common/dt-ui-uni.css";
	
	.scale-swiper-box{
		position: relative;
		padding-bottom: 62.5%;
		height: 0;
		width: 100%;
	}
	.scale-swiper{
		position: absolute;
		width: 100%;
		height: 100% !important;
	}
	.scale-swiper-item{
		height: 100%;
	}
	.scale-swiper-img{
		width:100%;
	}
	.input-flex-btn{
		z-index: 2;
	}
	.header,.header-row{
			display: none;
	}
	 
	.fixedAdd{
		position: fixed;
		bottom: 200rpx;
		right: 7rpx;
		width: 92rpx;
		height: 92rpx;
		text-align: center;
		box-sizing: border-box;
		background-color: rgba(240,85,75,.82);
		color: #fff;
		font-family: iconfont;
		font-size: 32rpx;
		padding-top: 11rpx;
		border-radius: 22rpx;
		
	}
	.fixedAdd:before{
		content: "\e7e8";
		display: block;
		font-size: 32rpx;
	}
</style>
