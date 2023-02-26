const persons : {
    name: string;
    age: number;
    food: string[];
    roles: [number, string]
}={
    name : "safil",
    age : 33,
    food : ["cheese", "orange"],
    roles: [1,"safil"]
}
persons.roles.push("hahaha")

let newArray : string[] ;
newArray = ["hello","who"]

console.log(persons.roles)
