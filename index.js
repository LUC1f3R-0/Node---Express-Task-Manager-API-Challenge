import app from "./src/app.js";
import sequelize from "./src/config/database.connection.config.js";



(async () => {
    try {
        await sequelize.authenticate();
        console.log("---- DATABASE CONNECTION SUCCESSFUL ----")

        app.listen(2000, () => console.log("server runs on http://localhost:2000"))
    } catch (err) {
        console.log("---- DATABASE CONNECTION FAIL ----")
        console.error("Message:", err.message);
        console.error("Code:", err.original?.code);
        process.exit(1);
    }
})();