const { readFile, writeFile } = require("fs");

readFile("./content/name.txt", "utf8", (error, result) => {
    if (error) {
        console.log(error);
        return;
    }

    const name = result;
    readFile("./content/job.txt", "utf8", (error, result) => {
        if (error) {
            console.log(error);
            return;
        }

        const job = result;
        writeFile(
            "./content/result-async.txt",
            `${name} is a ${job}`,
            (error, result) => {
                if (error) {
                    console.log(error);
                    return;
                }
                console.log(result);
            },
        );
    });
});
