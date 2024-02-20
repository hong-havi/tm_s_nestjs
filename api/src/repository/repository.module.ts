import { Module } from '@nestjs/common';
import { MemberService } from './member/member.service';

@Module({
  providers: [MemberService],
  exports: [MemberService]
})
export class RepositoryModule {}
