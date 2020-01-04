// pages/index/index.js
//引入其他的模块
// var datalist=require('../../data/dataList.js');
var list=require('../../data/newslist.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
     navBar:['要闻','北京','时政','科技','体育','财经','社会','娱乐','游戏','数码','旅游','美食'],
    selected:0,//选中的初始值
    list:list.list

  },
  //导航点击事件----------
  change:function(e){
    //1.点击谁 获取index  2.要把index值 赋值给 selected
    var index = e.currentTarget.dataset.id;
    // console.log(e,index);
    this.setData({
      selected:index
    })
  },
//跳转页面----详情页-------------
  tiao:function(e){
    console.log(e.currentTarget)
    //跳转页面
    wx.navigateTo({
      url: '../detail/detail?mark=' + e.currentTarget.dataset.mark,
    })

  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(list);
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