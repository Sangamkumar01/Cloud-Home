const mongoose = require("mongoose");

const uri = process.env.DB_URI;;


// let dbURL = uri.replace("<username>", process.env.DB_USERNAME);
//     dbURL = dbURL.replace("<password>", process.env.DB_PASSWORD);
//     dbURL = dbURL.replace("<dbName>", process.env.DB_NAME);


mongoose
    .connect(uri)
    .then(() =>{
    console.log("--------DB Connected------");
})
.catch((err) =>{
    console.log("DB Connect Failed");
    console.log(err);
});
