Page({
  data: {
    tabs: ["借宿", "求宿"],
    currentTab: 0,
    cityArray: ["城市A", "城市B", "城市C"], // 可选城市列表
    selectedCity: '',
    selectedStartDate: '',
    selectedEndDate: '',
    nightCount: 0,
    today: new Date().toISOString().split('T')[0], // 获取当前日期
    homestays: [
      { id: 1, title: "城市A的温馨小屋", location: "城市A", availableDates: ["2024-08-20", "2024-08-21"] },
      { id: 2, title: "海边的舒适公寓", location: "城市B", availableDates: ["2024-08-22", "2024-08-23"] },
      { id: 3, title: "山中的独立木屋", location: "城市C", availableDates: ["2024-08-20", "2024-08-25"] }
    ],
    filteredHomestays: []
  },

  onLoad: function() {
    this.setData({
      filteredHomestays: this.data.homestays // 初始显示全部借宿信息
    });
  },

  switchTab: function(e) {
    this.setData({
      currentTab: e.currentTarget.dataset.index
    });
  },

  onCityChange: function(e) {
    this.setData({
      selectedCity: this.data.cityArray[e.detail.value]
    });
  },

  onStartDateChange: function(e) {
    this.setData({
      selectedStartDate: e.detail.value
    });
    this.updateNightCount();
  },

  onEndDateChange: function(e) {
    this.setData({
      selectedEndDate: e.detail.value
    });
    this.updateNightCount();
  },

  updateNightCount: function() {
    const startDate = new Date(this.data.selectedStartDate);
    const endDate = new Date(this.data.selectedEndDate);
    const nightCount = (endDate - startDate) / (1000 * 60 * 60 * 24);
    
    if (nightCount > 0) {
      this.setData({
        nightCount: nightCount
      });
    } else {
      this.setData({
        nightCount: 0
      });
    }
  },

  onSearchHost: function() {
    const city = this.data.selectedCity;
    const startDate = new Date(this.data.selectedStartDate);
    const endDate = new Date(this.data.selectedEndDate);

    if (!city || !startDate || !endDate) {
      wx.showToast({
        title: '请选择城市和日期',
        icon: 'none'
      });
      return;
    }

    const filtered = this.data.homestays.filter(item => {
      const matchesCity = item.location === city;
      const matchesDates = item.availableDates.some(date => {
        const availableDate = new Date(date);
        return availableDate >= startDate && availableDate <= endDate;
      });
      return matchesCity && matchesDates;
    });

    this.setData({
      filteredHomestays: filtered
    });

    if (filtered.length === 0) {
      wx.showToast({
        title: '未找到匹配的房源',
        icon: 'none'
      });
    }
  },

  onViewDetail: function(e) {
    const id = e.currentTarget.dataset.id;
    wx.navigateTo({
      url: `/pages/detail/detail?id=${id}`
    });
  }
});