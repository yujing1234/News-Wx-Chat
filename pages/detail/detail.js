// pages/detail/detail.js
var list=require('../../data/newslist.js');
var obj={};

Page({

  /**
   * 页面的初始数据
   */
  data: {
    dataList:'',
    isShow:false,//显示灰色的 默认
    codeid:'',//当前页面的标识  id
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options);//接受参数数据的--进入页面地址栏拼接的数据
    //请求接口数据---xxxxx.url?code=options.mark
    // console.log(list.list)
    for(var i=0;i<list.list.length;i++){
      if(list.list[i].id==options.mark){
        console.log(list.list[i])
        this.setData({
          dataList: list.list[i],
          codeid:options.mark
        })
      }
    }
    //进入页面获取本地存储--------------------------------
    obj=wx.getStorageSync('obj');
    console.log(obj);
    //判断是否有本地存储
    if(obj){//字符串
      obj=JSON.parse(obj);//{'34':true}
      //进入页面---判断是否是当前的页面被收藏
      if (obj[options.mark]){//{} obj.属性  obj[属性]
          this.setData({
            isShow:true
          })
      }
    }else{
      obj={};

    }
    
  },
  //点击图片星星显示隐藏-----1.点击图片收藏取消收藏--2.动画提示----3.提示收藏取消文字---------
  change:function(){
    //点击的时候 把图片状态本地存储起来{id:true,....}
    if(obj[this.data.codeid]){
        //点击的时候 本地存储了 收藏
      obj[this.data.codeid]=false;
    }else{
      obj[this.data.codeid] = true;
    }
    //存储
    wx.setStorageSync('obj', JSON.stringify(obj))

    var that=this;//存储this指向page() 
    //1.点击图片 修改data里面的属性 控制图片显示隐藏
    this.setData({
      isShow: !this.data.isShow
    })
    //点击的时候触发界面交互动画
    //2.多渡动画---然后提示问题
    wx.showLoading({
      title: '操作中',
    })
    setTimeout(function(){
      wx.hideLoading();
      //3.判断当前点击的是收藏还是取消
      if(that.data.isShow){//true 点击isShow=true 收藏
        wx.showToast({
          title: '收藏成功',
        })
      }else{
        wx.showToast({
          title: '取消收藏',
        })
      }
    },1000)
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