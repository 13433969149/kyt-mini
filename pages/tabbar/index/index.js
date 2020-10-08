var wxCharts = require('../../../utils/wxcharts.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    selectList:[
      {name:'仅自己',id:0},
      {name:'团队',id:1},
    ],
    dataViewList:[
      {name:'今日订单',num:100},
      {name:'今日销售',num:100.55},
      {name:'昨日订单',num:100},
      {name:'昨日销售',num:100.78},
      {name:'累计销售',num:100},
      {name:'昨日新增',num:100},
      {name:'新增转化率',num:10},
      {name:'累计客户',num:1004},
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    

    
  },
  
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    this.setData({showColumnar:true})
    // var windowWidth = 320;
    // try {
    //   var res = wx.getSystemInfoSync();
    //   windowWidth = res.windowWidth;
    // } catch (e) {
    //   console.error('getSystemInfoSync failed!');
    // }
    // new wxCharts({
    //   canvasId: 'columnCanvas',
    //   type: 'column',
    //   animation: true,
    //   categories: ['2012', '2013', '2014', '2015'],
    //   series: [{
    //     name: '成交量',
    //     data: [15, 20, 45, 37],
    //     format: function (val, name) {
    //       return val.toFixed(2);
    //     },
    //     color:"#00C482"
    //   }],
    //   yAxis: {
    //     format: function (val) {
    //       return val;
    //     },
    //     title: '',
    //     min: 0
    //   },
    //   xAxis: {
    //     disableGrid: false,
    //     type: 'calibration'
    //   },
    //   extra: {
    //     column: {
    //       width: 15
    //     }
    //   },
    //   width: windowWidth-20,
    //   height: 200,
    // });
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    if (typeof this.getTabBar === 'function' && this.getTabBar()) {     
      this.getTabBar().setData({
        selected: 0
      });
    }    
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})