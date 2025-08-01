console.log("Hello")

setTimeout(() =>{
    console.log("Timeout 1")
}, 2000);

setTimeout(() =>{
    console.log("Timeout 2")
}, 2000);


console.log("After func")

const callback = (arg) =>{
    console.log(arg);
}

const loadScript = (src, callback)=>{
    let sc = document.createElement("script");

    sc.src = src;
    sc.onload = callback("Harry");
    document.head.append(sc)
}

loadScript("https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/prism.min.js" , callback)