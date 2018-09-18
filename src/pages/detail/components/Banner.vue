<template>
   <div>
       <div class="banner" @click="handleBannerClick">
        <img class="banner-img" src="//i.loli.net/2018/09/17/5b9f65a96c000.jpg" alt="">
        <div class="banner-info">
          <div class="banner-title">沙家浜公园（AAAAA级景区）</div>
          <div class="banner-number">
            <svg class="icon collect" aria-hidden="true">
                <use xlink:href="#icon-collect"></use>
            </svg>100
          </div>
        </div>
    </div>
    <common-gallary :imgs="imgs" v-show="showGallary" @close="handleGallaryClose"></common-gallary>
   </div>
</template>

<script>
import CommonGallary from 'common/gallary/Gallary'
export default {
  name: 'DetailBanner',
  data () {
    return {
      showGallary: false,
      imgs: [
        '//i.loli.net/2018/09/17/5b9f65a953070.jpg',
        '//i.loli.net/2018/09/17/5b9f65a968148.jpg'
      ]
    }
  },
  methods: {
    handleBannerClick () {
      this.showGallary = true
    },
    handleGallaryClose () {
      this.showGallary = false
    }
  },
  components: {
    CommonGallary
  }
}
</script>

<style lang="stylus" scoped>
  .banner
    position: relative
    overflow: hidden
    height: 0
    padding-bottom: 55%
    .banner-img
      width: 100%
    .banner-info
      display: flex
      position: absolute
      left: 0
      right: 0
      bottom: 0
      line-height: .6rem
      color: white
      background-image: linear-gradient(top, rgba(0,0,0,0),rgba(0,0,0,0.6))
      .banner-title
        flex: 1
        font-size: .32rem
        padding: 0 .2rem
      .banner-number
        margin-top: .14rem
        padding: 0 .4rem
        line-height: .4rem
        height: .32rem
        border-radius: .2rem
        background: rgba(0,0,0,0.6)
        font-size: .24rem
        .collect
          font-size: .24rem
</style>
