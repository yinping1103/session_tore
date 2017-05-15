var fs = require('fs');
var session=require('express-session');
var express=require('express');


exports.dir=function(pathname){
var isexit=fs.existsSync('./'+pathname);
console.log("isexit: "+isexit);
if(!isexit){
fs.mkdirSync(pathname,0777);
}
}

