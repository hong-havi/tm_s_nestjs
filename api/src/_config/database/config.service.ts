import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from '@nestjs/typeorm';

import { entities } from '../../_entities/entities';

@Injectable()
export class DBConfigService implements TypeOrmOptionsFactory {
  constructor(private configService: ConfigService) {}

  createTypeOrmOptions(): TypeOrmModuleOptions {    
    return {
      type: 'mysql', 
      host: this.configService.get<string>('DB_MAIN_HOST'), 
      port: parseInt(this.configService.get<string>('DB_MAIN_PORT') ?? '3306'),
      username: this.configService.get<string>('DB_MAIN_USER'), 
      password: this.configService.get<string>('DB_MAIN_PASSWORD'), 
      database: this.configService.get<string>('DB_MAIN_SCHEMA'), 
      entities: entities,
      retryAttempts: 1,
      extra: {
        waitForConnections: true,
        connectionLimit: 10,
        maxIdle: 0, // max idle connections, the default value is the same as `connectionLimit`
        idleTimeout: 6000, // idle connections timeout, in milliseconds, the default value 60000
        queueLimit: 0
      },
      //autoLoadEntities: true,
      synchronize: false,
      logging:
        this.configService.get('DEBUG_DB') === 'true'
          ? 'all'
          : ['error', 'warn', 'info', 'log'],
      maxQueryExecutionTime: 1000 // ms
    };
  }
}
