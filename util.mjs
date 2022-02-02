import util from "util";

const firstName = "Bima";
const middleName = "Putra";

console.info(`Hello ${firstName} ${middleName}`);
console.info(util.format("Hello %s %s", firstName, middleName));

const person = {
    firstName: "Bima",
    middleName: "Putra"
};

console.info(`Person ${JSON.stringify(person)}`);
console.info(util.format("Person %j", person));

