import express from "express";
import registerRouts from "./routes/Registerroutes.js"
const app = express();

//middlewere
app.use(express.json());

app.use(registerRouts);
export default app;