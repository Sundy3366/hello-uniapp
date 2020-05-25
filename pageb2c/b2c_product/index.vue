<template>
	<view>
		<!-- <view v-if="catList" class="tabs-border">
			<view v-for="(item,index) in catList">
				{{item.title}}
			</view>
		</view>
		 <view class="emptyData" v-if="Object.keys(list).length==0">暂无产品上架</view>-->
		<!-- 商品列表-->
		<goods-list :list="pageData.list"></goods-list>
	</view>
</template>

<script>
	import goodsList from '../../pageb2c/list.vue'
	let isFirst = true;
	let per_page = 0
	export default {
		components: {
			goodsList
		},
		data() {
			return {
				pageData: {},
				catList: [],
			}
		},
		onLoad: function(ops) {
			this.catid = ops.catid
			this.check = ops.check
			this.type = ops.type
			this.getPage()
		},
		onReachBottom: function() {
			this.getPage()
		},
		methods: {
			getPage: function() {
				if (per_page == 0 && !isFirst) return false;
				let obj = {}
				if (this.check === '1') {
					obj.type = this.type
				} else {
					obj.gkey = this.type
				}
				this.app.get({
					url: this.app.apiHost +
						`/module.php?m=${this.check === '0'? "b2c_group_product" : "b2c_product"}&a=list&ajax=1&catid=` + this.catid,
					data: obj,
					success: res => {
						per_page = res.data.per_page;
						if (!isFirst) {
							var list = this.pageData.list;
							if (res.data.list.length > 0) {
								list = this.app.json_add(list, res.data.list);
								res.data.list = list;
							}

						} else {
							this.pageData.list = res.data.list;
						}
						this.pageData = res.data;
						// uni.setNavigationBarTitle({
						uni.setNavigationBarTitle({
							title: this.check ==='0' ? res.data.group.title: (res.data.cat &&res.data.cat.title || '热门推荐')
						})
					}
				})
			}
		}
	}
</script>

<style>

</style>
