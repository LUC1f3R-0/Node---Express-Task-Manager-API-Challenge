import Task from "../../models/Task.model.js";
import User from "../../models/User.model.js";


const createUser = async (request, response) => {
    // console.log("user controller => createUser function is running")
    try {
        const { name, email } = request.body;
        if (!name || !email) { return response.status(400).json({ success: false, message: 'All fields are required' }) }

        let authName = name.trim();
        let authEmail = email.trim();

        if (!authName || !authEmail) { return response.status(400).json({ success: false, message: 'All fields are required' }) }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailRegex.test(authEmail)) { return response.status(400).json({ success: false, message: 'Invalid email address' }) }

        const existingUser = await User.findOne({ where: { email: authEmail } });

        if (existingUser) { return response.status(409).json({ success: false, message: "Email already registered" }) }

        const newUser = await User.create({ name: authName, email: authEmail });

        return response.status(201).json({ success: true, message: 'User inserted successfully', data: newUser })
    } catch (error) {
        console.error(error);
        return response.status(500).json({ success: false, message: "Internal server error" })
    }
};
export default createUser
