<template>
 <div>
  <city-header></city-header>
  <city-search :cities="cities"></city-search>
  <city-list :cities="cities" :hotCities="hotCities" :letter="letter"></city-list>
  <city-alphabet :cities="cities" @change="handleLetterChange"></city-alphabet>
 </div>
</template>

<script>
import CityHeader from './components/Header'
import CitySearch from './components/Search'
import CityList from './components/List'
import CityAlphabet from './components/Alphabet'
// import axios from 'axios'
export default{
  name: 'City',
  components: {
    CityHeader,
    CitySearch,
    CityList,
    CityAlphabet
  },
  data () {
    return {
      cities: {},
      hotCities: [],
      letter: ''
    }
  },
  methods: {
    getCityInfo () {
      // axios.get('/api/city.json')
      //   .then(this.handleGetCity)
      var AV = this.$store.state.AV
      var query = new AV.Query('TestObject')
      query.get('5ba2d3047f6fd3005b51da0d').then(
        this.handleGetCity, function (error) {
          console.log(error)
        })
    },
    handleGetCity (res) {
      console.log(res)
      res = JSON.parse(res.attributes.words)
      if (res && res.ret) {
        const data = res.data
        this.cities = data.cities
        this.hotCities = data.hotCities
      }
    },
    handleLetterChange (letter) {
      this.letter = letter
    }
  },
  mounted () {
    this.getCityInfo()
  }
}
</script>
<style lang="stylus" scoped>
</style>
