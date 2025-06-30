import express from 'express';
import mainRoute from './routes/mainRoute.routes.js';
import cors from 'cors';
import 'dotenv/config'


const app = express();

app.use(express.json())
app.use(cors({ origin: process.env.CLIENT_ORIGIN, credentials: true }))

app.use("/api", mainRoute)


export default app;