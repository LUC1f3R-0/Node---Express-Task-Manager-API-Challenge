import Task from "../../models/Task.model.js";
import User from "../../models/User.model.js";


const createTask = async (request, response) => {
    // console.log('task controller => createTask function running')
    try {
        const { title, userId } = request.body;

        if (!title || !userId) { return response.status(400).json({ success: false, message: 'Title and userId are required' }) }

        const user = await User.findByPk(userId);
        if (!user) return response.status(404).json({ success: false, message: "User not found" });

        const task = await Task.create({ title, userId });

        return response.status(201).json({ success: true, message: "new task created", data: task });
    } catch (err) {
        console.error(err);
        response.status(500).json({ success: false, message: "Failed to create task" });
    }
};

export default createTask;