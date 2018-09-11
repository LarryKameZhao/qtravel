<template>
  <div class="icons">
   <swiper>
   <swiper-slide v-for="(page,index) of pages" :key="index">
    <div class="icon" v-for="item of page" :key="item.id">
    <div class="icon-img">
      <img class="icon-img-content" :src="item.imgUrl" />
    </div>
      <p class="icon-desc">{{item.desc}}</p>
    </div>
    </swiper-slide>
  </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeIcons',
  data () {
    return {
      iconList: [{
        id: '0001',
        imgUrl: '//i.loli.net/2018/09/10/5b9673bebcf1f.png',
        desc: '景点门票'
      }, {
        id: '0002',
        imgUrl: '//i.loli.net/2018/09/10/5b9673beaa98c.png',
        desc: '古镇'
      }, {
        id: '0003',
        imgUrl: '//i.loli.net/2018/09/10/5b9673bed95eb.png',
        desc: '一日游'
      }, {
        id: '0004',
        imgUrl: '//i.loli.net/2018/09/10/5b9673bed1d33.png',
        desc: '苏州必玩'
      }, {
        id: '0005',
        imgUrl: '//i.loli.net/2018/09/10/5b9673bed048d.png',
        desc: '水上乐园'
      }, {
        id: '0006',
        imgUrl: '//i.loli.net/2018/09/10/5b9673bebec4f.png',
        desc: '汽车票'
      }, {
        id: '0007',
        imgUrl: '//i.loli.net/2018/09/10/5b9673beaa98c.png',
        desc: '古镇'
      }, {
        id: '0008',
        imgUrl: '//i.loli.net/2018/09/10/5b9673bee1c82.png',
        desc: '拙政园'
      }, {
        id: '0009',
        imgUrl: '//i.loli.net/2018/09/10/5b9673bee1c82.png',
        desc: '拙政园1'
      }]
    }
  },
  computed: {
    pages () {
      const pages = []
      this.iconList.forEach((item, index) => {
        const page = Math.floor(index / 8)
        if (!pages[page]) {
          pages[page] = []
        }
        pages[page].push(item)
      })
      return pages
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
  @import '~styles/mixins.styl'
    .icons >>> .swiper-container
      height: 0
      padding-bottom: 50%
    .icons
      margin-top: 0.1rem
      .icon
        height:0
        position: relative
        overflow: hidden
        float: left
        width: 25%
        padding-bottom: 25%
        .icon-img
          position:absolute
          top: 0
          left: 0
          right: 0
          bottom: .44rem
          box-sizing: border-box
          padding: .1rem
          .icon-img-content
            height: 100%
            display: block
            margin: 0 auto
        .icon-desc
          position: absolute
          left: 0
          right: 0
          bottom: 0
          height: .44rem
          line-height: .44rem
          text-align: center
          color: $darkTextColor
          ellipsis()
</style>
