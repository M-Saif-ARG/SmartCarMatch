const mongoose = require("mongoose");
mongoose.connect(process.env.URI).then(() => { console.log("connection is successfull") }).catch((err) => console.log("no connection"));