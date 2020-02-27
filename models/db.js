var express = require('express');
var mysql = require('mysql');

var con = mysql.createConnection({
    host: 'localhost',
	user: 'root',
	password: '',
	database: 'prac'
});


module.exports.insertuser = function(username,password,type,callback){
    var query ="insert into `registration` (`username`,`password`,`type`) values ('"+username+"','"+password+"','"+type+"')";
    con.query(query,callback);
    console.log(query);
}

module.exports.getbyid = function(id,callback){
    var query = "select * from `registration` where id = "+id;
    con.query(query,callback);
}

module.exports.login = function(username,password,callback){

    var query = "select *from `registration` where `username`='"+username+"' and `password`='"+password+"'";
    con.query(query,callback);
    console.log(query);
}

module.exports.getalluser = function(callback){
    var query = "select * from registration";
    con.query(query,callback);
}

module.exports.edit = function(id,username,password,type,callback){
   var query = "update `registration` set `username`='"+username+"',`password`='"+password+"' `type`='"+type+"' where id="+id;
   con.query(query,callback);
   console.log(query);
}

module.exports.gettype = function(id,callback){
    var query = "select type from registration where id = "+id;
    con.query(query,callback);
}

module.exports.adduser = function(username,password,type,callback){
    var query = "insert into `registration` (`username`,`password`,`type`) values ('"+username+"','"+password+"','"+type+"')";
    con.query(query,callback);
}