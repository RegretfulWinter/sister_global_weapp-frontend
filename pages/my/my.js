Page({
  data: {
    userInfo: {
      avatarUrl: '/path/to/avatar.jpg', // 头像路径
      name: 'Emma He',
      languages: '中文, 英语, 广东话',
      location: '上海, 中国',
      skills: ['摄影', '户外长途', '企业管理', '冲浪', '留学咨询'],
      mbti: 'ENFJ',
      zodiac: '双鱼座',
      bio: '很高兴认识你！我是Emma 我是一个充满激情的旅行者和城市爱好者，喜欢分享市中心生活的活力...'
    }
  },

  goBack: function() {
    wx.navigateBack();
  }
});