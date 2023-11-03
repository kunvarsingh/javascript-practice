let name = {
    firstName:'Kunvar',
    lastName:'Singh',
    getFullName: function(){
        console.log(this.firstName+' '+this.lastName);
    }
}
name.getFullName()


let modifiedName = {
    firstName:'Elly',
    lastName:'Singh'
}

// CALL
// using call method we can function borrowing
name.getFullName.call(modifiedName);
// here in this case, getFullName (this) is pointing to modifiedName obj


// In most of the case, if we need to invoke that function into some other function then we usually to define outside.
let name1 = {
    firstName:'Kunvar',
    lastName:'Singh',
}
let getFullName = function(){
    console.log(this.firstName+' '+this.lastName);
}
getFullName.call(name1)


// How we can pass the explicitly argument
let name2 = {
    firstName:'Kunvar',
    lastName:'Singh',
}
let getFullName2 = function(address){
    console.log(this.firstName+' '+this.lastName+' '+address);
}
getFullName2.call(name2,'India')


// NOTE : the only difference between call and apply is (to passing the way arguments)
let name3 = {
    firstName:'Kunvar',
    lastName:'Singh',
}
let getFullName3 = function(address){
    console.log(this.firstName+' '+this.lastName+' '+address);
}
getFullName3.apply(name3,['India'])


// NOTE : BIND :  the only difference between bind and call is (it copy the method into object first and then return an object) that we need to call explictly
let name4 = {
    firstName:'Kunvar',
    lastName:'Singh',
}
let getFullName4 = function(address,state){
    console.log(this.firstName+' '+this.lastName+' '+address+' '+state);
}
const details = getFullName4.bind(name2,'India','uttar pradesh')
details()

