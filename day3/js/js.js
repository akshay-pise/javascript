console.log("arithmatic operation a=10 and b=20 c=30");
var a=10, b=20, c=30;
console.log("Addition a + b = ",a+b);
console.log("subs b - a = ",b-a);
console.log("multi a * b = ",a*b);
console.log("div a / b = ",a/b);
console.log("Module a % b = ",a%b);
console.log("");
console.log("before increment",a);
console.log("Prefix Increment a = ",++a);
console.log("after increment",a);
console.log("");
console.log("before increment",b);
console.log("Prefix Decrememt a = ",--b);
console.log("after increment",b);
console.log("");
console.log("before increment",a);
console.log("Postfix Increment a++ = ",a++);
console.log("after increment",a);
console.log("");
console.log("before increment",b);
console.log("Postfix Decrememt b-- = ",b--);
console.log("after increment",b);
console.log("");

console.log("comparison  operater a=10 and b=20 c='30'");
var a=10, b=20, c="10";
console.log("Double equal to a == c = ",a==c);

console.log("Not double equal to a != c = ",a!=c);

console.log("Triple equal to a === c = ",a===c);
console.log("Not triple equal to a !== c = ",a!==c);
console.log("less than a < b = ",a<b);
console.log("greter than a > b = ",a>b)
console.log("less than equal a <= b = ",a<=b);
console.log("greter than eual a >= b = ",a>=b);

var a=10, b=20, c="10";
console.log("logical operater a=10 and b=20 c='30'");
console.log("logical and (a < b)&&(a==c) = ",(a<b)&&(a==c));
console.log("logical and (a > b)&&(a==c) = ",(a>b)&&(a==c));
console.log("logical and (a < b)||(a==c) = ",(a<b)||(a==c));
console.log("logical and (a > b)||(a==c) = ",(a>b)||(a==c));
console.log("logical Not (a!b)",!(a<=c));


var a=10, b=20, c="10";
console.log("Assignment operators a=10, b=20, c='10'");
console.log("a+=1",a+=1);
console.log("a-=2",a-=2);
console.log("a*=2",a*=2);
console.log("a/=2",a/=2);
console.log("a%=2",a%=2);

console.log("Ternary operator z=5,x=6,v='5'");
var z=5,x=6,v='5';
var s = x > z? z : x;
console.log("var s = x > z? z : x; =",s);
var d = z >x? z : x;
console.log("var d = z >x? z : x; =",d);

var d=10,f=20;
d>f ? console.log("d is greeter") : console.log("f is greeter");

if(d>f){
    console.log("d is greeter")
}
else{
    console.log("f is greeter");
}



function clic(){
    // console.log("click is working");
    var demoInnerText=document.getElementById("demo").innerHTML;
    console.log(demoInnerText);
document.getElementById("demoo").innerHTML="new text jnvhvbbdnfvcmkl";

}