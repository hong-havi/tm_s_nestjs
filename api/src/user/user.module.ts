import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { LoginService } from './login/login.service';
import { RepositoryModule } from '@src/repository/repository.module' 
import { CommonModule } from '@src/_common/common.module';
import { InfoService } from './info/info.service';

@Module({
  controllers: [UserController],
  imports: [
    RepositoryModule,
    CommonModule
  ],
  providers: [
    LoginService,
    InfoService
  ]
})
export class UserModule {}
