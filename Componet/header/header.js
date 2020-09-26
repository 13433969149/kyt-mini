const app = getApp()
Component({
  properties: {
    msg:{
      type:Boolean,
      value:false
    },
    background: {
      type: String,
      value: '#fff'
    },
    color: {
      type: String,
      value: ''
    },
    titTow:{
      type:Boolean,
      value:false
    },
    titleText: {
      type: [String,Array],
      value: '导航栏',
      observer: 'setNavSize'
    },
    titleImg: {
      type: String,
      value: ''
    },
    back: {
      type: Boolean,
      value: false
    },
    ShowHome: {
      type: Boolean,
      value: false
    },
    fontSize: {
      type: Number,
      value: 16
    },
    iconHeight: {
      type: Number,
      value: 19
    },
    iconWidth: {
      type: Number,
      value: 58
    },
    new_count:{
      type: Number,
      value: 0,
      observer:'msgCount'
    },
    add:{
      type: Boolean,
      value: false
    }
  },
  attached: function () {
    var that = this;
    // that.setNavSize();
    that.setStyle();
  },
  data: {
    backIcon:'../../page/image/backx.png',
    titleText: '',
    active:0
  },
  methods: {
    msgCount(new_count){
      this.setData({
        new_count: new_count
      })
    },
    // 通过获取系统信息计算导航栏高度 
    setNavSize: function () {
      // console.log(this.properties.titleText)
      let titleText = this.properties.titleText
      var that = this
        , sysinfo = wx.getSystemInfoSync()
        , statusHeight = sysinfo.statusBarHeight
        , isiOS = sysinfo.system.indexOf('iOS') > -1
        , navHeight;
      if (!isiOS) {
        navHeight = 48;
      } else {
        navHeight = 44;
      }
      that.setData({
        status: statusHeight,
        navHeight: navHeight,
        // titleText: typeof titleText == 'string' ? titleText : titleText[0],
        titleLeft: titleText[0] || '',
        titleRight: titleText[1] || ''
      })
      wx.setStorageSync('headerHeight',statusHeight + navHeight)
    },
    setStyle: function () {
      var that = this
        , containerStyle
        , textStyle
        , iconStyle;
      containerStyle = [
        'background:' + that.data.background
      ].join(';');
      textStyle = [
        'color:' + that.data.color,
        'font-size:' + that.data.fontSize + 'px'
      ].join(';');
      iconStyle = [
        'width: ' + that.data.iconWidth + 'px',
        'height: ' + that.data.iconHeight + 'px'
      ].join(';');
      that.setData({
        containerStyle: containerStyle,
        textStyle: textStyle,
        iconStyle: iconStyle
      })
    },
    // 返回事件 
    back: function () {
      wx.navigateBack({
        delta: 1
      })
      this.triggerEvent('back', { back: 1 })
    },
    home: function () {
      wx.switchTab({
        url: '/page/tabBar/index/index',
      })
      this.triggerEvent('home', {});
    },
    navClick(e){
      let {t} = e.currentTarget.dataset
      this.setData({
        active:t
      })
      this.triggerEvent('nav_active',t)
    },
  }
})
