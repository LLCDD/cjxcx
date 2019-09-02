// pages/daka/daka.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 通过days来改变 上班或者下班或者不可打卡
    // 0: 为不可打卡  1:为可打卡 。。。。
    days: 0,
    datas: "考勤打卡"
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
  // 考勤打卡的规则
  kaoqin() {
    wx.navigateTo({
      url: '../kaoqinggui/kaoqinggui',
    })
  },
  // 打卡的事件 不可打卡
  no() {
    // 拍照功能
    var that = this;
    wx.chooseImage({
      sourceType: ['camera'],
      count: 1,
      success: function(res) {
        // 这里无论用户是从相册选择还是直接用相机拍摄，拍摄完成后的图片临时路径都会传递进来
        app.startOperating("保存中")
        var filePath = res.tempFilePaths[0];
        var session_key = wx.getStorageSync('session_key');
        // 这里顺道展示一下如何将上传上来的文件返回给后端，就是调用wx.uploadFile函数
        wx.uploadFile({
          url: app.globalData.url + '/home/upload/uploadFile/session_key/' + session_key,
          filePath: filePath,
          name: 'file',
          success: function(res) {
            app.stopOperating();
            // 下面的处理其实是跟我自己的业务逻辑有关
            var data = JSON.parse(res.data);
            if (parseInt(data.status) === 1) {
              app.showSuccess('文件保存成功');
            } else {
              app.showError("文件保存失败");
            }
          }
        })
      },
      fail: function(error) {
        console.error("调用本地相册文件时出错")
        console.warn(error)
      },
      complete: function() {

      }
    })
  },

  // 点击统计展示统计界面
  tongji(){
    wx.navigateTo({
      url: '../kaoqingtongji/kaoqingtongji',
    })
  }
})