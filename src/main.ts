import { NestFactory } from '@nestjs/core';
import { Logger } from '@nestjs/common';

import { AppModule } from './app.module';

import 'dotenv/config';

const port = process.env.PORT;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(port);
  Logger.log(`Server started running onhttp://localhost:${port}`, 'Bootstrap');
}
bootstrap();
