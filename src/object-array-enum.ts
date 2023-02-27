enum Role {ADMIN,USER,GROUP} 

const persons ={
    name : "safil",
    age : 33,
    food : ["cheese", "orange"],
    role: Role.ADMIN
}

let newArray : string[] ;
newArray = ["hello","who"]

console.log("first role",persons.role);
if(persons.role === Role.ADMIN ){
  console.log(true)
}

