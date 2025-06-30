import { DataTypes } from "sequelize";
import sequelize from "../config/database.connection.config.js";
import User from "./User.model.js";

const Task = sequelize.define('Task', {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true, },

    title: { type: DataTypes.STRING, allowNull: false, },

    completed: { type: DataTypes.BOOLEAN, defaultValue: false, },

    userId: { type: DataTypes.INTEGER, allowNull: false, references: { model: 'Users', key: 'id', }, onDelete: 'CASCADE', },

}, {
    timestamps: true,
});


User.hasMany(Task, { foreignKey: 'userId', onDelete: 'CASCADE' });
Task.belongsTo(User, { foreignKey: 'userId' });

export default Task;