import { NestFactory } from '@nestjs/core';
import * as cors from 'cors';

import { AppModule } from './app.module';

async function bootstrap() {
  const port = process.env.TASK_SERVICE_PORT || 8000;

  const app = await NestFactory.create(AppModule);
  app.use(cors());
  await app.listen(port);

  console.log('--- Backend running on port: ', port)
}

bootstrap();
