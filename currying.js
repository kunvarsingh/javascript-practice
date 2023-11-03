// Let's understand the currying concepts

// CONCEPT 1
// using bind method
function multiply(x,y){
    console.log('Multiply Is =',x*y);
}

const multiplyByTwo = multiply.bind(this,7); // we are creating the copy of the multiply method here and creating the more method out of this
multiplyByTwo(2);
// const multiplyByThree = multiply.bind(this,3);
// multiplyByThree(10)


// CONCEPT 2
// using closure
let add = (a)=>{
    return (b)=>{
        console.log('Add is=',a+b)
    }
}
const sum = add(2)
sum(3)
// add(2)(3)