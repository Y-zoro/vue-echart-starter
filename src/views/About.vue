<template>
  <div class="about">
    <h1 class="lp">This is an about page</h1>
    <el-button @click="goHome()" round>home</el-button>
    <baidu-map class="bm-view" :scroll-wheel-zoom="true" :center="center" :zoom="zoom" @ready="handler">
    </baidu-map>
  </div>
</template>
<script>
export default {
  name: 'about',
  data () {
    return {
      center: { lng: 0, lat: 0 },
      zoom: 18
    }
  },
  methods: {
    handler ({ BMap, map }) {
      console.log(BMap, map)
      this.center.lng = 116.404
      this.center.lat = 39.915
      this.zoom = 15
    },
    goHome () {
      this.$router.push('/')
    }
  }
}
</script>
<style lang="scss" scoped>
  .bm-view {
    margin: 20px 0;
    width: 100%;
    height: 500px;
  }
</style>
<style lang="scss">
// 隐藏百度地图 logo
.anchorBL,  .BMap_cpyCtrl {
  display: none !important;
}
</style>
