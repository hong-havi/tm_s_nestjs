import { Index } from "typeorm";

interface ErrorCode {
	errcode : string;
	appcode : string;
	cate : string;
	code : string;
	message : string;
};

export const ERROR_CODE : {
	[Index: string] : ErrorCode
} = {
	// Common
	'10010001' : {
		errcode : '10010001',
		appcode : '10',
		cate : '01',
		code : '0001',
		message : 'Disconnect',
    },
	'10010002' : {
		errcode : '10010002',
		appcode : '10',
		cate : '01',
		code : '0002',
		message : 'ErrorCode not defined',
	},

	'10020003' : {
		errcode : '10020003',
		appcode : '10',
		cate : '02',
		code : '0003',
		message : '회원정보가 없습니다.',
	},
};