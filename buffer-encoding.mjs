const buffer = Buffer.from("Bima Putra", "utf8");

console.info(buffer.toString("base64"));
console.info(buffer.toString("hex"));

const buffer2 = Buffer.from("QmltYSBQdXRyYQ==", "base64");
console.info(buffer2.toString("utf8"))