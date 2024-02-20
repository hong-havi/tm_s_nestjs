import { Module } from '@nestjs/common';
import { ConfigModule as NestConfigModule } from '@nestjs/config';
import configuration from './_config/config';
import { ConfigModule } from './_config/config.module';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { RepositoryModule } from './repository/repository.module';
import { CommonModule } from './_common/common.module';

@Module({
  imports: [
    NestConfigModule.forRoot({
      isGlobal: true,
      load : [configuration]
    }),
    ConfigModule,
    UserModule,
    RepositoryModule,
    CommonModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
