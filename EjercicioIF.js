let age = "0";

console.log("Age: " + age);

if (age <=0) {  
console.error("error: age must be greater than 0");}

 else if (age >= 0 && age < 3) {
    console.log("Baby");}

else if (age >= 3 && age < 11) {
    console.log("Child");}

else if (age >= 11 && age < 18) {
    console.log("Teenager");}

 else if (age >= 18 && age < 60) {
    console.log("Adult");}
   
 else if (age >= 60) {
    console.log("Senior");
}


