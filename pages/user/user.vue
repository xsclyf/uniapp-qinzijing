<template>
	<view style='height: 170px;padding-top: 30px;background-color: #DCDCDC;'>
    <view style='margin-left:120px;'>
      <view class='touxiang'><image style='height: 100%;width: 100%;border-radius: 50%' :src='tupian'></image></view>
    </view>
    <view class='name'>{{value}}</view>
</view>
</template>

<script>
	export default {
		data() {
			return {
				value:"用户名",
				tupian:"http://img1.imgtn.bdimg.com/it/u=3786105188,1229730765&fm=27&gp=0.jpg",
			};
		}
	}
</script>

<style>
.yx{
  width: 40px;
  height: 40px
}
.touxiang{
  height: 80px;
  width: 80px;
  /* background-color: #FFFFFF;
  text-align: center; */
  border-radius: 40px
}
.name{
  text-align: center;
  margin-top: 20px
}
</style>
