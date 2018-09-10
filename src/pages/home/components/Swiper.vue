<template>
  <div class="wrapper">
  <swiper :options="swiperOption">
    <swiper-slide v-for="item of swiperList" :key="item.id" >
        <img class="swiper-img" :src="item.imgUrl" />
    </swiper-slide>
    <div class="swiper-pagination"  slot="pagination"></div>
  </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeSwiper',
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        loop: true
      },
      swiperList: [{
        id: '0001',
        imgUrl: '//i.loli.net/2018/09/10/5b965a06b71c8.jpg'
      }, {
        id: '0002',
        imgUrl: '//i.loli.net/2018/09/10/5b965a06b71c8.jpg'
      }, {
        id: '0003',
        imgUrl: '//i.loli.net/2018/09/10/5b965a994e226.jpg'
      }, {
        id: '0004',
        imgUrl: '//i.loli.net/2018/09/10/5b965a9958b48.jpg'
      }]
    }
  }
}
</script>

<style lang="stylus" scoped>
  .wrapper >>> .swiper-pagination-bullet-active
    background: #fff
  .wrapper
    overflow: hidden
    width: 100%
    height: 0
    background: #eee
    padding-bottom: 26.7%
    .swiper-img
        width: 100%
</style>
