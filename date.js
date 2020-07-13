//jshint esversion:6
module.exports.getDate=function()
 {
var today= new Date();
var currentDay = today.getDay();
 var options={weekday:"long",
day:"numeric",
month:"long"};
return day=today.toLocaleDateString("en-US",options);
}
