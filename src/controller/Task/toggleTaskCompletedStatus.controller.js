import Task from "../../models/Task.model.js";


export const toggleTaskCompletedStatus = async (request, response) => {
    // console.log("task controller => toggleTaskCompletedStatus running")
    try {
        const taskId = request.params.id;

        console.log(taskId)

        const task = await Task.findByPk(taskId);
        if (!task) { return response.status(404).json({ success: false, message: 'Task not found' }) };

        task.completed = !task.completed;
        await task.save();

        return response.status(200).json({ success: true, message: 'Task status updated', data: task });
    } catch (error) {
        console.error(error);
        return response.status(500).json({ success: false, message: 'Failed to update task status' });
    }
};

export default toggleTaskCompletedStatus;