import { NestFactory } from '@nestjs/core';
import helmet from 'helmet';
import csurf from 'csurf';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({ allowedHeaders: '*', credentials: true });
  app.use(helmet());
  app.use(csurf());
  await app.init();
  return app.getHttpAdapter().getInstance();
}

export default bootstrap;
