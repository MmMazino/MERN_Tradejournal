import express from "express"
import bodyParser from "body-parser"
import mongoose from "mongoose"
import cors from "cors"
import dotenv from "dotenv"
import authRoutes from "./routes/auth.js"
import userRoutes from "./routes/users.js"
import { register } from "./controllers/auth.js"

const app = express()
app.use(express.json());
dotenv.config();
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

/* ROUTES*/
app.use("/auth", authRoutes);
app.post("/auth/register", register)
app.use("/users", userRoutes);

app.get("/hello",(req,res)=>{
    res.send("hello world")
})

const PORT = process.env.NODE_LOCAL_PORT || 3020
mongoose.connect(process.env.MONGO_URL
).then(() => {
    app.listen(PORT, () => console.log(`Server is running on Port:${PORT}`))
}).catch((error) => console.log(`${error} did not connect`));

