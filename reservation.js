
// coutries
var travels=[
        {
            image :"img/fr.jpeg",
            depart :  "Tunis"   ,
            arrivee : "France"  ,
            prix:2300,
            adultes:0,
            class:"firstclass",
        },
        {
            image:"img/fr.jpeg",
            depart :  "Tunis"   ,
            arrivee : "France"  ,
            prix:1700,
            adultes:0,
            class:"economic"
        },
        {
            image:"img/belg.jpeg",
            depart :  "Tunis"   ,
            arrivee : "Belguim"  ,
            prix:2000,
            adultes:0,
            class:"firstclass"
        },
        {
            image:"img/belg.jpeg",
            depart :  "Tunis"   ,
            arrivee : "Belguim"  ,
            prix:1800,
            adultes:0,
            class:"economic"
        },
        {
            image:"img/america.jpeg",
            depart :  "Tunis"   ,
            arrivee : "America"  ,
            prix:3000,
            adultes:0,
            class:"firstclass"
        },
        {
            image:"img/america.jpeg",
            depart :  "Tunis"   ,
            arrivee : "America"  ,
            prix:2800,
            adultes:0,
            class:"economic"
        },
        {
            image:"img/jap.jpeg",
            depart :  "Tunis"   ,
            arrivee : "Japan"  ,
            prix:1400,
            adultes:0,
            class:"firstclass"
        },
        {
            image:"img/jap.jpeg",
            depart :  "Tunis"   ,
            arrivee : "Japan"  ,
            prix:1000,
            adultes:0,
            class:"economic"
        },
        {
            image:"img/italy.jpeg",
            depart :  "Tunis"  ,
            arrivee : "Italy"  ,
            prix:700,
            adultes:0,
            class:"economic"
        },
        {
            image:"img/italy.jpeg",
            depart :  "Tunis"  ,
            arrivee : "Italy"  ,
            prix:1500,
            adultes:0,
            class:"firstclass"
        },
        {
            image:"img/bras.jpeg",
            depart :  "Tunis"   ,
            arrivee : "brasil"  ,
            prix:1900,
            adultes:0,
            class:"firstclass"
        },
        {
            image:"img/bras.jpeg",
            depart :  "Tunis"   ,
            arrivee : "brasil"  ,
            prix:1400,
            adultes:0,
            class:"economic"
        },
        {
            image:"img/makkah.jpeg",
            depart :  "Tunis",
            arrivee : "Arabie saoudite"  ,
            prix:2500,
            adultes:0,
            class:"firstclass"
        },
        {
            image:"img/makkah.jpeg",
            depart :  "Tunis",
            arrivee : "Arabie saoudite"  ,
            prix:2000,
            adultes:0,
            class:"economic"
        },
        {
            image:"img/den.jpeg",
            depart :  "Tunis"   ,
            arrivee : "denmark"  ,
            prix:1950,
            adultes:0,
            class:"firstclass"
        },
        {
            image:"img/den.jpeg",
            depart :  "Tunis"   ,
            arrivee : "denmark"  ,
            prix:1450,
            adultes:0,
            class:"economic"
        },
        {
            image:"img/ger.jpeg",
            depart :  "Tunis"   ,
            arrivee : "germany"  ,
            prix:1600,
            adultes:0,
            class:"firstclass"
        },
        {
            image:"img/ger.jpeg",
            depart :  "Tunis"   ,
            arrivee : "germany"  ,
            prix:1000,
            adultes:0,
            class:"economic"
        }
]


//when you want a round trip date 
$("#arrcheck").on("click",function(){  
$(".depart").css("display","block")
$(".date").css("display","flex")
})

// after choosing and click on the search button

$("#depcheck").on("click",function(){  
    $(".depart").hide()
})
var filtred=[]
$("#button").on("click",function(){
    var  depart= $("#depart").val()   
    var  arrive = $("#arrivee").val()
    var  select = $("#myselect").val()
    var  datedep= $("#datdep").val()
    var datearr = $(".depart").val()
 filtred=  filter(travels,function(element,i){
 return  depart.toLowerCase()===element.depart.toLowerCase() && arrive.toLowerCase()===element.arrivee.toLowerCase() &&select===element.class

})
//store the date of the trip 
localStorage.setItem("item",filtred)
console.log(localStorage.setItem("item",JSON.stringify(filtred)));
console.log(filtred)
for (var key in filtred){
    //if only one date 
    if(datearr===""){
$(".carcont").append(
    `<div class="card ">
    <img src="${filtred[key].image}" >
    <p> departure : ${filtred[key].depart}  </p>
    <p> arrive : ${filtred[key].arrivee}   </p>
    <p> price :  ${filtred[key].prix} dt </p>
    <p> class : ${filtred[key].class}  </p>
    <p> date : ${datedep} </p>
</div>`
)}else {
    //round trip
    $(".carcont").append(
        `<div class="card ">
        <img src="${filtred[key].image}" >
        <p> departure : ${filtred[key].depart}  </p>
        <p> arrive : ${filtred[key].arrivee}   </p>
        <p> price :  ${filtred[key].prix} dt </p>
        <p> class : ${filtred[key].class}  </p>
        <p> date : ${datedep} </p>
        <p> date arrive : ${datearr} </p>
    </div>`
)}
}
if (filtred.length===0){
    alert("not found")
}
//one search 
$("#depart").val("")   
 $("#arrivee").val("")
 $("#myselect").val("")
 $("#datdep").val("")
 $(".depart").val("")
})
//when you pick your choice you go to the acceuil page
$(".carcont").on("click",function(){
    $(location).attr("href","acceuil.html")
})

//functions you need
function each (coll,f){
    if(Array.isArray(coll)){
        for (var i = 0; i < coll.length; i++){
            f(coll[i],i)
        }
    }
    else {
        for(var key in coll){
            f(coll[key],key)
        }
    }

}

function filter(array, predicate) {
    var acc = [];
    each(array, function(element) {
        if (predicate(element)) {
            acc.push(element);
        }
    });
    return acc;
}