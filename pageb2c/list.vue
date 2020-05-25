<template>
	<view>
		<view class="mtlist">
			<view v-for="(item, key) in list" :key="key" class="mtlist-item" @click="goProduct(item.id)">
				<view class="mtlist-item-bd">
					<image mode="widthFix" class="mtlist-img " :src="item.imgurl+'.small.jpg'"></image>
					<view class="mtlist-item-pd">
						<view class="mtlist-item-money">
							<view class="mtlist-item-money-flex">￥
								<text class="mtlist-item-money_money">{{item.price}}</text>
							</view>
							<view class="mtlist-item-money_num">月销{{item.buy_num}}件</view>
						</view>
						<view class="mtlist-title">{{item.title}}</view>
						<view class="mtlist-desc">{{item.description}}</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props: ["list"],

		onLoad: function() {},
		methods: {
			goProduct: function(id) {
				uni.navigateTo({
					url: "../../pageb2c/b2c_product/show?id=" + id
				})
			},
		}
	}
</script>

<style>

</style>
