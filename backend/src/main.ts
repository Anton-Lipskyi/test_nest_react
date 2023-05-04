import { NestFactory } from '@nestjs/core';
import * as cors from 'cors';
import { ConfigService } from '@nestjs/config';

import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(cors());
  const config = app.get(ConfigService);
  await app.listen(config.get('app.post'));
}

bootstrap();
