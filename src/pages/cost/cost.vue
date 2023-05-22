<template>
  <view class="cost-contain">
    <view class="cost-header">
      <u-icon class="header-icon" name="setting-fill" color="#606266" size="24"></u-icon>
      我的账本
    </view>
    <view class="cost-total">
      <view class="total-time">
        <view class="time-year">2023年</view>
        <view class="time-mon">05月</view>
      </view>
      <view class="divider"></view>
      <view class="total-balance">
        <view class="balance-title">结余：</view>
        <view class="balance-num">54628792</view>
      </view>
      <view class="total-ie">
        <view class="ie-income">
          收入：315468
        </view>
        <view class="ie-expend">
          支出：2156
        </view>
      </view>
    </view>
    <view class="detail-contain">
      <view class="detail-cost">test</view>
      <view class="detail-cost">test</view>
      <view class="detail-cost">test</view>
    </view>
  </view>
</template>

<script lang="ts">
  import Vue from 'vue';

	export default Vue.extend({
		data() {
			return {
				title: 'Hello'
			}
		},
		onLoad() {

		},
		methods: {

		}
	});
</script>

<style lang="scss">
  .cost-header {
    display: block;
    height: 36px;
    width: 100%;
    font-size: 24px;
    line-height: 24px;
    font-weight: 600;
    text-align: center;
    background-color: pink;
    color: $uni-text-color;
    .header-icon {
      position: absolute;
      left: 12px;
    }
  }
  .cost-total {
    display: block;
    background-color: skyblue;
    width: 100%;
    height: 48px;
    .total-time {
      float: left;
      margin: 0 12px 0 12px;
      max-width: 30%;
      .time-year {
        font-size: $uni-font-size-sm;
      }
      .time-mon {
        font-size: $uni-font-size-lg;
      }
    }
    .total-balance {
      float: left;
      margin-left: 12px;
      max-width: 30%;
      .balance-title {
        font-size: $uni-font-size-sm;
      }
      .balance-num {
        font-size: $uni-font-size-lg;
      }
    }
    .total-ie {
      float: right;
      max-width: 30%;
      margin-right: 12px;
      .ie-income {
        font-size: $uni-font-size-base;
      }
      .ie-expend {
        font-size: $uni-font-size-base;
      }
    }
  }
  .detail-contain {
    min-height: 200px;
    width: calc(100% - 12px);
    padding: 6px;
    background-color: antiquewhite;
    .detail-cost {
      width: 100%;
      height: 36px;
      margin: 3px 0 3px 0;
      background-color: cornflowerblue;
    }
  }
  .divider {
     display: block;
     float: left;
     width: 1px;
     background-color: black;
     height: 32px;
     margin-top: 6px;
     margin-left: 6px;
     content: '1';
  }
</style>
