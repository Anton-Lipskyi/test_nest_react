import { DataSource } from 'typeorm';
import { config } from 'dotenv';

config();

const dbType = process.env.DATABASE_TYPE as 'mysql';
const user = process.env.DATABASE_USER;
const password = process.env.DATABASE_PASSWORD;
const dbName = process.env.DATABASE_NAME;
const dbHost = process.env.DATABASE_HOST;
const dbPort = parseInt(process.env.DATABASE_PORT);

export default new DataSource({
    type: dbType,
    username: user,
    password: password,
    database: dbName,
    host: dbHost,
    port: dbPort,
    entities: [
        __dirname + '/../**/*.entity.{ts,js}',
    ],
    migrations: [ __dirname + '/../migrations/*.{ts,js}' ],
});
