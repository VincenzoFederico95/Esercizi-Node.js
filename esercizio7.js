const figlet = require("figlet");

figlet(("Wecome to my figlet terminal"),  (error, data) => {
    if(err) {
        console.log("Something went wrong!");  
        console.dir(error)
        return
    }

    console.log(data);
})