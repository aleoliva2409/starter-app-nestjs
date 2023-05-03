import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import { CORS } from './constants';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const port = app.get(ConfigService).get('PORT');

  app.enableCors(CORS);
  // console.log(process.cwd());
  app.setGlobalPrefix('api');

  await app.listen(port, () => {
    console.log(`Application running on: ${port}`);
  });
}

bootstrap();
