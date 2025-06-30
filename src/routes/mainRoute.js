import { Router } from "express";
import middlewareOne from "../middleware/middleware.js";


const mainRoute = Router()

mainRoute.get('/', middlewareOne)

export default mainRoute;