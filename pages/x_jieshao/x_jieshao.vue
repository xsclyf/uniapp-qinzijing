<template>
	<view>
		<image :src="neirong.x_fengmian"></image>
		<text>{{jieshou}}</text>
		<view>{{neirong.x_name}}</view>
		<view>{{neirong.jianjie}}</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				jieshou:null,
				neirong:[],
			};
		},
		onLoad(op){
			console.log(op.id)
			this.jieshou=op.id
			uni.request({
				url:'https://php.xsclyf.cn/x_xxi.php',
				data:{x_id:op.id,user:1},
				success: (res) => {
					console.log(res);
					this.neirong=res.data[0];
					//动态更新标题栏
					uni.setNavigationBarTitle({
						title:res.data[0].x_name,
						fail() {
							title:"详情"
						}
					})
				}
			})
		}
	}
</script>

<style>

</style>
