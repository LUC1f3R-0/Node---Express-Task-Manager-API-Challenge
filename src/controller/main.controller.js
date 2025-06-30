
const testController = (request, response) => {
    try {
        return response.status(200).json({ success: true, message: "main route running" });
    } catch (error) {
        console.error(error);
        return response.status(500).json({ success: false, message: "Internal server error" });
    }
}

export default testController;