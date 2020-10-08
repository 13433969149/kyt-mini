import * as echarts from '../../ec-canvas/echarts';

Component({
  properties: {
    orderStatus:{
      type: String,
      value: '1'
    }
  },

  data: {
    ec: {
      lazyLoad: false,
    },
  },

  attached() {
    this.echartsComponnet = this.selectComponent('#mychart-dom-line');
    let option = {
      color: ["#37A2DA", "#67E0E3", "#9FE6B8"],
      grid: {
        containLabel: true,
        top: '15',
        left: '0',
        right: '5',
        bottom: '15'
      },
      tooltip: {
        show: true,
        trigger: 'axis'
      },
      xAxis: {
        type: 'category',
        boundaryGap: false,
        data: [1,2,3,4,5,6,7],
      },
      yAxis: {
        x: 'center',
        type: 'value',
        splitLine: {
          lineStyle: {
            type: 'dashed'
          }
        }
      },
      series: [{
        name: '',
        type: 'line',
        smooth: true,
        data: [100,500,300,400,800,200,700],
        areaStyle: {
          color: '#00E298',
          origin: 'start',
          shadowColor: '#fff',
          shadowOffsetX: 1,
          opacity: 0.5
        },
        itemStyle: {
          normal: {
            color: "#00E298",
            lineStyle: {
              color: "#00E298"
            }
          }
        },
      }]
    };
    this.setData({ option })
    this.initChart()
  },

  methods: {
    async initChart(canvas, width, height, dpr) {
      this.echartsComponnet.init((canvas, width, height, dpr) => {
        // 初始化图表
        const Chart = echarts.init(canvas, null, {
          width: width,
          height: height,
          devicePixelRatio: dpr // new
        });
        Chart.setOption(this.data.option);
        // 注意这里一定要返回 chart 实例，否则会影响事件处理等
        return Chart;
      });
    },
  }
});
