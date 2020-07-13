//jshint esversion:6
const express=require("express");
const bodyParser = require("body-parser");
var date=require(__dirname+"/date.js");
const app=express();
var items=["Buy Food","Cook Food","Eat Food"];
let workItems=[];
app.use(express.static("public"));
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended:true}));
app.get("/",function(req,res)
{
var day=date.getDate()

  res.render("list",{listTitle:day,newListItems:items});

});
app.post("/",function(req,res){
var item=req.body.newItem;
if(req.body.list==="Work List")
{
  workItems.push(item);
  res.redirect("/work");
}
else{
  items.push(item);
    res.redirect("/");
}

}
);
app.get("/work",function(req,res)
{
  res.render("list",{listTitle:"Work List",newListItems:workItems});

})
app.get("/about",function(req,res)
{
  res.render("about");
});
app.post("/work",function(req,res)
{
  let items=req.body.newItem;
  workItems.push(item);
  res.redirect("/work");
})
app.listen(3000,function()
{
  console.log("Server started on port 3000");
});
