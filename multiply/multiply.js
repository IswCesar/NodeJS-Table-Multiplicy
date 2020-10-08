const fs = require("fs");
const colors = require("colors");

let createFile = (base, limit = 10) => {
    return new Promise((resolve, reject) => {
        if (!Number(base)) {
            reject("Base value is not a number");
            return;
        }

        let data = "";
        limit += 1;
        for (let i = 1; i < limit; i++) {
            data += `${base} * ${i} = ${i * base}\n`;
        }
        limit -= 1;
        fs.writeFile(`tables/table-${base}-to-${limit}.txt`, data, (err) => {
            if (err) reject(err);
            else resolve(`table-${base}-to-${limit}`);
        });
    });
};

let listFile = (base, limit = 10) => {
    return new Promise((resolve, reject) => {
        if (!Number(base)) {
            reject("Base value is not a number");
            return;
        }

        if (!Number(limit)) {
            reject("Limit value is not a number");
            return;
        }
        limit += 1;
        console.log("==========================".green);
        console.log(`Table ${base}`.red);
        console.log("==========================".green);
        for (let i = 1; i < limit; i++) {
            console.log(`${base} * ${i} = ${i * base}`);
        }
    });
};

module.exports = {
    createFile,
    listFile,
};