const user={
    username:"suraj",
    loginCount:8,
    signedIn:true,

    getUserDeatails:function(){
        // console.log("Got user deatails from database");
        // console.log(`Username:${this.username}`);
        console.log(this)
    }
}



// console.log(user.username);
// console.log(user.getUserDeatails());
// console.log(this)


function User(username,loginCount,isLoggedIn){
    this.username=username;
    this.loginCount=loginCount;
    this.isLoggedIn=isLoggedIn;

    this.greeting=function(){
        console.log(`Welcome ${this.username}`);
    }

    // return this
}

const userOne=new User("Archana",12,true)
const usertwo= new User("suraj",14,true)

// console.log(userOne);
// console.log(usertwo);

console.log(userOne.constructor);





