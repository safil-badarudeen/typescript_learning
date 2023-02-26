type combined = string | number;

function add(numberONe: number | string, numberTwo :number| string){
    if(typeof numberONe === 'number' && typeof numberTwo === 'number'){
        return numberONe + numberTwo
    }else{
        return numberTwo.toString() + numberONe.toString()
    }
}


console.log(add(5,3))
console.log(add("hello","world"))