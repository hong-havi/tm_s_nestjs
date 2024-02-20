import { ApiProperty, OmitType } from '@nestjs/swagger'
import { ResponseDto } from '@src/_common/response/response.dto';
import { IsNotEmpty, IsString } from 'class-validator';
import { Member as MemberEntity } from '@src/_entities/study/member.entity'

export class LoginReqDto {    
    @ApiProperty({ description: '아이디', required: true, default: 'id'})
    @IsNotEmpty()
    @IsString()
    id : string; 
    
    @ApiProperty({ description: '비밀번호', required: true, default: 'passwd'})
    @IsNotEmpty()
    @IsString()
    passwd : string; 
}

export class LoginResDto extends OmitType(ResponseDto, ['data'] as const){
    @ApiProperty({
        description: '유저정보',
        type: MemberEntity
    })
    data : MemberEntity;
}