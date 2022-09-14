
var today = new Date();
var headingDate=today.getHours() + " : " + today.getMinutes() + " : " + today.getSeconds();
var time= today.getHours();
document.getElementById("realfulltime").innerHTML=headingDate

if(time<12 && time>=0){
    document.getElementById("realtime").innerHTML="Good Morning";
}
else if(time>12 && time<15){
    document.getElementById("realtime").innerHTML="Good Afternoon";
}
else if(time>15 && time<18){
    document.getElementById("realtime").innerHTML="Good Evening";
}
else{
    document.getElementById("realtime").innerHTML="Good Night";
}


