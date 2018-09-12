<template>
    <div>
    <div class="header">
      <div class="header-left">
        <svg class="icon back-icon" aria-hidden="true">
           <use xlink:href="#icon-fanhui"></use>
        </svg>
      </div>
      <div class="header-input">
        <svg class="icon" aria-hidden="true">
           <use xlink:href="#icon-sousuo"></use>
        </svg>
        输入城市景点游玩
      </div>
      <router-link to="/city">
        <div class="header-right">
          {{this.city}}
          <svg class="icon arrow-icon" aria-hidden="true">
              <use xlink:href="#icon-jiantouxia"></use>
          </svg>
        </div>
      </router-link>
    </div>
    </div>
</template>

<script>
export default {
  name: 'HomeHeader',
  props: {
    city: String
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
  .header
    display: flex
    line-height: $headerHeight
    background: $bgColor
    color:#fff
    .header-left
      width: .64rem
      float:left
      .back-icon
        text-align: center
        font-size: .4rem
    .header-input
      flex: 1
      height: .64rem
      line-height: .64rem
      margin-top: .12rem
      margin-left: .2rem
      padding-left: .2rem
      background: #fff
      border-radius: .1rem
      color: #ccc
    .header-right
      width: 1.24rem
      float: right
      text-align: center
      color: white
      .arrow-icon
        font-size: .24rem
        margin-left: -.04rem
</style>
