import { Injectable } from '@nestjs/common';
import { InjectDataSource } from '@nestjs/typeorm';
import { DataSource, SelectQueryBuilder} from 'typeorm';

import { Member } from '@src/_entities/study/member.entity';

@Injectable()
export class MemberService {
    constructor(
        @InjectDataSource() private dataSource: DataSource
    ){}

    builderMember(): SelectQueryBuilder<Member>
    {
        return this.dataSource.manager
            .createQueryBuilder(Member, 'member')
            .select([
                'UserNo as UserNo',
                'Id as Id',
                'Passwd as Passwd',
                'Name as Name',
                'RegiDatetime as RegiDatetime',
                'LoginDatetime as LoginDatetime',
            ]);
    }

    async selectMemberById(
        id : string
    ): Promise<Member | undefined>
    {
        return this.builderMember()
            .where('id = :id',{id:id})
            .getRawOne();

    }    

    async selectMemberByUserNo(
        userno : number
    ): Promise<Member | undefined>
    {
        return this.builderMember()
            .where('UserNo = :userno',{userno:userno})
            .getRawOne();

    }
}
