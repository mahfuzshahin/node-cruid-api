const express = require("express")
const cors = require("cors");
const router = require("./router");
const mongoose = require("mongoose");
const PORT = 8000;
const app = express();
const MONGODB_URL='mongodb+srv://mrshahin94:808055Ss@crudapi.npcdshl.mongodb.net/?retryWrites=true&w=majority';

app.listen(PORT, async ()=>{
    console.log(`server up on port ${PORT}`);
    mongoose.connect(MONGODB_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        .then(() => {
            console.log("Connected to MongoDB");
        })
        .catch((err) => {
            console.log(err);
        });
})
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(router);

