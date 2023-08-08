
var res={}
var genre=$("#select").val()
var name=$("#name").val()
var lastname=$("#lastname").val()
var email=$("#email").val()
var naissance=$("#naissonce").val()
var cin=$("#cin").val()
var passport=$("#passport").val()
var phone=$("#phone").val()
var input=$("input")

var items=JSON.parse(localStorage.getItem("item"))
console.log(items);

$("#btnconfirm").on("click",function(){
for (var i=0;i<input.length;i++){
    console.log(i)
    if(input[i].value===""){
        var str=`fill this fields ${input[i].placeholder} `
        $("h1").text(str)
       break
        // console.log("fill this fields "+input[i].placeholder)
    }else {
res[input[i].placeholder]=input[i].value
$(location).attr("href","finalresult.html")

    }

}


localStorage.setItem("item2",res)
console.log(localStorage.setItem("item2",JSON.stringify(res)));




})

$(".carcont").html(
`<div class="card ">
<img src="${items[0]["image"]}" >
<p> depart : ${items[0]["depart"]}  </p>
<p> arrive : ${items[0]["arrivee"]}   </p>
<p> price :  ${items[0]["prix"]} dt </p>
<p> class : ${items[0]["class"]}  </p>
</div>`
)

$("#btnback").on("click",function(){

    $(location).attr("href","reservation.html")


})

