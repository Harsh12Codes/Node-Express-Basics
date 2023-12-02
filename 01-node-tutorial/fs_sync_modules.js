const { readFileSync, writeFileSync, writeFile } = require("fs");

const name = readFileSync("./content/name.txt", "utf8");
const job = readFileSync("./content/job.txt", "utf8");

writeFileSync("./content/result-sync.txt", `${name} is a ${job}`, {
    flag: "a",
});
