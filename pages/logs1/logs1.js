// pages/logs1/logs1.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    text: "",
    code: ""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    wx.setStorage({
      key: 'URL',
      data: "http://oa.cjwy168.com/",
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },
  // 登录事件
  login() {
    var _this = this
    wx.request({
      url: wx.getStorageSync('URL') + '/api/login', //仅为示例，并非真实的接口地址
      method: "post",
      data: {
        mobile: _this.data.text,
        password: _this.data.code
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      success(res) {
        console.log(res.data)
        if (res.data.code == 400) {
          wx.showToast({
            title: res.data.message,
            duration: 2000,
            icon: "none"
          })
        } else if (res.data.code == 200) {
          console.log(res)
          wx.setStorage({
            key: 'token',
            data: res.data.data.Authorization,
          })
          wx.setStorage({
            key: 'type',
            data: res.data.data.role[0],
          })
          if (res.data.data.role[0] == "manager") {
            // 登陆之后判断要跳转的页面
            // 经理岗
            wx.reLaunch({
              url: '../home/home',
            })
          } else if (res.data.data.role[0] == "salesclerk") {
            // 便利岗
            wx.reLaunch({
              url: '../index/index',
            })
          } else if (res.data.data.role[0] == "kefu") {
            // 客服岗
            wx.reLaunch({
              url: '../kefu/kefu',
            })
          } else if (res.data.data.role[0] == "engineer") {
            // 工程岗
            wx.reLaunch({
              url: '../engineer/engineer',
            })
          } else {
            // security  楼管岗
            wx.reLaunch({
              url: '../home/home',
            })
          }

        }
      }
    })
  },
  // 获取手机号输入框的信息
  text(e) {
    // console.log(e.detail.value)
    this.setData({
      text: e.detail.value
    })
  },
  // 获取密码输入框的信息
  passworld(e) {
    this.setData({
      code: e.detail.value
    })
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

  }
})