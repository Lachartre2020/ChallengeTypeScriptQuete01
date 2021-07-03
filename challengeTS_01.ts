function hello(name: string) {
    console.log("Hello " + name);
}

var firstName:string  = "Bob"; 	

hello(firstName);
hello(firstName + " marley");

function concat(a : string, b : string) {
    return a + b;
}

var wcs = concat("Wild", concat("Code", "School"));
console.log(wcs);
