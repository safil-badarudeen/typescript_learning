function adding( one: number , two : number):number{
    const result= one + two;
    return result
}

function printing(one: number, two: number,word: string):void{
    console.log( one, two, word)
}

// callback inte ulil vare engane type kodkaaam enn ithhil kaanam
function addHandle(one:number, two:number, cb: (result:number)=>void){
    console.log(one,two);
    const result= one + two;
    cb(result)
}

// let addValues : Function // i have assigned a function to this addValues
// addValues = adding
// ith function nu value assign cheythath , but ivde preshnam eath function value assign
//  cheythaalum number edkunna ella function um work , so explicitly namal  function nu 
// assign cheyyunnath aanu next

let addValues :(a: number,b: number)=> number
addValues = adding
console.log(addValues(11,2))

addHandle(10,20, (result)=> console.log("result",result))