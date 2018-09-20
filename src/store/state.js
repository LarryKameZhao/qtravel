let defaultCity = '苏州'
try {
  if (localStorage.city) {
    defaultCity = localStorage.city
  }
} catch (e) {

}
function initAV () {
  var AV = require('leancloud-storage')
  var APP_ID = 'vrTIT7Lpa0iSLJuhTAa0YmNW-gzGzoHsz'
  var APP_KEY = '0Wspun9TbXKn1EvF1tWbrknW'
  AV.init({
    appId: APP_ID,
    appKey: APP_KEY
  })
  return AV
}
let AV = initAV()
export default {
  city: defaultCity,
  AV
}
