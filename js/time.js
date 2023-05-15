
var a=document.querySelectorAll('.h');
var b=document.querySelectorAll('.m');
var c=document.querySelectorAll('.s');
var d=document.querySelector('.date');
var e=document.querySelectorAll('.day span');
var m=document.querySelectorAll('.mon span');
var f=document.querySelectorAll('.ap span');


setInterval(func,1000);
function func(){
var main = new Date();
console.log(main);
var hour = main.getHours();
var min = main.getMinutes();
var sec = main.getSeconds();
min=(min<10)?'0'+min:min;
hour=(hour<10)?'0'+hour:hour;
sec=(sec<10)?'0'+sec:sec;
min=min.toString();
hour=hour.toString();
sec=sec.toString();
console.log(hour,min,sec);
a[0].innerHTML=hour[0];
a[1].innerHTML=hour[1];
b[0].innerHTML=min[0];
b[1].innerHTML=min[1];
c[0].innerHTML=sec[0];
c[1].innerHTML=sec[1];

var d1 = main.getDate();
var d2 = main.getMonth();
var d3 = main.getFullYear();
d1=(d1<10)?'0'+d1:d1;
d2=(d2<10)?'0'+d2:d2;
d3=(d3<10)?'0'+d3:d3;
d1=d1.toString();
d2=d2.toString();
d3=d3.toString();

d.innerHTML= `${d1}-${d2}-${d3}`;
e[main.getDay()].classList.add('open');
m[main.getMonth()].classList.add('open');

if(hour<12){
    f[0].classList.add('open');
}
else{
    f[1].classList.add('open');
}





}
