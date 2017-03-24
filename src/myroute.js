define(['router','jquery'],function(Router,$){


  var router = new Router()

  .route('#/home', function(req, next){

       require(['src/home/home.js'],function(home){
                home.add();
                home.getData();
       })

  })
  .route('#/lists', function(req, next){
         require(['src/list/list.js'],function(list){
                list.add();
       })
  })
  .route('#/cart', function(req, next){
          console.log('购物车')
          $("#container").html('<h1>购物车</h1>')
  })
  .route('#/mine', function(req, next){
          console.log('个人中心')
          $("#container").html('<h1>个人中心</h1>')
  })


})
