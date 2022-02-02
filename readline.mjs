import process from "process";
import readLine from "readline";

const input = readLine.createInterface({
    input: process.stdin,
    output: process.stdout
})

input.question("Siapa nama anda? ",  (name) => {
    console.info(`Hello ${name}`);
    input.close();
})