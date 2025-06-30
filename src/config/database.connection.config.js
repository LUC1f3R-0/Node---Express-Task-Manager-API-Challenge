import { Sequelize } from 'sequelize';
import 'dotenv/config';


const sequelize = new Sequelize(process.env.DATABASE_URL, process.env.DATABASE_USER, process.env.DATABASE_PASS, {
    host: 'localhost',
    dialect: 'postgres',
});

sequelize.sync({ alter: process.env.NODE_ENV == 'development' })

export default sequelize;