var a=24;
console.log(24);
const b={
    name1:"syed",
    age:23,
    profile:{
       career1:{
        now1:'web'
       }

    }
}
console.log(b?.profile?.career1?.now)

const c={
    func:function(){
        console.log('hi')
    }
}
c.func();
const c1={
    func(){
        console.log('hi')
    }
}
c1.func();
const c2={
    func:()=>{
        console.log('hi')
    }
}
c1.func();

//this is the keyword which refers the current object keep in mind

var f={
    age:45,
    fun1(){
        
        console.log(this.age);
            console.log(this);
        function fun2(){
            
            console.log(this.age);
            console.log(this);
            
        }
        fun2();
        const fun3 = ()=>{

            console.log(this.age);
            console.log(this);
            
            
        }
        fun3();

    }
}
f.fun1();

//call function used to call the function along with the object.
// apply can call the function with array variable
// bind is used to store the function in a variable
 // main thing they are used to share the function
 //to create a object with the reference of previous object in that case we can create the object using Object.create(previoue object name(reference))
   