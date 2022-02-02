import fs from "fs";

const writer = fs.createWriteStream("target.log");

writer.write("Bima\n");
writer.write("Putra\n");
writer.write("Lamanda\n");
writer.end();

const reader = fs.createReadStream("target.log");
reader.addListener("data", (data) => {
    console.info(data.toString());
})
