Page({
  data: {
    activity: {}
  },

  onLoad: function(options) {
    const id = options.id;
    const activities = [
      {
        id: 1,
        title: "意大利技能换宿 | 来佛罗伦萨度过你的夏日",
        location: "佛罗伦萨",
        price: "人均约200欧",
        tags: ["佛罗伦萨", "托斯卡纳", "Eurostay官方活动"],
        participants: 8,
        imageUrl: "/path/to/image.jpg",
        description: "在这个活动中，您将有机会探索意大利的文化..."
      },
      {
        id: 2,
        title: "城市探险 | 探索巴黎的秘密街头",
        location: "巴黎",
        price: "人均约150欧",
        tags: ["巴黎", "探险", "文化体验"],
        participants: 12,
        imageUrl: "/path/to/image2.jpg",
        description: "在巴黎的街头，你将体验到..."
      }
    ];
    
    const activity = activities.find(item => item.id == id);
    this.setData({
      activity: activity
    });
  }
});