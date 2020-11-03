import { IsNotEmpty, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { MASSAGE } from '../user.constant';

export class UserDto {
  @ApiProperty({ description: '用户名' })
  @IsNotEmpty({message: MASSAGE.PARAM_NULL})
  @IsString({message: MASSAGE.PARAM_TYPE_ERROR})
  username: string;

  @ApiProperty({ description: '密码' })
  @IsNotEmpty({message: MASSAGE.PARAM_NULL})
  @IsString({message: MASSAGE.PARAM_TYPE_ERROR})
  password: string;

  @ApiProperty({description: '信息'})
  info: {
    name?: string,
    sex?: number,
    age?: number,
    email?: string,
    phone?: number,
    nick?: string
  };
}