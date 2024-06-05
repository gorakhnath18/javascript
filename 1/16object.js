//console.log("papa");
// single ton

//object literals
//or object.create
//const mysym = symbol("key1")

const jsuser ={
    name: "ram",
    "full name":"goram",
    //[mysym]:"key1",
    age:19,
    location: "jaipur",
    email:"Aborgamil.com",
    isloggedin: false,
    lastloginday:["monday","tuesday"]
}
console.log(jsuser.email);
console.log(jsuser["full name"]);
//console.log(jsuser[mysym]);
//change
jsuser.email="abcdefgh.com"
//Object.freeze(jsuser)
jsuser.email="jcdskvjsdc.com"
//console.log(jsuser);

//addfunctions
jsuser.greeting =function(){
    console.log("helloworld");
}
jsuser.greeting2= function(){
    console.log(`hellp, ${this.name}`);
}
console.log(jsuser.greeting());
console.log(jsuser.greeting2());
