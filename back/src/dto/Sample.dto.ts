import { IsEmail, IsNotEmpty } from 'class-validator';

export class SampleDto {
  @IsEmail()
  email: string;

  @IsNotEmpty()
  password: string;
}
