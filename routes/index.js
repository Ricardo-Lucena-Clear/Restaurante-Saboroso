var conn = require('./../inc/db')
var express = require('express');

var router = express.Router();
var menus = require ('./../inc/menus')

/* GET home page. */
router.get('/', function(req, res, next) {
  menus.getMenus().then(results=>{

    res.render('index', { title: 'Restaurante Saboroso', menus: results, isHome: true });

  })
    
  })

router.get('/contacts', function(req, res, next){
  res.render('contacts',{
    title: 'Contato - Restaurante Saboroso',
    background: 'images/img_bg_3.jpg',
    h1: 'Diga um oi!',
    isHome: true
  });
});

router.get('/menus', function(req, res, next){
  menus.getMenus().then(results=>{
     res.render('menus',{
    title: 'Menus - Restaurante Saboroso',
    background: 'images/img_bg_1.jpg',
    h1: 'Saboreie nosso menu!',
    menus: results,
    isHome: true
  })
 
  });
});
router.get('/reservations', function(req, res, next){
  res.render('reservations',{
    title: 'Reserva - Restaurante Saboroso',
    background: 'images/img_bg_2.jpg',
    h1: 'Reserve uma Mesa!',
    isHome: true
  });
});
router.get('/services', function(req, res, next){
  res.render('services',{
    title: 'Serviços - Restaurante Saboroso',
    background: 'images/img_bg_1.jpg',
    h1: 'É um prazer poder servir!',
    isHome: true
  });
});

module.exports = router;
