
import { ApiProperty } from "@nestjs/swagger"
import { IsNumber } from "class-validator";

export class ResponseDto {
    @ApiProperty({
        description: "처리 결과 상태값 [ 1:정상, 0: 오류 ]",
        required: true
    })
    @IsNumber()
    status: number;
    
    @ApiProperty({
        description: "오류시 오류 관련 코드"
    })
    error_code: string;
    
    @ApiProperty({
        description: "오류시 오류 관련 코드에 따른 메세지"
    })
    error_msg: string;
    
    @ApiProperty({
        description: "성공시 관련 데이터 반환시 사용"
    })
    data: string | object | undefined;
}