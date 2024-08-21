Page({
  data: {
    userInfo: {
      avatarUrl: '/path/to/avatar.jpg',
      name: 'Emma He',
      location: '上海, 中国',
      skills: ['摄影', '户外长途', '企业管理', '冲浪', '留学咨询'],
      mbti: 'ENFJ',
      zodiac: '双鱼座',
      bio: '很高兴认识你！我是Emma 我是一个充满激情的旅行者和城市爱好者，喜欢分享市中心生活的活力...'
    },
    checkboxItems: [
      { name: '中文', value: '0', checked: false },
      { name: '英语', value: '1', checked: false },
      { name: '广东话', value: '2', checked: false },
      { name: '法语', value: '3', checked: false },
      { name: '德语', value: '4', checked: false },
      { name: '日语', value: '5', checked: false }
    ],
    formData: {},
    showLanguageModal: false,
  },

  showLanguageModal: function () {
    this.setData({
      showLanguageModal: true,
    });
  },

  hideLanguageModal: function () {
    this.setData({
      showLanguageModal: false,
    });
  },

  checkboxChange: function (e) {
    console.log('checkbox发生change事件，携带value值为：', e.detail.value);

    const checkboxItems = this.data.checkboxItems;
    const values = e.detail.value;

    for (let i = 0; i < checkboxItems.length; i++) {
      checkboxItems[i].checked = values.includes(checkboxItems[i].value);
    }

    this.setData({
      checkboxItems: checkboxItems,
      [`formData.checkbox`]: e.detail.value
    });
  },

  confirmLanguageChange: function () {
    const selectedLanguages = this.data.checkboxItems
      .filter(item => item.checked)
      .map(item => item.name);

    this.setData({
      'userInfo.languages': selectedLanguages,
      showLanguageModal: false
    });

    wx.showToast({
      title: '语言已更新',
      icon: 'success'
    });
  },

  goBack: function() {
    wx.navigateBack();
  }
});