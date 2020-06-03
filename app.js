var express=require('express')
const server=express()
server.listen(8000,function()
 {
    console.log("server started Listening....")
});



server.get("/",function(req,res)
{
    res.sendFile(__dirname+"/home.html")
})


server.get("/contactus",function(req,res)
{
    res.sendFile(__dirname+"/contactus.html")
})
