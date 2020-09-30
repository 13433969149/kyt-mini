Component({
  data: {
    selected: 0,
    color: '#6B6B6B',
    selectedColor: '#00C380',
    fontWeight:'bold',
    list: [
      {
        pagePath: "/pages/tabbar/index/index",
        iconPath: "/images/tabbar/index.png",
        selectedIconPath: "/images/tabbar/index_active.png",
        text: "首页",
        isAdd:false,
      },
      {
        pagePath: "/pages/tabbar/order/index",
        iconPath: "/images/tabbar/order.png",
        selectedIconPath: "/images/tabbar/order_active.png",
        text: "订单",
        isAdd:false,
      },
      {
        pagePath: "",
        iconPath: "/images/tabbar/icon_increase_radius.png",
        selectedIconPath: "/images/tabbar/icon_increase_radius.png",
        text: "",
        isAdd:true,
      },
      {
        pagePath: "/pages/tabbar/customer/index",
        iconPath: "/images/tabbar/customer.png",
        selectedIconPath: "/images/tabbar/customer_active.png",
        text: "客户",
        isAdd:false,
      },
      {
        pagePath: "/pages/tabbar/my/index",
        iconPath: "/images/tabbar/mine.png",
        selectedIconPath: "/images/tabbar/mine_active.png",
        text: "我的",
        isAdd:false,
      },
    ]
  },
  attached() {
  },
  methods: {
    switchTab(e) {
      const {index,path,add} = e.currentTarget.dataset
      const url = path
      if(!add){
        wx.switchTab({ url })
      }else{
        this.setData({
          ShowPopup:true
        })
      }
    },
    close(){
      this.setData({
        ShowPopup: false
      })
    }
  }
})