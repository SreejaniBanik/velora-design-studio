const Lead = require("./models/Lead");
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
.then(() => {
    console.log("MongoDB Connected");
})
.catch((error) => {
    console.log(error);
});

app.get("/", (req, res) => {
    res.send("Backend Running");
});

app.post("/add-lead", async (req, res) => {

    try {

        const newLead = new Lead({
            name: req.body.name,
            phone: req.body.phone,
            business: req.body.business,
            message: req.body.message
        });

        await newLead.save();

        res.status(201).json({
            message: "Lead Saved Successfully"
        });

    }

    catch (error) {

        console.log(error);

        res.status(500).json({
            message: "Server Error"
        });

    }

});

const PORT = 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});