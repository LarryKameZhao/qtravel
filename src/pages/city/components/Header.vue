<template>
  <div class="header">
      城市选择
      <router-link to="/">
        <div class="header-back">
            <svg class="icon back-icon" aria-hidden="true">
            <use xlink:href="#icon-fanhui"></use>
            </svg>
        </div>
      </router-link>
  </div>
</template>

<script>
export default {
  name: 'CityHeader'
}
</script>

<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
  .header
    overflow: hidden
    height: $headerHeight
    line-height: $headerHeight
    text-align: center
    color: #fff
    background: $bgColor
    font-size: .32rem
    .header-back
      width: .64rem
      float: left
      .back-icon
        text-align: center
        font-size: .4rem
        color: #ffffff

</style>
