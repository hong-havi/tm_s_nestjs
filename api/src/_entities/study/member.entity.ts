import { Entity, Column, PrimaryColumn } from "typeorm";
import { ApiProperty } from "@nestjs/swagger";

@Entity({
    name: "member",
    database: "study",
    schema : "study"
})
export class Member{
    @PrimaryColumn()
    @ApiProperty({
        description: "회원키",
    })
    UserNo : number;

    @Column()
    @ApiProperty({
        description: "아이디",
    })
    Id : string;
    
    @Column()
    Passwd : string;

    @Column()
    @ApiProperty({
        description: "이름",
    })
    Name : string;

    @Column()
    @ApiProperty({
        description: "가입일시",
    })
    RegiDatetime : string;

    @Column()
    @ApiProperty({
        description: "마지막 로그인일시",
    })
    LoginDatetime : string;
    
}
