import { Router } from "express";
import loggerMiddleware from "../middleware/loggerMiddleware.js";
import getAllTasks from "../controller/Task/getAllTasks.controller.js";
import createTask from "../controller/Task/createTask.controller.js";
import getAllUsers from "../controller/User/getAllUsers.controller.js";
import testController from "../controller/main.controller.js";
import createUser from "../controller/User/createUser.controller.js";
import toggleTaskCompletedStatus from "../controller/Task/toggleTaskCompletedStatus.controller.js";

const mainRoute = Router()

mainRoute.use(loggerMiddleware);

mainRoute.get('/', testController)
mainRoute.post('/users', createUser)
mainRoute.get('/users', getAllUsers)
mainRoute.post('/tasks', createTask)
mainRoute.get('/tasks', getAllTasks)
mainRoute.patch('/tasks/:id', toggleTaskCompletedStatus)

export default mainRoute;