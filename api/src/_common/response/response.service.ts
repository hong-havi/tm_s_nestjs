import { Injectable } from '@nestjs/common';
import { ERROR_CODE } from './error-code';

@Injectable()
export class ResponseService {

    returnError(
        httpCode: number,  
        errorCode: string,
        errorValues: object | undefined = undefined
    ){
        let errorData : {
            errcode : string,
            appcode : string,
            cate : string,
            code : string,
            message : string,
        };

        if( ERROR_CODE[errorCode as keyof typeof ERROR_CODE] ){
            errorData = ERROR_CODE[errorCode as keyof typeof ERROR_CODE];
        }else{
            errorData = ERROR_CODE['10010002'];
        }

        if( errorValues ){
            Object.keys(errorValues).forEach((key)=>{
                errorData.message = errorData.message.replace( `:::${key}:::` , errorValues[key as keyof typeof errorValues] )
            })
        }
        
        return {
            status: 0,
            error_code: errorData.errcode,
            error_msg: errorData.message,
            data: {}
        }
        /*
        return new HttpException({
            status: 0,
            error_code: errorData.errcode,
            error_msg: errorData.message,
            data: {}
        }, httpCode);    
        */
    }

    returnSuccess (
        status: number,
        data: any
    ){ 
        return {
            status: 1,
            error_code: '',
            error_msg: '',
            data: data
        }
    }

}
