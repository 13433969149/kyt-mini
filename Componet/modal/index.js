Component({
  options: {
    multipleSlots: true
  },
  properties: {
    // 是否显示弹窗
    visible: {
      type: Boolean,
      value: false,
      observer: 'toggleShow'
    },

    // 是否显示遮罩
    mask: {
      type: Boolean,
      value: true
    },

    // 点击 mask 是否触发关闭事件
    canMaskTap: {
      type: Boolean,
      value: true
    },

    // 弹窗动画开始颜色
    maskAnimationStartColor: {
      type: String,
      value: 'rgba(0, 0, 0, 0)'
    },

    // 弹窗动画结束颜色
    maskAnimationEndColor: {
      type: String,
      value: 'rgba(0, 0, 0, 0.7)'
    },

    // 是否显示动画
    animation: {
      type: Boolean,
      value: true
    },

    // 动画类型
    // scale: 放大缩小
    // slide-bottom: 从底部进入
    // slide-top: 从顶部进入
    animationType: {
      type: String,
      value: 'scale'
    },

    // 动画时长, 单位s
    animationDuration: {
      type: Number,
      value: 0.3
    },

    // 弹窗内容位置
    // vertical           -  horizontal
    // top center bottom  -  left center right
    position: {
      type: String,
      value: 'center-center',
      observer: 'initPositionStyle'
    },

    // 设置css z-index
    zIndex: {
      type: Number,
      value: 3
    },

    // 阴影
    boxShadow: {
      type: String,
      value: ''
    },

    // container 距离顶部的位置
    top: {
      type: String,
      value: ''
    },

    // container 距离左侧的位置
    left: {
      type: String,
      value: '0'
    },

    // container 距离右侧的位置
    right: {
      type: String,
      value: '0'
    },

    // container 距离底部的位置
    bottom: {
      type: String,
      value: '0'
    },

    // mask 距离顶部的位置
    maskTop: {
      type: String,
      value: ''
    }
  },
  data: {
    positionStyle: '',
    show: false
  },

  attached() {
    this.toggleShow(this.data.visible);
    this.initPositionStyle(this.data.position);
  },

  methods: {
    toggle(e) {
      const { id } = e.target.dataset;
      if (id !== this.data.id) return;
      this.triggerEvent('toggle', !this.data.visible);
    },

    // 初始化位置信息
    initPositionStyle(position) {
      const [v, h] = String(position).split('-');
      const vMap = {
        top: 'flex-start',
        center: 'center',
        bottom: 'flex-end'
      };
      const hMap = {
        left: 'flex-start',
        center: 'center',
        right: 'flex-end'
      };

      const vVal = vMap[v] || 'center';
      const hVal = hMap[h] || 'center';

      const style = `justify-content: ${hVal}; align-items: ${vVal};`;
      this.setData({ positionStyle: style });
    },

    // 设置控制显示隐藏的内部值
    toggleShow(value) {
      const { animation } = this.data;

      if (!animation) {
        this.setData({ show: value });
        return;
      }

      // 隐藏状态下，立即切换 show 值，因为显示动画可以在显示状态下继续
      if (value) {
        this.setData({ show: value });
        return;
      }

      // 显示状态下，延时切换 show 值，使得隐藏动画得以执行完成
      if (this.data.show) {
        setTimeout(() => this.setData({ show: value }), 300);
      } else {
        this.setData({ show: value });
      }
    },

    // 点击modal
    bindMaskTap() {
      const { canMaskTap } = this.data;

      if (canMaskTap) {
        this.triggerEvent('toggle', { value: false });
      }
    },

    stopPropagation() {}
  }
});
