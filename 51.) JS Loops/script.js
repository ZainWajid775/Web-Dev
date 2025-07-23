console.log("Hello World")

let a = 1;

for (let i = 0; i < 10; i++) {
    console.log(a+i);    
}

let obj ={
    name: "John",
    age: 30,
    role: "Programmer"
}

for (const key in obj){
    const element = obj[key];
    console.log(key,element)
}

for (const c of "Zain")
{
    console.log(c)
}

let i = 5;

while(i < 6){
    console.log(i);
    i++;
}

do{
    console.log(i);
    i++;
}while(i<6);