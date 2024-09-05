// components/index.js
Component({
  properties: {
    show: {
      type: Boolean,
      value: false,
      observer: "_showChange",
    },
  },

  /**
   * 组件的初始数据
   */
  data: {
    showPicker: false,
    mbtiList: [
      { key: "INTJ", value: 0 },
      { key: "INTP", value: 1 },
      { key: "ENTJ", value: 2 },
      { key: "ENTP", value: 3 },
      { key: "INFJ", value: 4 },
      { key: "INFP", value: 5 },
      { key: "ENFJ", value: 6 },
      { key: "ENFP", value: 7 },
      { key: "ISTJ", value: 8 },
      { key: "ISFJ", value: 9 },
      { key: "ESTJ", value: 10 },
      { key: "ESFJ", value: 11 },
      { key: "ISTP", value: 12 },
      { key: "ISFP", value: 13 },
      { key: "ESTP", value: 14 },
      { key: "ESFP", value: 15 },
    ],
    zodiacList: [
      { key: "白羊座", value: 0 }, // Aries
      { key: "金牛座", value: 1 }, // Taurus
      { key: "双子座", value: 2 }, // Gemini
      { key: "巨蟹座", value: 3 }, // Cancer
      { key: "狮子座", value: 4 }, // Leo
      { key: "处女座", value: 5 }, // Virgo
      { key: "天秤座", value: 6 }, // Libra
      { key: "天蝎座", value: 7 }, // Scorpio
      { key: "射手座", value: 8 }, // Sagittarius
      { key: "摩羯座", value: 9 }, // Capricorn
      { key: "水瓶座", value: 10 }, // Aquarius
      { key: "双鱼座", value: 11 }, // Pisces
    ],
    selectedMbti: "INTJ",
    selectedZodiac: "白羊座",
  },
  /**
   * 组件的方法列表
   */
  methods: {
    _showChange: function (show) {
      this.setData({
        showPicker: show,
      });
    },
    handleClose() {
      this.triggerEvent("cancel");
    },
    handleConfirm() {
      this.triggerEvent("confirm", {
        selectedMbti: this.data.selectedMbti,
        selectedZodiac: this.data.selectedZodiac,
      });
    },
    handlePersonalityChange(e) {
      const selectedMbti = this.data.mbtiList[e.detail.value[0]].key;
      const selectedZodiac = this.data.zodiacList[e.detail.value[1]].key;
      this.setData({
        selectedZodiac,
        selectedMbti,
      });
    },
  },
});
