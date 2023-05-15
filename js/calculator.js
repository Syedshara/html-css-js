var a=document.querySelector('.screen');
var b1=document.querySelectorAll('.b1');
var b2=document.querySelectorAll('.b2');

var c=document.querySelectorAll('.num span');
var d=document.querySelectorAll('.w .cal span');
var e=document.querySelector('.w .num .l');
var t=0;
var t1=1;
b1[0].addEventListener('click',function(){
    a.innerHTML='0'
    t=0;
    t1=1;
});

b1[1].addEventListener('click',function(){
    a.innerHTML=''
    t=0;
    t1=1;
});
b1[2] .addEventListener('click',function(){
    if (a.innerHTML!=''){
        a.innerHTML='0';
        
    }
    t=0;
    t1=1;
    
});
b2[1] .addEventListener('click',function(){
    if (a.innerHTML!=''){
        console.log(a.innerHTML)
        a.innerHTML=a.innerHTML.slice(0,(a.innerHTML.length)-1);
        
    }
    t=0;
    t1=1;
    
});
c[0].addEventListener('click',function(){
    if (a.innerHTML!=''){
        
    a.innerHTML+=c[0].innerHTML;
    }
    
});
c[1].addEventListener('click',function(){
    if (a.innerHTML!=''){
        if(a.innerHTML=='0'){
            a.innerHTML='';
        }
    a.innerHTML+=c[1].innerHTML;
    }
    
});
c[2].addEventListener('click',function(){
    if (a.innerHTML!=''){
        if(a.innerHTML=='0'){
            a.innerHTML='';
        }
    a.innerHTML+=c[2].innerHTML;
    }
    
});
c[3].addEventListener('click',function(){
    if (a.innerHTML!=''){
        if(a.innerHTML=='0'){
            a.innerHTML='';
        }
    a.innerHTML+=c[3].innerHTML;
    }
    
});
c[4].addEventListener('click',function(){
    if (a.innerHTML!=''){
        if(a.innerHTML=='0'){
            a.innerHTML='';
        }
    a.innerHTML+=c[4].innerHTML;
    }
    
});
c[5].addEventListener('click',function(){
    if (a.innerHTML!=''){
        if(a.innerHTML=='0'){
            a.innerHTML='';
        }
    a.innerHTML+=c[5].innerHTML;
    }
    
});
c[6].addEventListener('click',function(){
    if (a.innerHTML!=''){
        if(a.innerHTML=='0'){
            a.innerHTML='';
        }
    a.innerHTML+=c[6].innerHTML;
    }
    
});
c[7].addEventListener('click',function(){
    if (a.innerHTML!=''){
        if(a.innerHTML=='0'){
            a.innerHTML='';
        }
    a.innerHTML+=c[7].innerHTML;
    }
    
});
c[8].addEventListener('click',function(){
    if (a.innerHTML!=''){
        if(a.innerHTML=='0'){
            a.innerHTML='';
        }
    a.innerHTML+=c[8].innerHTML;
    }
    
});
c[9].addEventListener('click',function(){
    if (a.innerHTML!=''){
        if(a.innerHTML=='0'){
            a.innerHTML='';
        }
    a.innerHTML+=c[9].innerHTML;
    }
    
});

d[0].addEventListener('click',function(){
    for(var i=(a.innerHTML.length)-1;i>0;i--){
        if(!isNaN(parseFloat(a.innerHTML[i]))){
                   continue
            
        }
        else{
            break
        }
    }
    t=parseInt(a.innerHTML.slice(i))+t;
    console.log(t);
    if (a.innerHTML!=''){
        if(a.innerHTML=='0'){
            a.innerHTML='';
        }
    a.innerHTML+=d[0].innerHTML;
    }
    
   

    
});
d[1].addEventListener('click',function(){
    if(!isNaN(parseFloat(a.innerHTML[i1]))){
    for(var i1=(a.innerHTML.length)-1;i1>0;i1--){
        if(!isNaN(parseFloat(a.innerHTML[i1]))){
                   continue
            
        }
        else{
            break
        }
    }
}   
console.log(t)
    t=parseInt(a.innerHTML.slice(i1))-t;
    console.log(t);
    if (a.innerHTML!=''){
        if(a.innerHTML=='0'){
            a.innerHTML='';
        }
    a.innerHTML+=d[1].innerHTML;
    }
    
   

    
});
d[2].addEventListener('click',function(){
    for(var i2=(a.innerHTML.length)-2;i2>0;i2--){
        if(!isNaN(parseFloat(a.innerHTML[i2]))){
                   continue
            
        }
        else{
            break
        }
    }
    t1*=parseInt(a.innerHTML.slice(i2));
    console.log(t1);
    if (a.innerHTML!=''){
        if(a.innerHTML=='0'){
            a.innerHTML='';
        }
    a.innerHTML+=d[2].innerHTML;
    }
    
   

    
});
d[3].addEventListener('click',function(){
    for(var i3=(a.innerHTML.length)-1;i3>0;i3--){
        if(!isNaN(parseFloat(a.innerHTML[i3]))){
                   continue
            
        }
        else{
            break
        }
    }
    console.log(t1);
    t1=parseInt(a.innerHTML.slice(i3))/t1
    console.log(t1);
    if (a.innerHTML!=''){
        if(a.innerHTML=='0'){
            a.innerHTML='';
        }
    a.innerHTML+=d[3].innerHTML;
    }
    
   

    
});

e.addEventListener('click',function(){
    for(var j=(a.innerHTML.length)-1;j>0;j--){
        if(!isNaN(parseFloat(a.innerHTML[j]))){
                   continue
            
        }
        else {
                break;
        }
        
    }

    if(a.innerHTML[j].toString()==d[0].innerHTML.toString()){
            
        t+=parseFloat(a.innerHTML.slice(j));
        a.innerHTML=t
        console.log(t);
        ;}

        else if(a.innerHTML[j].toString()==d[1].innerHTML.toString()){
            t-=parseFloat(a.innerHTML.slice(j+1));
            a.innerHTML=t
            console.log(t);
            t=0;}
            else if(a.innerHTML[j].toString()==d[2].innerHTML.toString()){
                t1*=parseFloat(a.innerHTML.slice(j+1));
                console.log(t1);
                a.innerHTML=t1
                t1=1;
                
    
            }
            else if(a.innerHTML[j].toString()==d[3].innerHTML.toString()){
                console.log(a.innerHTML.slice(j+1))
                t1/=Number(a.innerHTML.slice(j+1));
                console.log(t1);
                a.innerHTML=t1;
                t1=1;
                
    
            }
        t=0;
        t1=1;
    
  

    
});
