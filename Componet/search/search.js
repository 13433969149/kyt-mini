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
      value: '请输入姓名，手机，微信号'
    },
    isScreen:{//是否显示筛选条件
      type: Boolean,
      value: false
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
      this.setData({
        classOpen:false,
        GradeOpen:false,
        StatusOpen:false,
        [`${type}`]:!this.data[`${type}`]
      })
    },
    addCustomer(){
      wx.navigateTo({
        url:'/pages/customer/add_customer/index'
      })
    }
  }
});
