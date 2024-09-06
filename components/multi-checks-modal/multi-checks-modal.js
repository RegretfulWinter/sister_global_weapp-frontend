Component({
    options: {
      virtualHost: true,
      multipleSlots: true
    },
    properties: {
      style: { // 定义 style 属性可以拿到 style 属性上设置的值
        type: String,
      },
      extClass: {
        // 弹窗 class
        type: String,
        value: ''
      },
      checkboxItems: {
        type: Array,
        value: [],
        observer: '_checkboxItems'
      },
      show: {
          type: Boolean,
          observer: '_showChange',
          value: false
      },
      title: {
          type: String,
          value: ''
      },
      subtitle: {
        type: String,
        value: ''
      }
    },
    data:{
        showModal: false,
        items: []
    },
    externalClasses: ['class'], // 可以将 class 设为 externalClasses
    ready: function() {
        this.setData({
            items: this.data.checkboxItems
        })
     },
    methods:{
        _showChange: function (show) {
            this.setData({
                showModal: show,
            });
        },
        _checkboxItems: function (checkboxItems) {
            this.setData({
                items: checkboxItems,
            });
        },
        onConfirm: function () {
            this.triggerEvent('confirm', {}, {})
        },
        onCancel: function () {
            this.triggerEvent('cancel', {}, {})
        },
        onCheckedChange: function(e) {
            this.triggerEvent('change', {value: e.detail.value})
        }
    }
  })