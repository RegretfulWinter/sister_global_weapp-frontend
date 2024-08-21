Page({
  data: {
    cityArray: ["城市A", "城市B", "城市C"], // 可选城市列表
    continentArray: [
      { name: "灵活地点", value: "flex" },
      { name: "欧洲", value: "europe"},
      { name: "亚洲", value: "asia"},
      { name: "美洲", value: "america"},
      { name: "非洲", value: "africa" },
      { name: "大洋洲", value: "oceania" }
    ],
    selectedContinents: [],
    citySuggestions: [],
    selectedCity: '',
    selectedCountry: '',
    selectedStartDate: '',
    selectedEndDate: '',
    nightCount: 0,
    today: new Date().toISOString().split('T')[0], // 获取当前日期
    homestays: [
      { id: 1, title: "城市A的温馨小屋", location: "城市A", country: "国家A", availableDates: ["2024-08-20", "2024-08-21"], continent: {name: "亚洲", value: "asia"}, maximumCapacity: 4, roomType: { name: "独立房间", value: "private" }, stayType: { name: "旅行借宿", value: "travel" }, weChatId: "A1234567890" },
      { id: 2, title: "海边的舒适公寓", location: "城市B", country: "国家B", availableDates: ["2024-08-22", "2024-08-23"], continent: {name: "欧洲", value: "europe"}, maximumCapacity: 2, roomType: { name: "整套公寓", value: "entire" }, stayType: { name: "打工换宿", value: "work" }, weChatId: "B1234567890" },
      { id: 3, title: "山中的独立木屋", location: "城市C", country: "国家C", availableDates: ["2024-08-20", "2024-08-25"], continent: {name: "美洲", value: "america"}, maximumCapacity: 6, roomType: { name: "共享卧室", value: "shared" }, stayType: { name: "旅行借宿", value: "travel" }, weChatId: "C1234567890" }
    ],
    filteredHomestays: [],
    showSearch: false,
    sisterCount: 2,
    selectedRoomType: '',
    selectedStayType: '',
    months: ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"],
    roomTypes: [
      { name: "共享卧室", value: "shared" },
      { name: "独立房间", value: "private" },
      { name: "整套公寓", value: "entire" }
    ],
    stayTypes: [
      { name: "旅行借宿", value: "travel" },
      { name: "打工换宿", value: "work" }
    ],
    selectedRoomTypes: [],
    selectedStayTypes: [],
    years: ['2024', '2025', '2026'], // Add more years as needed
    selectedYear: '',
    months: [
      { name: "一月", value: "1" },
      { name: "二月", value: "2" },
      { name: "三月", value: "3" },
      { name: "四月", value: "4" },
      { name: "五月", value: "5" },
      { name: "六月", value: "6" },
      { name: "七月", value: "7" },
      { name: "八月", value: "8" },
      { name: "九月", value: "9" },
      { name: "十月", value: "10" },
      { name: "十一月", value: "11" },
      { name: "十二月", value: "12" }
    ],
    selectedMonths: [],
    wishlist: [],
    searchInitiated: false,
  },

  onCityInput: function(e) {
    const query = e.detail.value.toLowerCase();
    const citySuggestions = this.data.cityArray.filter(city => city.toLowerCase().includes(query));
    
    this.setData({
      citySuggestions: citySuggestions
    });
  },
  
  selectCity: function(e) {
    const selectedCity = e.currentTarget.dataset.city;
    this.setData({
      selectedCity: selectedCity,
      citySuggestions: [] // Clear suggestions after selection
    });
  },

  onLoad: function() {
    this.setData({
      filteredHomestays: this.data.homestays // 显示全部借宿信息
    });
  },

  onCityChange: function(e) {
    this.setData({
      selectedCity: this.data.cityArray[e.detail.value]
    });
  },

  onCountryChange: function(e) {
    this.setData({
      selectedCountry: this.data.countryArray[e.detail.value]
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

  onRoomTypeChange: function(e) {
    this.setData({
      selectedRoomTypes: e.detail.value
    });
    console.log("Selected Room Types:", this.data.selectedRoomTypes);
  },

  onStayTypeChange: function(e) {
    this.setData({
      selectedStayTypes: e.detail.value
    });
    console.log("Selected Stay Types:", this.data.selectedStayTypes);
  },

  onContinentChange: function(e) {
    this.setData({
      selectedContinents: e.detail.value
    });
    console.log("Selected Continents:", this.data.selectedContinents);
  },

  onSearchHost: function() {
    const city = this.data.selectedCity;
    const selectedMonths = this.data.selectedMonths;
    const selectedContinents = this.data.selectedContinents; // Get selected continents

    const filtered = this.data.homestays.filter(item => {
        // Exact match for city & Continent
        const matchesCity = city ? item.location === city : true;
        const itemContinent = item.continent.value;
        const matchesContinents  = selectedContinents.includes(itemContinent) || selectedContinents.includes("灵活地点");
        console.log(`checking continent: ${itemContinent} against selected continents: ${selectedContinents}`);

        
        // Exact match for selected month(s)
        const matchesMonth = selectedMonths.length > 0 ? item.availableDates.some(date => {
          const availableDate = new Date(date);
          const month = availableDate.getMonth() + 1; // Convert to 1-based month
          const isMatched = selectedMonths.includes(month.toString()); // Check if month is in selectedMonths
          
          // Log matched months
          if (isMatched) {
              console.log(`Matched Month: ${month} for available date: ${date}`);
          } else {
            console.log(`No match for month: ${month} for available date: ${date}`);
          }
          
          return isMatched;
      }) : true;


        // Flexible matches for other filters
        const startDate = new Date(this.data.selectedStartDate);
        const endDate = new Date(this.data.selectedEndDate);
        
        
        const sisterCount = this.data.sisterCount;
        const matchesCapacity = item.maximumCapacity >= sisterCount;
        
        const roomTypes = this.data.selectedRoomTypes;
        console.log("roomTypes",roomTypes);
        const matchesRoomType = roomTypes.length > 0 ? roomTypes.some(type => {
          console.log(`Checking room type: ${item.roomType.value} against selected type: ${type}`);
          return type.includes(item.roomType.value);; // Ensure this matches the expected format
      }) : true;
      
        const stayTypes = this.data.selectedStayTypes;
        console.log("stayTypes",stayTypes);
        const matchesStayType = stayTypes.length > 0 ? stayTypes.some(type => {
            console.log(`Checking stay type: ${item.stayType.value} against selected type: ${type}`);
            return type.includes(item.stayType.value); // Ensure this matches the expected format
        }) : true;

        // Combine the conditions
        const result = matchesCity && matchesContinents && matchesMonth && matchesCapacity && matchesRoomType && matchesStayType;
        console.log("matchcity",matchesCity, "matchcontinent",matchesContinents, "monthmatch",matchesMonth, "capacitymatch",matchesCapacity, "roomtypematch",matchesRoomType, "staytypematch",matchesStayType);
        return result;
    });
    console.log("filtered", filtered);
    this.setData({
      filteredHomestays: filtered,
      searchInitiated: true
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
    const homestay = this.data.homestays.find(item => item.id === id);
    wx.navigateTo({
        url: `/pages/homeDetail/homeDetail?id=${id}&data=${encodeURIComponent(JSON.stringify(homestay))}`
    });
  },

  toggleSearch: function() {
    this.setData({
      showSearch: !this.data.showSearch,
      filteredHomestays: this.data.homestays // Reset to show all homestays
    });
  },

  increaseCount: function() {
    this.setData({
      sisterCount: this.data.sisterCount + 1
    });
  },

  decreaseCount: function() {
    if (this.data.sisterCount > 1) {
      this.setData({
        sisterCount: this.data.sisterCount - 1
      });
    }
  },

  onSearchInput: function(e) {
    const query = e.detail.value.toLowerCase();
    const filtered = this.data.homestays.filter(item => {
      return item.title.toLowerCase().includes(query) || 
             item.location.toLowerCase().includes(query) ||
             item.country.toLowerCase().includes(query) ||
             item.continent.toLowerCase().includes(query);
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

  onYearChange: function(e) {
    this.setData({
      selectedYear: this.data.years[e.detail.value]
    });
  },

  onMonthChange: function(e) {
    this.setData({
      selectedMonths: e.detail.value
    });
  },

  addToWishlist: function(e) {
    const id = e.currentTarget.dataset.id;
    const homestay = this.data.homestays.find(item => item.id === id);
    
    if (homestay) {
      const app = getApp();
      const isInWishlist = app.globalData.wishlist.some(item => item.id === homestay.id);
      
      if (!isInWishlist) {
        this.setData({
          wishlist: [...this.data.wishlist, homestay]
        });
        
        // Update global wishlist
        app.globalData.wishlist.push(homestay);
  
        wx.showToast({
          title: 'Added to Wishlist',
          icon: 'success'
        });
      } else {
        const updatedWishlist = app.globalData.wishlist.filter(item => item.id !== homestay.id);
        this.setData({
            wishlist: updatedWishlist
        });
        app.globalData.wishlist = updatedWishlist;
        wx.showToast({
            title: 'Removed from Wishlist',
            icon: 'none'
        });
      }
    }
  }
});