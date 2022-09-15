const express = require("express");
const app = express();
const PORT = 4000;
app.get('/', (req, res) => {
    res.send("Hey Hai To Epic Family And Welcome To All Innovation Day")
});
app.listen( PORT, () => console.log("Server is listening to port" + PORT ));
