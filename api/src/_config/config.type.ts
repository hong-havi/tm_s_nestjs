import {
    OpenAPIObject,
    SwaggerCustomOptions,
    SwaggerDocumentOptions
  } from '@nestjs/swagger/dist/interfaces';
  
  export type TSwaggerConfig = {
    config: Omit<OpenAPIObject, 'paths'>;
    options: SwaggerDocumentOptions;
    customOptions: SwaggerCustomOptions;
  };
  