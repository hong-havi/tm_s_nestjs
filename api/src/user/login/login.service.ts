import { Injectable } from '@nestjs/common';

import { MemberService as RepoMemberService } from '@src/repository/member/member.service'
import { Member as MemberEntity } from '@src/_entities/study/member.entity'

@Injectable()
export class LoginService {
    constructor(
        private readonly repoMemberService: RepoMemberService,
    ){}

    async start(
        id : string,
        passwd : string
    ): Promise<MemberEntity | false>
    {
        const user : MemberEntity | undefined = await this.repoMemberService.selectMemberById(id);
        if( !user ){
            return false;
        }

        if( user.Passwd == passwd ){
            delete user.Passwd;
            return user;
        }

        return false;
    }
}
