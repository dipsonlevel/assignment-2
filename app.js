// const school = "odagsi"

// const students = 115

// const logic = students === 123 || school === "ipele"

// console.log(logic)
// OBJECT IN JAVASCRIPT

const door = {
isopen: false,
material: "wood", 
height:8,
toogleOpenAndClose: function(){
    if(door.isopen===true){
    door.isopen=false
    }else{
     door.isopen=true
    }
}
}
door.toogleOpenAndClose()
console.log(door.isopen)
