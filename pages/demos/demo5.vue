<template>
  <view>
    <view>{{ value }}</view>
    <lb-picker v-model="value"
      mode="selector"
      :list="list"
      @change="handleChange"
      @confirm="handleConfirm"
      @cancel="handleCancel">
      <button>我是默认插槽，点击即可弹出</button>
      <view slot="cancel-text">插槽取消</view>
      <view slot="action-center">中间自定义</view>
      <view slot="confirm-text">插槽确定</view>
      <view slot="header-top">头部顶部自定义</view>
      <view slot="header-bottom">头部底部自定义</view>
      <view slot="picker-top">选择器顶部自定义</view>
      <view slot="picker-bottom">选择器底部自定义</view>
    </lb-picker>
    <view>自定义后参数cancelColor、confirmColor将失效</view>
    <view>自定义插槽元素样式交给开发者自由调整，插槽仅提供预留位置。</view>
  </view>
</template>

<script>
	export default {
		data(){
			return {
				value: '',
				label: '',
				list: []
			}
		},
		created() {
			let list = []
			for (let i = 1; i < 20; i++) {
				list.push({
					label: `选项${i}`,
					value: i
				})
			}
			this.list = list
		},
		methods: {
			handleChange (item) {
				console.log('change::', item)
			},
			handleConfirm (item) {
				this.label = item.item.label
				console.log('confirm::', item)
			},
			handleCancel (item) {
				console.log('cancel::', item)
			}
		}
	}
</script>
