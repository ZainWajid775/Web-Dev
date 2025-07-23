function func(name){
    console.log("Hey " + name);
}

function sum(a,b){
    console.log(a+b);
}

function product(a,b = 22){
    return a*b; 
}

func("Zain");
sum(10,9);

result = product(9,10);
console.log(result);