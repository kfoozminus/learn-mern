const fs = require("fs");
fs.writeFile("example.txt", "hey this is me", (err)=>{
    if(err)
        console.log(err);
    else {
        console.log("file written successfully");
        fs.readFile("example.txt", "utf8", (err, file)=>{
            if(err)
                console.log(err);
            else {
                console.log("read successfully");
                console.log(file);
            }
        });
    }
});