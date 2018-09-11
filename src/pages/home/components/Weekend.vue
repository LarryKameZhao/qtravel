<template>
    <div>
      <div class="recommend-title">周末去哪儿</div>
      <ul>
        <li class="item border-bottom" v-for="item of recommendList" :key="item.id">
            <div class="item-img-wrapper">
                <img class="item-img" :src="item.imgUrl" >
            </div>
          <div class="item-info">
            <p class="item-title">{{item.title}}</p>
            <p class="item-desc">{{item.desc}}</p>
          </div>
        </li>
      </ul>
    </div>
</template>

<script>
export default {
  name: 'HomeWeekend',
  data () {
    return {
      recommendList: [
        {
          id: '0001',
          imgUrl: '//i.loli.net/2018/09/11/5b977c20071dd.jpg',
          title: '苏州必游top10',
          desc: '苏州必须要留下足迹的10个坐标'
        },
        {
          id: '0002',
          imgUrl: '//i.loli.net/2018/09/11/5b977c1a7e15d.jpg',
          title: '细嗅历史的气息',
          desc: '阅尽沧桑，不变的是恬静，待君细细品味'
        },
        {
          id: '0003',
          imgUrl: '//i.loli.net/2018/09/11/5b977c1e99e20.jpg',
          title: '寻魅力江南古镇',
          desc: '发呆静思，度过一个悠闲的下午'
        },
        {
          id: '0004',
          imgUrl: '//i.loli.net/2018/09/11/5b977c1909f03.jpg',
          title: '古典园林逛个够',
          desc: '如果是第一次来苏州，园林是一定要逛的'
        },
        {
          id: '0005',
          imgUrl: '//i.loli.net/2018/09/11/5b977c200b6c2.jpg',
          title: '山青水秀之地',
          desc: '钟情于山水之间，别有一番雅致'
        }
      ]
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/mixins.styl';

.recommend-title
  margin-top: 0.2rem
  line-height: 0.4rem
  background: #ccc
  text-indent: 0.2rem
.item-img-wrapper
  overflow: hidden
  height: 0
  padding-bottom: 37.09%
  .item-img
    width: 100%
.item-info
  padding: .1rem
  .item-title
    line-height: 0.54rem
    font-size: 0.32rem
    ellipsis()
  .item-desc
    line-height: 0.4rem
    color: #ccc
    ellipsis()
</style>
