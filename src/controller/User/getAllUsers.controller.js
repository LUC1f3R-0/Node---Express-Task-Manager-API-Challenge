
import User from "../../models/User.model.js";

const getAllUsers = async (request, response) => {
    // console.log("user controller =>getAllUsers function is running")
    try {
        const users = await User.findAll();
        return response.status(200).json({ success: true, data: users });
    } catch (error) {
        console.error('Error fetching users:', error);
        return response.status(500).json({ success: false, message: 'Internal server error' });
    }
};

export default getAllUsers