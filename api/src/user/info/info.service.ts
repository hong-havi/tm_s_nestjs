import { Injectable } from '@nestjs/common';

import { MemberService as RepoMemberService } from '@src/repository/member/member.service'
import { Member as MemberEntity } from '@src/_entities/study/member.entity'

@Injectable()
export class InfoService {
    constructor(
        private readonly repoMemberService: RepoMemberService,
    ){}

    async start(
        userno: number
    ): Promise<MemberEntity | false>
    {
        const user : MemberEntity | undefined = await this.repoMemberService.selectMemberByUserNo(userno);
        if( !user ){
            return false;
        }

        return user;
    }

}
