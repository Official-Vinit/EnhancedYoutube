import dotenv from "dotenv";

dotenv.config({
    path: "./.env"
});

import dns from "node:dns";
dns.setServers(["8.8.8.8", "8.8.4.4"]);

import connectDB from "./db/index.js";
import app from "./app.js";

connectDB()
.then(()=>{
    app.listen(process.env.PORT||8000,()=>{
        console.log(`Server is running at port ${process.env.port}`)
    })
})
.catch((err=>{
    console.log("MongoDB connection failed ",err);
}))