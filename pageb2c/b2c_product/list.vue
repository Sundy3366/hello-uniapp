<template>
	<view>
		<view v-if="catList" class="tabs-border">
			<view v-for="(item,index) in catList">
				{{item.title}}
			</view>
		</view>
		 <view class="emptyData" v-if="Object.keys(list).length==0">暂无产品上架</view>
		  <!-- 商品列表-->
		 <goods-list :list="list"></goods-list>
	</view>
</template>

<script>
	import goodsList from  '../../pageb2c/list.vue'
	export default {
		components:{
			goodsList
		},
		data() {
			return {
				catList: [],
				list: []
			}
		},
		onLoad: function(ops) {
			console.log(ops)
			this.catid = ops.catid
			this.getPage()
		},
		methods: {
			getPage: function() {
				this.app.get({
					url: this.app.apiHost + "/module.php?m=b2c_product&a=list&ajax=1&catid=" + this.catid,
					success: res =>{
						this.per_page = res.data.per_page;
						this.list = res.data.list;
						this.catList = res.data.catList;
						this.isFirst = false;
						this.pageLoad = true;
						if (this.pageCatid == 0) {
							this.pageCatid = res.data.cat.catid;
						}
						uni.setNavigationBarTitle({
							title: res.data.cat.title
						})
					}
				})
			}
		}
	}
</script>

<style>

</style>
