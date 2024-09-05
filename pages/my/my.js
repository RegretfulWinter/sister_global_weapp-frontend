import { userInfo, interestsOptions, languagesOptions } from "./userData";

Page({
  data: {
    userInfo: { ...userInfo },
    interestsOptions: interestsOptions,
    languagesOptions: languagesOptions,
    formData: {},
    showLanguageModal: false,
    showInterestModal: false,
    customizedInterest: "",
    showPicker: false,
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

  languageChecboxChange: function (e) {
    console.log("checkbox发生change事件，携带value值为：", e.detail.value);
    const checkboxItems = this.data.languagesOptions;
    const values = e.detail.value;
    for (let i = 0; i < checkboxItems.length; i++) {
      checkboxItems[i].checked = values.includes(checkboxItems[i].value);
    }
    this.setData({
      languagesOptions: checkboxItems,
      [`formData.checkbox`]: e.detail.value,
    });
  },

  confirmLanguageChange: function () {
    const selectedLanguages = this.data.languagesOptions
      .filter((item) => item.checked)
      .map((item) => item.name);
    this.setData({
      "userInfo.languages": selectedLanguages,
      showLanguageModal: false,
    });

    wx.showToast({
      title: "语言已更新",
      icon: "success",
    });
  },

  // interests
  showInterestModal: function () {
    this.setData({
      showInterestModal: true,
    });
  },

  hideInterestModal: function () {
    this.setData({
      showInterestModal: false,
    });
  },

  interestChecboxChange: function (e) {
    console.log("checkbox发生change事件，携带value值为：", e.detail.value);
    const checkboxItems = this.data.interestsOptions;
    const values = e.detail.value;
    for (let i = 0; i < checkboxItems.length; i++) {
      checkboxItems[i].checked = values.includes(checkboxItems[i].value);
    }
    this.setData({
      interestsOptions: checkboxItems,
      [`formData.checkbox`]: e.detail.value,
    });
  },

  confirmInterestChange: function () {
    const selectedInterests = this.data.interestsOptions
      .filter((item) => item.checked)
      .map((item) => item.name);
    this.setData({
      "userInfo.interests": selectedInterests,
      showInterestModal: false,
    });

    wx.showToast({
      title: "兴趣与技能已更新",
      icon: "success",
    });
  },

  bindInterestInput: function (e) {
    const interst = e.detail.value.trim();
    this.setData({
      customizedInterest: interst,
    });
  },

  addInterestTag: function () {
    if (this.data.customizedInterest.length > 0) {
      this.setData({
        interestsOptions: [
          ...this.data.interestsOptions,
          {
            name: this.data.customizedInterest,
            value: this.data.interestsOptions.length,
            checked: true,
          },
        ],
        customizedInterest: "",
      });
    }
  },

  // personality picker

  showPicker: function () {
    this.setData({
      showPicker: true,
    });
  },

  hidePicker: function () {
    this.setData({
      showPicker: false,
    });
  },

  confirmPersonalityChange: function (e) {
    this.setData({
      "userInfo.mbti": e.detail.selectedMbti,
      "userInfo.zodiac": e.detail.selectedZodiac,
      showPicker: false,
    });
  },

  goBack: function () {
    wx.navigateBack();
  },
});
