import { Body, Controller, Post, Get, Param } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiParam, ApiResponse, } from '@nestjs/swagger';
import { ResponseService } from '@src/_common/response/response.service';

import { LoginService } from './login/login.service';
import { LoginReqDto, LoginResDto } from './login/login.dto';

import { InfoService } from './info/info.service';


@Controller('user')
@ApiTags("#1. 유저")
export class UserController {
    constructor(
        private readonly responseService: ResponseService,
        private readonly loginService: LoginService,
        private readonly infoService: InfoService
    ){}

    @ApiOperation({
        summary: '유저 로그인 API',
        description: '유저 로그인 API지롱'
    })
    @Post('login')
    @ApiResponse({
        status: 200,
        type: LoginResDto
    })
    async postLogin(
        @Body() loginData: LoginReqDto
    ){
        const result = await this.loginService.start(
            loginData.id,
            loginData.passwd
        );

        if( result === false ){
            return this.responseService.returnError(
                500,
                '10020003'
            )
        }

        return this.responseService.returnSuccess(
            200, 
            result
        )
    }

    @ApiOperation({
        summary: '유저 정보 API',
        description: '유저 정보 API지롱'
    })
    @Get(':userno')
    @ApiParam({
      name:'userno',
      required: true
    })
    @ApiResponse({
        status: 200,
        type: LoginResDto
    })
    async getUser(
        @Param() param : { userno: number }
    ){

        const result = await this.infoService.start(param.userno);
        
        if( result === false ){
            return this.responseService.returnError(
                500,
                '10020003'
            )
        }

        return this.responseService.returnSuccess(
            200, 
            result
        )
    }
}
