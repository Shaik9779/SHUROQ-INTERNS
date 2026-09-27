// const express = require("express");
// const cors = require("cors");
// require("dotenv").config();

// const app = express();

// app.use(cors());
// app.use(express.json());

// app.get("/", (req, res) => {
//     res.json({
//         message: "Shuroq Internship API is running 🚀"
//     });
// });

// const PORT = process.env.PORT || 5000;

// app.listen(PORT, () => {
//     console.log(`Server running on port ${PORT}`);
// });
const dns = require("dns");

dns.setServers(["8.8.8.8", "8.8.4.4"]);

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const applicationRoutes = require("./routes/applicationRoutes");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());
app.use("/api/applications", applicationRoutes);
app.get("/", (req, res) => {
    res.json({
        message: "Shuroq Internship API is running 🚀"
    });
});

mongoose
    .connect(process.env.MONGO_URI)
    .then(() => {
        console.log("MongoDB connected ✅");

        const PORT = process.env.PORT || 5000;

        app.listen(PORT, () => {
            console.log(`Server running on port ${PORT}`);
        });
    })
    .catch((error) => {
        console.error("MongoDB connection failed ❌");
        console.error(error.message);
    });