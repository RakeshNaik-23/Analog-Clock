let hour=document.getElementById("hour")
let min=document.getElementById("min")
let sec=document.getElementById("sec")

function clock()
{
    let date=new Date();
    let h=date.getHours();
    let m=date.getMinutes();
    let s=date.getSeconds();


    let hh=30*h+m/2;

    let mm=6*m;

    let ss=6*s;

    hour.style.transform=`rotate(${hh}deg)`
    min.style.transform=`rotate(${mm}deg)`
    sec.style.transform=`rotate(${ss}deg)`
}
clock()

setInterval(()=>
{
    clock()
},1000);