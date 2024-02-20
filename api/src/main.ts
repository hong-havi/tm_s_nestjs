import { NestFactory } from '@nestjs/core';
import { ConfigService } from '@nestjs/config';
import { TSwaggerConfig } from './_config/config.type';
import { SwaggerModule } from '@nestjs/swagger';

import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);  

  const configService = app.get(ConfigService); // Env config get
  const PORT: number = configService.get<number>('HTTP_PORT');
 
  const swaggerConfig = configService.get<TSwaggerConfig>('swagger');
  const document = SwaggerModule.createDocument(
    app,
    swaggerConfig.config,
    swaggerConfig.options
  );
  SwaggerModule.setup('api-docs', app, document, swaggerConfig.customOptions);

  await app.listen(PORT);
}
bootstrap();
