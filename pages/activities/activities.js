Page({
  data: {
    activities: [
      {
        id: 1,
        title: "意大利技能换宿 | 来佛罗伦萨度过你的夏日",
        location: "佛罗伦萨",
      },
      {
        id: 2,
        title: "城市探险 | 探索巴黎的秘密街头",
        location: "巴黎",
      }
      // 继续添加其他活动
    ]
  },

  onViewDetail: function(e) {
    const id = e.currentTarget.dataset.id;
    wx.navigateTo({
      url: `/pages/activityDetail/activityDetail?id=${id}`
    });
  }
});