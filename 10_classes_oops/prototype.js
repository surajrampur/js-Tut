let myName="Suraj Saini"

// console.log(myName.length)
// console.log(myName.trueLength);


let myHeros=["thor","spiderman"]

let heroPower={
    thor:"hammer",
    spiderman:"sling",

    getSpiderPower:function(){
        console.log(`Spidy Piwer is ${this.spiderman}`);
    }
}

Object.prototype.suraj=function(){
    console.log(`suraj is present in all object`)
}


Array.prototype.heySuraj=function(){
    console.log(`say hey suraj`)
}
// heroPower.suraj();
myHeros.suraj();
// heroPower.heySuraj();
myHeros.heySuraj();


// inheritance
const User={
    name:"chai"
}
const Teacher={
    makeVideo:true
}

const TeacherSupport={
    inAvailable:false
}

const TASupport={
    makeAssigment:'js Assignment',
    fullTime:true,
    __proto__:TeacherSupport
}

Teacher.__proto__=User

//Modern syntax

Object.setPrototypeOf(TeacherSupport,Teacher)

let anotherUserName="Chai or Code"
String.prototype.trueLength=function(){
    console.log(`${this}`);
    console.log(`${this.name}`);
    console.log(`True length is:${this.trim().length}`);
}
anotherUserName.trueLength();
"Suraj".trueLength();
"Archana".trueLength();