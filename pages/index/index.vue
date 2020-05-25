<template>
	<view class="container">
		<view v-if="!pageLoad">
			<page-loading></page-loading>
		</view>
		<view v-else>
			<!-- 搜索框 -->
			<view class="pd-5">
				<view class="flex">
					<image :src="pageData.site.logo" mode="widthFix" class="wh-30 mgr-5"></image>
					<input type="search" v-model="keyword" class="header-search pdl-5" />
					<view @click="search" class="header-search-btn iconfont icon-search"></view>
				</view>
			</view>
			<!-- 轮播图 -->
			<view class="scale-swiper-box">
				<swiper class="scale-swiper" :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000">
					<swiper-item v-for="(item,key) in pageData.flashList" :key="key">
						<view class="swiper-item">
							<image @click="gourl(item.link1)" :src="item.imgurl" style="width:100%" mode="widthFix"></image>
						</view>
					</swiper-item>

				</swiper>
			</view>

			<!-- 导航 -->
			<view class="m-navPic mgt-5 mgb-5">
				<navigator v-for="(item,key) in pageData.navList" :url="item.link1" :key="key" class="m-navPic-item">
					<image class="m-navPic-img" mode="widthFix" :src="item.imgurl" />
					<view class="m-navPic-title">{{item.title}}</view>
				</navigator>
			</view>

			<!-- 商品列表 -->
			<view v-for="(itm, idx) in Object.keys(showList)">
				<div class="row-box-hd  pdl-10" @click="goUrl(`../../pageb2c/b2c_product/index?type=${showList[itm].type}&check=${showList[itm].check}`)">
					<div class="iconfont mgr-10 cl-f30 f22 " :class="showList[itm].icon"></div>
					<div class="flex-1 ">
						<div class="f14">{{showList[itm].name}}</div>
						<div class="cl3 f12">{{showList[itm].description}}</div>
					</div>
					<div class="row-box-more"></div>
				</div>
				<!-- 商品列表-->
				<goods-list :list="pageData[itm]"></goods-list>
			</view>
		</view>
	</view>

</template>

<script>
	import goodsList from '../../pageb2c/list.vue'
	let cacheKey = "index_index";
	export default {
		components: {
			goodsList
		},
		data() {
			return {
				pageData: {},
				pageLoad: false,
				keyword: "",
				showList: {
					'bmList': {
						'icon': 'icon-likefill ',
						'name': '必买好货',
						'description': '大家都会心动的产品',
						'type': 'bimai',
						'check': '0'
					},
					'recList': {
						'icon': 'icon-moneybag',
						'name': '猜你喜欢',
						'description': 'Guess You Like It',
						'type': 'recommend',
						'check': '1'
					},
					'hotList': {
						'icon': 'icon-hot_light',
						'name': '热销商品',
						'description': 'Hot Goods',
						'type': 'hot',
						'check': '1'

					}
				}

			}
		},
		onLoad: function() {
			// if (!this.getCache()) {
			uni.showNavigationBarLoading();
			this.getPage();
			// }
		},

		onReachBottom: function() {
			console.log('reachBottom')
		},
		onPullDownRefresh: function() {
			this.refresh()
		},

		methods: {
			getCache: function() {
				let val = uni.getStorageSync(cacheKey)
				if (!val) return false;
				let time = Date.parse(new Date()) / 1000;
				if (val.expire < time) {
					return false
				}
				let v = JSON.parse(val);
				this.pageLoad = v.pageLoad;
				this.pageData = v.pageData;
				this.keyword = v.keyword;
				return true
			},
			setCache: function() {
				let val = {
					pageLoad: this.pageData,
					pageData: this.pageData,
					keyword: this.keyword,
					expire: Date.parse(new Date()) / 1000 + 300
				}
				uni.setStorageSync(cacheKey, JSON.stringify(val))
			},
			goUrl: function(url) {
				uni.navigateTo({
					url
				})
			},
			search: function() {
				uni.navigateTo({
					url: "../../pageb2c/b2c_search/index?keyword=" + this.keyword
				})
			},
			getPage: function() {
				let that = this;
				that.app.get({
					url: this.app.apiHost + "/module.php?m=b2c&ajax=1",
					success: (res) => {
						that.pageData = res.data;
						that.pageLoad = true;
						uni.hideNavigationBarLoading();
						that.setCache()
					}
				})
			},
			refresh: function() {
				this.getPage();
				setTimeout(function() {
					uni.stopPullDownRefresh();
				}, 1000)
			},
		}
	}
</script>


<style>
	swiper {
		height: 440upx;
	}

	.mtt10 {
		margin-top: -22upx;
	}
</style>
