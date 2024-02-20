import { DocumentBuilder } from '@nestjs/swagger';
import { TSwaggerConfig } from './../config.type';

/**
 * Swagger Config
 *
 */
export function SwaggerConfig() {
  return <TSwaggerConfig>{
    config: new DocumentBuilder()
      .setTitle(`테스트 API swagger - ${process.env.NODE_ENV}`)
      .setDescription('테스트 API')
      .setVersion('1.0')
      .addServer('http://localhost:3001')
      .build(),
    options: {
      //extraModels: [Dto]
    },
    customOptions: {
      swaggerOptions: {
        persistAuthorization: true, // 새로고침해도 token 값 유지
        docExpansion: 'list', // Swagger 문서 펼침여부 String=["list"*, "full", "none"]
        tagsSorter: 'alpha', // 정렬 순서
      }
    }
  }
}
