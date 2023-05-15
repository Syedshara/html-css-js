const hour=document. querySelector('.n1'); 
const minute=document.querySelector ('.n2'); 
const second=document.querySelector ('.n3');
setInterval (runClock, 1000);
function runClock(){
const time=new Date();
const sec=time.getSeconds()/60;
const min=(sec+time.getMinutes())/60; 
const hrs=(min+time.getHours())/12;
hour .style.setProperty ('--rotate', hrs*360); 
minute.style.setProperty ('--rotate', min*360);
second.style. setProperty('--rotate',sec*360);
}
runClock();