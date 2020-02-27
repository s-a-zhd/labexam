var express = require('express');
var router = express.Router();
var db = require('../models/db');
var bodyParser = require('body-parser');
var session = require('express-session');

module.exports = router;

router.get('/edit/:id',function(req,res){
    var id = req.params.id;
    db.getbyid(id , function(err,result){
        console.log(result);
        res.render('edit.ejs',{user : result});
    })

});

router.post('/edit/:id',function(req,res){
    var id = req.params.id;
    
    var username =req.body.username;
    var password=req.body.password;
    var type=req.body.type;

        
    
    db.edit(id,username,password,type,function(err,result){
        console.log(result);
            //res.render('admin.js');
            res.redirect('back');
        });
    });

router.get('/add',function(req,res){
    res.render('add');
});

router.post('/add',function(req,res){
    var username = req.body.username;
    var password = req.body.password;
    var type = req.body.type;
    db.adduser(username,password,type,function(err,result){
    res.redirect('back');
    });
});