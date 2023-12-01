const fs = require("fs");

fs.writeFile("./text8.txt", "Ciao a tutti! creato con Node.js", (err, data) => {
    if (err) {
        console.log(err);
    }
  
})