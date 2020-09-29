// pages/order//detail/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    logisticsList:[
      {time:'2020-10-1 20:00',context:'物流信息1'},
      {time:'2020-10-1 20:00',context:'物流信息2'},
      {time:'2020-10-1 20:00',context:'物流信息3'},
      {time:'2020-10-1 20:00',context:'物流信息4'},
      {time:'2020-10-1 20:00',context:'物流信息5'},
      {time:'2020-10-1 20:00',context:'物流信息6'},
    ],
    show:false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  // 查看物流
  LookDetail(e){
    this.setData({show:true})
  },
  // 关闭物流信息
  close(){
    this.setData({show:false})
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

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