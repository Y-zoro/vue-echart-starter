<template>
  <div>
    <el-button @click="goHome()" round>home</el-button>
     <div  class="line-chart">
      <v-chart :options="polar" />
    </div>
    <div class="v-chart">
      <v-chart :options="option" />
    </div>
  </div>
</template>
<script>
// 按需引入
import echarts from 'echarts'
import 'echarts/lib/chart/line'
import 'echarts/lib/component/polar'
import chinaMap from './china.json'
export default {
  name: 'Echarts',
  data () {
    const data = []
    for (let i = 0; i <= 360; i++) {
      const t = i / 180 * Math.PI
      const r = Math.sin(2 * t) * Math.cos(2 * t)
      data.push([r, i])
    }
    return {
      polar: {
        title: {
          text: '极坐标双数值轴'
        },
        legend: {
          data: ['line']
        },
        polar: {
          center: ['50%', '54%']
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'cross'
          }
        },
        angleAxis: {
          type: 'value',
          startAngle: 0
        },
        radiusAxis: {
          min: 0
        },
        series: [
          {
            coordinateSystem: 'polar',
            name: 'line',
            type: 'line',
            showSymbol: false,
            data: data
          }
        ],
        animationDuration: 2000
      },
      option: {
        backgroundColor: '#030f24',
        legend: {
          show: false
        },
        title: {
          left: 'center',
          textStyle: {
            color: '#fff',
            fontSize: 20,
            textBorderColor: '#00b4ff',
            textBorderWidth: 10,
            textShadowColor: '#000',
            textShadowBlur: 5,
            textShadowOffsetX: 5,
            textShadowOffsetY: 3
          },
          padding: [60, 0, 0, 0],
          subtext: '中国地图',
          subtextStyle: {
            color: '#fff',
            fontSize: 24
          }
        },
        geo: {
          roam: true,
          top: '10%',
          zoom: 1.2,
          map: 'chinaMap',
          itemStyle: {
            normal: {
              color: '#323C48',
              borderColor: '#0366A8',
              borderWidth: 3
            },
            emphasis: {
              areaColor: '#20EDFF',
              textStyle: {
                color: '#fff',
                fontSize: 16
              }
            }
          },
          label: {
            normal: {
              show: true,
              textStyle: {
                color: '#fff',
                fontSize: 16
              }
            },
            emphasis: {
              textStyle: {
                color: '#fff',
                fontSize: 16
              }
            }
          }
        },
        series: [{
          roam: true,
          type: 'map',
          map: 'chinaMap',
          geoIndex: 0,
          zoom: 1,
          label: {
            normal: {
              show: true,
              textStyle: {
                color: 'rgba(0, 0, 0, 0.87)',
                fontSize: 16
              }
            },
            emphasis: {
              show: true,
              textStyle: {
                color: '#000',
                fontSize: 16
              }
            }
          },
          emphasis: {
            label: {
              show: true
            }
          },
          itemStyle: {
            normal: {
              areaColor: '#999999',
              borderColor: '#0366A8',
              borderWidth: 3
            },
            emphasis: {
              areaColor: '#20edff'
            }
          }
        }]
      }
    }
  },
  created () {
    echarts.registerMap('chinaMap', chinaMap)
  },
  methods: {
    goHome () {
      this.$router.push('/')
    }
  }
}
</script>
<style lang="scss" scoped>
  .echarts {
    width: 100%;
    height: 100%;
  }
  .v-chart {
    width: 100%;
    height: 700px;
  }
  .line-chart {
    display: inline-block;
    width: 400px;
    height: 200px;
  }
</style>
