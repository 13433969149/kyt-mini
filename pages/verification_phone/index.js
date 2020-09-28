// pages/verification_phone/index.js
import {msg,phone} from '../../utils/util.js';
Page({

  /**
   * 页面的初始数据
   */
  data: {
    mobile:'',//手机号
    getVerifyCodeText: '获取验证码',
    verifySecond: 60,//倒计时
    verifycode:'',//验证码
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  // 手机号码
  inputMobile(e){
    this.setData({
      mobile : e.detail.value
    })
  },
  // 清空input
  clearInput(){
    this.mobile = ''
  },
  // 获取验证码
  async getVerifyCode(){
    let {verifySecond,mobile,getVerifyCodeText} = this.data
    if(verifySecond !=60)return
    if(!mobile){
      msg('请填写手机号')
      return
    }else{
      if(!phone(mobile)){
        msg('请填写正确的手机号')
        return
      }
    }
    
    if (verifySecond == 60) {
      var tempInterval;
      tempInterval = setInterval(()=> {
        if (verifySecond - 1 > 0) {
          verifySecond --          
          getVerifyCodeText = '重新发送('+verifySecond +')'
          this.setData({verifySecond,getVerifyCodeText})
        } else {
          this.setData({verifySecond:60,getVerifyCodeText:'获取验证码'	})				
          clearInterval(tempInterval);
        }
      }, 1000);
    }
  },
  // 输入验证码
  inputVerifyCode(e){
    this.setData({verifycode : e.detail.value})
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