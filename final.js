var info=JSON.parse(localStorage.getItem("item2"))
var trip=JSON.parse(localStorage.getItem("item"))

$("img").prop("src",trip[0]["image"]).css("width","200")
$(".name").text("firstName:"+info["name"])
$(".lastname").text("lastName:"+ info["lastname"])
$(".prix").text("prix: "+trip[0]["prix"]+"dt")
$(".class").text("class: "+ trip[0]["class"])


