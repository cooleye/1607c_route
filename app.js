require.config({
  baseUrl:'/',
  paths:{
    router:'lib/router.min',
    myroute:'src/myroute',
    jquery:'/lib/jquery-1.12.4.min',
    text:'lib/text',
    css:'lib/css.min'
  }
})

// 程序入口
require(['myroute'],function(){

    location.hash = '#/home'

})
