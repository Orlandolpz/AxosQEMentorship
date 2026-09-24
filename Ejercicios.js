let testname = "Orlando Lopez";
let age = 30;
let boolean = true;
let arrayhobbies = ["basquetbol", "beisbol", "soccer"];
let date = new Date("2026-09-21T00:00:00");

let object = {
    username: "orlopez",
    password: "12345#",
};

console.log("Name: " + testname);
console.log("Age: " + age);
console.log("Active credentials: " + boolean);
console.log("Hobbies: " + arrayhobbies);
console.log("Date: " + date.toLocaleDateString("es-MX"));
console.log("Credentials: " + JSON.stringify(object));