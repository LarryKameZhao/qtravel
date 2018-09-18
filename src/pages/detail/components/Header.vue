<template>
   <div>
       <router-link tag="div" to="/" class="header-abs" v-show="showAbs">
               <svg class="icon header-abs-back" aria-hidden="true">
                <use xlink:href="#icon-fanhui"></use>
                </svg>
       </router-link>
       <div class="header-fixed" v-show="!showAbs" :style="opacityStyle">
           <router-link to="/">
            <div class="header-fixed-back">
              <svg class="icon back-icon" aria-hidden="true">
              <use xlink:href="#icon-fanhui"></use>
              </svg>
            </div>
          </router-link>
          景点详情
       </div>
   </div>
</template>

<script>
export default {
  name: 'DetailHeader',
  data () {
    return {
      showAbs: true,
      opacityStyle: {
        opacity: 0
      }
    }
  },
  methods: {
    handleScroll () {
      const top = document.documentElement.scrollTop
      if (top > 60) {
        this.showAbs = false
        let opacity = top / 140
        opacity = opacity > 1 ? 1 : opacity
        this.opacityStyle = {
          opacity
        }
      } else {
        this.showAbs = true
      }
    }
  },
  activated () {
    window.addEventListener('scroll', this.handleScroll)
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
  .header-abs
    position: absolute
    left: .2rem
    top: .2rem
    width: .8rem
    height: .8rem
    line-height: .8rem
    border-radius: .4rem
    background: rgba(0,0,0,0.6)
    text-align: center
    .header-abs-back
      fill: #fff
      font-size: .4rem
  .header-fixed
    position: fixed
    top: 0
    left: 0
    right: 0
    line-height: $headerHeight
    text-align: center
    color: #fff
    background: $bgColor
    overflow hidden
    font-size: .32rem
    .header-fixed-back
      position: absolute
      float: left
      width: .64rem
      line-height: .4rem
      padding: .23rem
      .back-icon
        text-align: center
        fill: #ffffff
        font-size: .4rem
</style>
