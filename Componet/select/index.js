const from = (n, array = []) => (n <= 0 ? array : from(n - 1, [n, ...array]));

Component({
  properties: {
    List: {
      type: Array,
      value: () => []
    }
  },

  data: {
    index: 0,
    show: false
  },

  attached() {

  },

  methods: {
    // 点击下拉显示框
    selectTap() {
      this.setData({
        show: !this.data.show
      });
    },
    // 点击下拉列表
    optionTap(e) {
      let Index = e.currentTarget.dataset.index;//获取点击的下拉列表的下标
      this.setData({
        index: Index,
        show: !this.data.show
      });
      
    },
  }
});
