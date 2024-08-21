Page({
  data: {
    wishlist: [],
    homestay: null
  },

  onLoad: function() {
    const app = getApp();
    this.setData({
      wishlist: app.globalData.wishlist || [] // Ensure it defaults to an empty array
    });
  },

  onShow: function() {
    const app = getApp();
    this.setData({
      wishlist: app.globalData.wishlist || [] // Update wishlist when the page is shown
    });
  },

  onClick: function(e) {
    const id = e.currentTarget.dataset.id;
    const homestay = this.data.wishlist.find(item => item.id === id);
    
    if (homestay) {
        wx.navigateTo({
            url: `/pages/homeDetail/homeDetail?id=${id}&data=${encodeURIComponent(JSON.stringify(homestay))}`
        });
    } else {
        console.error("Homestay not found in wishlist");
    }
}
});