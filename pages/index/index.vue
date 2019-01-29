<template>
	<view class="content">
		<view @click="xiangqing(item.x_id)" class="zhuti" style="padding: 10upx;" v-for="item in x_list" :key="item">
			<view class="zuo"><image class="logo" mode="aspectFit" :src="item.x_fengmian"></image></view>
			<view class="you">
				<view><text class="title">{{item.x_name}}</text></view>
				<view><text class="txt">{{item.jianjie}}</text></view>
				<view style="display:flex;">
					<view style="font-size: 30upx; text-align: center;width: 50%;flex:none;">作者：{{item.zuozhe}}</view>
					<view style="font-size: 30upx;text-align: center;width: 50%;flex:1; ">{{item.zishu}}字</view>
				</view>
			</view>
		</view>
		<view>标题：{{titles}}</view>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				titles: 'Hello',
				imgs:'http://k2.jsqq.net/uploads/allimg/1708/17_170810151539_1.jpg',
				x_list:[],
			}
		},
		onLoad() {
			uni.request({
				url:"https://php.xsclyf.cn/x_list.php",
				success: res =>{
					this.x_list = res.data;
					console.log("请求成功");
				},
			})
		},
		methods: {
			xiangqing:function(x_id){
				console.log("点击了小说"+x_id);
				uni.navigateTo({
					url:'../x_jieshao/x_jieshao?id='+x_id,
				})
			}
		}
	}
</script>

<style>
	.content {
		padding: 10upx 10upx 10upx 10upx;
	}
    .logo{
        height: 100%;
        width: 100%;
    }
	.zhuti{
        height: 300upx;
        display:flex;         /*flex布局*/
    }
    .zuo{
        width:250upx;
        height:100%;
        flex:none;
    }
	.you{
        height:100%;
        flex:1;        /*flex布局*/
    }
	.txt{
		display: -webkit-box;
		font-size: 30upx;
		line-height: 40upx;
		word-break: break-all;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 4;
		overflow: hidden;
		text-overflow: ellipsis;
		color: #A9A9A9
	}

</style>
