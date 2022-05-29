import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsString, Length } from "class-validator";

export class CreateUserDto {

  @ApiProperty({ example: "useremail@mail.example", description: "User email" })
  @IsString({ message: "should by string" })
  @IsEmail({}, { message: "invalide email" })
  readonly email: string;

  @ApiProperty({ example: "userpass", description: "User password" })
  @IsString({ message: "should by string" })
  @Length(4, 16, { message: "min length 4, max length 16" })
  readonly password: string;
}