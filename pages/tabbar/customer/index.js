Page({

  /**
   * 页面的初始数据
   */
  data: {
    cities : [{
      "zip": "010",
      "pinyin": "Beijing",
      "code": "110000",
      "name": "北京",
      "label": "北京Beijing010"
    }, {
      "zip": "023",
      "pinyin": "Chongqing",
      "code": "500000",
      "name": "重庆",
      "label": "重庆Chongqing023"
    }, {
      "zip": "021",
      "pinyin": "Shanghai",
      "code": "310000",
      "name": "上海",
      "label": "上海Shanghai021"
    }, {
      "zip": "022",
      "pinyin": "Tianjin",
      "code": "120000",
      "name": "天津",
      "label": "天津Tianjin022"
    }, {
      "zip": "0431",
      "pinyin": "Changchun",
      "code": "220100",
      "name": "长春",
      "label": "长春Changchun0431"
    }, {
      "zip": "0731",
      "pinyin": "Changsha",
      "code": "430100",
      "name": "长沙",
      "label": "长沙Changsha0731"
    }, {
      "zip": "0519",
      "pinyin": "Changzhou",
      "code": "320400",
      "name": "常州",
      "label": "常州Changzhou0519"
    }, {
      "zip": "028",
      "pinyin": "Chengdu",
      "code": "510100",
      "name": "成都",
      "label": "成都Chengdu028"
    }, {
      "zip": "0411",
      "pinyin": "Dalian",
      "code": "210200",
      "name": "大连",
      "label": "大连Dalian0411"
    }, {
      "zip": "0769",
      "pinyin": "Dongguan",
      "code": "441900",
      "name": "东莞",
      "label": "东莞Dongguan0769"
    }, {
      "zip": "0757",
      "pinyin": "Foshan",
      "code": "440600",
      "name": "佛山",
      "label": "佛山Foshan0757"
    }, {
      "zip": "0591",
      "pinyin": "Fuzhou",
      "code": "350100",
      "name": "福州",
      "label": "福州Fuzhou0591"
    }, {
      "zip": "020",
      "pinyin": "Guangzhou",
      "code": "440100",
      "name": "广州",
      "label": "广州Guangzhou020"
    }, {
      "zip": "0851",
      "pinyin": "Guiyang",
      "code": "520100",
      "name": "贵阳",
      "label": "贵阳Guiyang0851"
    }, {
      "zip": "0451",
      "pinyin": "Haerbin",
      "code": "230100",
      "name": "哈尔滨",
      "label": "哈尔滨Haerbin0451"
    }, {
      "zip": "0898",
      "pinyin": "Haikou",
      "code": "460100",
      "name": "海口",
      "label": "海口Haikou0898"
    }, {
      "zip": "0310",
      "pinyin": "Handan",
      "code": "130400",
      "name": "邯郸",
      "label": "邯郸Handan0310"
    }, {
      "zip": "0571",
      "pinyin": "Hangzhou",
      "code": "330100",
      "name": "杭州",
      "label": "杭州Hangzhou0571"
    }, {
      "zip": "0551",
      "pinyin": "Hefei",
      "code": "340100",
      "name": "合肥",
      "label": "合肥Hefei0551"
    }, {
      "zip": "0752",
      "pinyin": "Huizhou",
      "code": "441300",
      "name": "惠州",
      "label": "惠州Huizhou0752"
    }, {
      "zip": "0391",
      "pinyin": "Jiaozuo",
      "code": "410800",
      "name": "焦作",
      "label": "焦作Jiaozuo0391"
    }, {
      "zip": "0573",
      "pinyin": "Jiaxing",
      "code": "330400",
      "name": "嘉兴",
      "label": "嘉兴Jiaxing0573"
    }, {
      "zip": "0423",
      "pinyin": "Jilin",
      "code": "220000",
      "name": "吉林",
      "label": "吉林Jilin0423"
    }, {
      "zip": "0531",
      "pinyin": "Jinan",
      "code": "370100",
      "name": "济南",
      "label": "济南Jinan0531"
    }, {
      "zip": "0871",
      "pinyin": "Kunming",
      "code": "530100",
      "name": "昆明",
      "label": "昆明Kunming0871"
    }, {
      "zip": "0931",
      "pinyin": "Lanzhou",
      "code": "620100",
      "name": "兰州",
      "label": "兰州Lanzhou0931"
    }, {
      "zip": "0772",
      "pinyin": "Liuzhou",
      "code": "450200",
      "name": "柳州",
      "label": "柳州Liuzhou0772"
    }, {
      "zip": "0379",
      "pinyin": "Luoyang",
      "code": "410300",
      "name": "洛阳",
      "label": "洛阳Luoyang0379"
    }, {
      "zip": "0791",
      "pinyin": "Nanchang",
      "code": "360100",
      "name": "南昌",
      "label": "南昌Nanchang0791"
    }, {
      "zip": "025",
      "pinyin": "Nanjing",
      "code": "320100",
      "name": "南京",
      "label": "南京Nanjing025"
    }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getScrollHeight()
  },
  getScrollHeight() {
    const query = this.createSelectorQuery();
    query
      .select('.i-index-demo')
      .boundingClientRect()
      .exec(async ([result]) => {
        const windowHeight = await wx.getSystemInfoSync().windowHeight
        this.setData({ scrollHeight: windowHeight - result.top});
      });
  },
  onChange(event){
    // console.log(event.detail,'click right menu callback data')
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    let cities= this.data.cities
    let storeCity = new Array(26);
    const words = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
    words.forEach((item,index)=>{
        storeCity[index] = {
            key : item,
            list : []
        }
    })
    cities.forEach((item)=>{
      let firstName = item.pinyin.substring(0,1);
      let index = words.indexOf( firstName );
        storeCity[index].list.push({
            name : item.name,
            key : firstName
        });
    })
    this.data.cities = storeCity;
    this.setData({
        cities : this.data.cities
    })
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    if (typeof this.getTabBar === 'function' && this.getTabBar()) {     
      this.getTabBar().setData({
        selected: 3
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