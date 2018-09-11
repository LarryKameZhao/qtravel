<template>
    <div>
      <div class="recommend-title">热销推荐</div>
      <ul>
        <li class="item border-bottom" v-for="item of recommendList" :key="item.id">
            <img class="item-img" :src="item.imgUrl" >
          <div class="item-info">
            <p class="item-title">{{item.title}}</p>
            <p class="item-desc">{{item.desc}}</p>
            <button class="item-button">查看详情</button>
          </div>
        </li>
      </ul>
    </div>
</template>

<script>
export default {
  name: 'HomeRecommend',
  data () {
    return {
      recommendList: [
        {
          id: '0001',
          imgUrl: '//i.loli.net/2018/09/11/5b972f6326b8f.jpg',
          title: '拙政园',
          desc: '好玩的拙政园,真他妈的好玩的地方,哈哈哈啊哈'
        },
        {
          id: '0002',
          imgUrl: '//i.loli.net/2018/09/11/5b972f6298177.jpg',
          title: '周庄',
          desc: '好玩的周庄,真他妈的好玩的地方,哈哈哈啊哈'
        },
        {
          id: '0003',
          imgUrl: '//i.loli.net/2018/09/11/5b972f62864a5.jpg',
          title: '同里古镇',
          desc: '好玩的同里古镇,真他妈的好玩的地方,哈哈哈啊哈'
        },
        {
          id: '0004',
          imgUrl: '//i.loli.net/2018/09/11/5b972f6272983.jpg',
          title: '狮子林',
          desc: '好玩的狮子林,真他妈的好玩的地方,哈哈哈啊哈'
        },
        {
          id: '0005',
          imgUrl: '//i.loli.net/2018/09/11/5b972f61d2f62.jpg',
          title: '沙家浜',
          desc: '好玩的沙家浜,真他妈的好玩的地方,哈哈哈啊哈'
        },
        {
          id: '0006',
          imgUrl: '//i.loli.net/2018/09/11/5b972f61d31a3.jpg',
          title: '留园',
          desc: '好玩的留园,真他妈的好玩的地方,哈哈哈啊哈'
        },
        {
          id: '0007',
          imgUrl: '//i.loli.net/2018/09/11/5b972f61bfddf.jpg',
          title: '虎丘',
          desc: '好玩的虎丘,真他妈的好玩的地方,哈哈哈啊哈'
        },
        {
          id: '0008',
          imgUrl: '//i.loli.net/2018/09/11/5b972f61bf08f.jpg',
          title: '华谊兄弟电影世界',
          desc: '好玩的华谊兄弟电影世界,真他妈的好玩的地方,哈哈哈啊哈'
        },
        {
          id: '0009',
          imgUrl: '//i.loli.net/2018/09/11/5b972f61a8a1a.jpg',
          title: '寒山寺',
          desc: '好玩的寒山寺,真他妈的好玩的地方,哈哈哈啊哈'
        },
        {
          id: '0010',
          imgUrl: '//i.loli.net/2018/09/11/5b972f612719d.jpg',
          title: '姑苏水上乐园',
          desc: '好玩的水上乐园,真他妈的好玩的地方,哈哈哈啊哈'
        }
      ]
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/mixins.styl';

.recommend-title
  margin-top: 0.2rem;
  line-height: 0.4rem;
  background: #ccc;
  text-indent: 0.2rem;
.item
  display: flex
  height: 1.9rem
  overflow: hidden
.item-img
  width: 1.7rem
  height: 1.7rem
  padding: 0.1rem
.item-info
  flex: 1
  padding: 0.1rem
  min-width: 0
  .item-title
    line-height: 0.54rem;
    font-size: 0.32rem;
    ellipsis()
  .item-desc
    line-height: 0.4rem
    color: #cccccc
    ellipsis()
  .item-button
    line-height: 0.44rem
    margin-top: 0.16rem
    background: #ff9300
    padding: 0 0.2rem
    border-radius: 0.06rem
</style>
