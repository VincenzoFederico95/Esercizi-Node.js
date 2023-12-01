const fs = require("fs");

fs.writeFile("./text8.txt", "Questo è un file txt creato con Node.js", (err, data) => {
    if (err) {
        console.log(err);
    }
  
})