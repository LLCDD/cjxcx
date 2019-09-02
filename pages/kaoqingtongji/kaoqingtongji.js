// pages/kaoqingtongji/kaoqingtongji.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    date: '2016-09',
    datas: new Date(),
    activeNames: ['1']
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  },
  // 去打卡的界面
  daka() {
    wx.navigateBack({
      delta: 1
    })
  },
  // 
  bindTimeChange: function(e) {
    //设置事件
    this.setData({
      //给当前time进行赋值
      time: e.detail.value
    })
  },
  // 最后时间选择的确认事件
  bindDateChange(e) {
    var str = e.detail.value
    var str = str.substring(0, 7)
    console.log(str)
    this.setData({
      date: str
    })
    // 这里还差一个请求
  },
  // 考勤规则
  kaoqin() {
    wx.navigateTo({
      url: '../kaoqinggui/kaoqinggui',
    })
  },
  // 下拉的样式
  onChange(event) {
    this.setData({
      activeNames: event.detail
    });
  }
})