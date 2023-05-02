import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModuleAsyncOptions, TypeOrmModuleOptions } from '@nestjs/typeorm';

export default class TypeOrmConfig {
    static getOrmConfig(configService: ConfigService): TypeOrmModuleOptions {

        const dbType = process.env.DATABASE_TYPE as 'mysql';
        const user = process.env.DATABASE_USER;
        const password = process.env.DATABASE_PASSWORD;
        const dbName = process.env.DATABASE_NAME;
        const dbHost = process.env.DATABASE_HOST;
        const dbPort = parseInt(process.env.DATABASE_PORT);

        return {
            type: dbType,
            username: user,
            password: password,
            database: dbName,
            host: dbHost,
            port: dbPort,
            autoLoadEntities: true,
            entities: [
                __dirname + '/../**/*.entity.{ts,js}',
            ],
            migrations: [ __dirname + '/../**/migrations/*.{ts,js}' ],
            // synchronize: true,
            //   logging: true,
        };
    }
}

export const typeOrmConfigAsync: TypeOrmModuleAsyncOptions = {
    imports: [ConfigModule],
    useFactory: async (configService: ConfigService): Promise<TypeOrmModuleOptions> => TypeOrmConfig.getOrmConfig(configService),
    inject: [ConfigService]
};
