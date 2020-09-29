// Components/star/star.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    autoFocus: {
      type: Boolean,
      value: false
    },
    disabled: {
      type: Boolean,
      value: false
    },
    placeholder: {
      type: String,
      value: '搜索订单号、收货人、商品'
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
	  classOpen:false
  },

  /**
   * 组件的方法列表
   */
  methods: {
    confirm(e) {
      this.triggerEvent('confirm', e.detail.value)
    },
	customerClass(e){
		const { type } = e.currentTarget.dataset
		console.log(type)
		console.log(!this.data[`${type}`])
		const {classOpen} = this.data
		this.setData({
			[`${type}`]:!this.data[`${type}`]
		})
	}
  }
});
