import { ApiProperty } from "@nestjs/swagger";

export class CreateUserDto {

  @ApiProperty({ example: "useremail@mail.example", description: "User email" })
  readonly email: string;

  @ApiProperty({ example: "userpass", description: "User password" })
  readonly password: string;
}