import { NestFactory } from '@nestjs/core';
import helmet from 'helmet';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    allowedHeaders: '*',
    credentials: true,
    origin: 'https://anjoman-register.netlify.app/',
    // methods: '*',
  });
  // app.use(cors());
  app.use(helmet());
  await app.listen(3000);
}
bootstrap();
