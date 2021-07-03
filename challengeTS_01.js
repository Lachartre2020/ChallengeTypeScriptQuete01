function hello(name) {
    console.log("Hello " + name);
}
var firstName = "Bob";
hello(firstName);
hello(firstName + " marley");
function concat(a, b) {
    return a + b;
}
var wcs = concat("Wild", concat("Code", "School"));
console.log(wcs);
