var session=require('express-session');
var express=require('express');
var fs=require('fs');
var parseurl=require('parseurl');
var path=require('path');
var FileStore=require('./fileStore');
var app=express();

/*
var options={
pathname:"yinping",

};*/
path="yinping";
/*

function FileStore(pathname){
var isexit=fs.existsSync('./'+pathname);
console.log("isexit: "+isexit);
if(!isexit){
fs.mkdirSync(pathname,0777);
}
};
*/

app.use(session({
store:FileStore.dir(path),
//store:new FileStore(path),
secret:'201181n',
name:'yinping'
}));

app.use(function(req,res,next){
console.log("cookie: "+JSON.stringify(req.session.cookie));
console.log("sessionid: "+JSON.stringify(req.sessionID));
var sessionid=JSON.stringify(req.sessionID);

/*fs.open("./sessions/hi.txt","w",function(err,fd){
if(!err){
fs.close(fd);
});*/

var dirpath="./"+path+"/";
var configTxt=JSON.stringify(req.session);
var options={encoding:'utf8',flag:'w'};
fs.writeFile( dirpath+req.sessionID + ".json",configTxt,options,function(err){
if(err){
console.log("failed");
}
});


next();
});
app.get('/',function(req,res,next){
res.send('hello');
});

app.listen(2231);
