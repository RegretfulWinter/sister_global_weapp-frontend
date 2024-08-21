Page({
  data: {
    homestay: null,
    showModal: false,
    guestCount: 2,
    weChat: '',
    introduction: ''
  },
  onLoad: function(options) {
    const homestayData = options.data ? JSON.parse(decodeURIComponent(options.data)) : null;
    this.setData({
        homestay: homestayData
    });
    console.log(this.data.homestay);
},



  showContactForm: function() {
    this.setData({
      showModal: true
    });
  },

  closeModal: function() {
    this.setData({
      showModal: false
    });
  },

  increaseCount: function() {
    this.setData({
      guestCount: this.data.guestCount + 1
    });
  },

  decreaseCount: function() {
    if (this.data.guestCount > 1) {
      this.setData({
        guestCount: this.data.guestCount - 1
      });
    }
  },

  onWeChatInput: function(e) {
    this.setData({
      weChat: e.detail.value
    });
  },

  onIntroductionInput: function(e) {
    this.setData({
      introduction: e.detail.value
    });
  },

  submitRequest: function() {
    const weChatId = this.data.homestay.weChatId; // Get the WeChat ID from the homestay data
    this.setData({
      showModal: false, // Close the modal
      showNotification: true, // Show the notification bar
      weChatId: weChatId // Set the WeChat ID to display
    });
  },

  copyWeChatId: function() {
    wx.setClipboardData({
      data: this.data.weChatId,
      success: function() {
        wx.showToast({
          title: '微信号已复制',
          icon: 'success'
        });
      }
    });
  }
});