import Task from "../../models/Task.model.js";
import User from "../../models/User.model.js";

export const getAllTasks = async (request, response) => {
    // console.log("task controller => getAllTasks function running")
    try {
        const tasks = await Task.findAll({ include: { model: User, attributes: ['id', 'name', 'email'], }, order: [['id', 'ASC']] });

        return response.status(200).json({ success: true, data: tasks });
    } catch (err) {
        console.error(err);
        return response.status(500).json({ success: false, message: "Failed to fetch tasks" });
    }
};

export default getAllTasks;