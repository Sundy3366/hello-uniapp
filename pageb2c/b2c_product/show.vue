<template>
	<view>
		<view>
			<video class="video" objectFit="contain" v-if="pageData.data.videourl!=''" :src="pageData.data.videourl"></video>
			<view v-else-if="pageData.imgsdata" style="padding-bottom: 100%;" class="scale-swiper-box">
				<swiper class="scale-swiper" :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000">
					<swiper-item class="scale-swiper-item" v-for="(item,key) in pageData.imgsdata" :key="key">

						<image class="scale-swiper-img" @click="showImg" :src="item" mode="widthFix"></image>

					</swiper-item>

				</swiper>
			</view>
			<view v-else-if="pageData.data.imgurl">
				<image class="d-img" mode="widthFix" :src="pageData.data.imgurl+'.middle.jpg'"></image>
			</view>

			<view class="row-box mgb-5">
				<view class="d-title bd-mp-10">{{pageData.data.title}}</view>
				<view class="flex mgb-5 flex-ai-center">
					<view class="cl-money mgr-10 f18">￥{{pageData.data.price}}</view>
					<view class="market-price f12">￥{{pageData.data.market_price}}</view>
				</view>
				<view class="flex">
					<view class="flex-1 cl3 f12">销量: {{pageData.data.buy_num}}</view>
					<view class="flex-1 cl3 f12">库存: {{pageData.data.total_num}}</view>
					<view class="flex-1 cl3 f12">人气: {{pageData.data.view_num}}</view>
				</view>
			</view>
		
			<view v-if="pageData.order" class=""></view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				pageData: {}
			}
		},
		onLoad: function(ops) {
			if (ops.orderid != undefined) {
				this.orderid = ops.orderid;
			}
			this.getPage(ops.id);
		},
		methods: {
			getPage: function(id) {
				this.app.get({
					url: this.app.apiHost + "/module.php?m=b2c_product&a=show&ajax=1&id=" + id,
					data: {orderid: id},
					success: res => {
						this.pageData = res.data;
					}
				})
			}
		}
	}
</script>


<style>
	.video {
		width: 100%;
	}

	.fav-active,
	.fav-active:before {
		color: #e48681 !important;
	}

	.ppBox {
		position: fixed;
		left: 0;
		right: 0;
		bottom: 0;
		padding: 10px;
		background-color: #fff;
		border-top-left-radius: 10px;
		border-top-right-radius: 10px;
		z-index: 999;
	}

	.ppBox-close {
		position: absolute;
		right: 0px;
		top: 0px;
		padding: 10px;
		cursor: pointer;
	}

	.h240 {
		height: 500rpx;
	}

	.wh-80 {
		width: 80px;
		height: 80px;
	}

	.pdl0 {
		padding-left: 0;
	}

	.ani-bottom {
		animation: aniBottom 500ms;
	}

	@-webkit-keyframes aniBottom {
		from {
			bottom: -100%;
		}

		to {
			bottom: 0;
		}
	}

	.ani-top {
		animation: aniTop 500ms;
	}

	@-webkit-keyframes aniTop {
		from {
			bottom: 0;
		}

		to {
			bottom: -600px;
		}
	}

	.flcart {
		display: flex;
		flex-direction: row;
		position: fixed;
		left: 0rpx;
		right: 0rpx;
		bottom: 0rpx;
		font-size: 14px;
		line-height: 1.2;
		border-top: 1rpx solid #eee;
		background-color: #fff;
		text-align: center;
	}

	.flcart-icon:before {
		padding-top: 10rpx;
		clear: both;
		display: block;
		font-size: 14px;
		line-height: 1.2;
	}

	.flcart-f1,
	.flcart-f2 {
		height: 100rpx;
	}

	.flcart-f1 {
		width: 132rpx;
		display: inline-block;

		line-height: 1.2;
		font-size: 14px;
	}

	.flcart-f2 {
		flex: 1;
		line-height: 100rpx;
		background-color: #f90;
		color: #fff;
		font-size: 12px;
	}

	.pdList-item {
		display: flex;
		flex-direction: row;
		align-items: center;
		margin-bottom: 5px;
	}

	.pdList-img {
		width: 30px;
		height: 30px;
		margin-right: 5px;
		border-radius: 50%;
	}

	.pdList-nick {
		flex: 1;

	}

	.bt-a,
	.bt-b {
		flex: 1;
		padding: 5px;

	}

	.bt-a-f {
		color: #fff;
		font-size: 12px;
		line-height: 1.5;
	}

	.bt-a {
		background-color: #f4aba7;
	}

	.bt-b {
		background-color: #e02e24;
	}
</style>
