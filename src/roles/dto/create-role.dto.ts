import { ApiProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";

export class CreateRoleDto {
  @ApiProperty({ example: "USER", description: "role name" })
  @IsString({ message: "should by string" })
  readonly value: string;
  @ApiProperty({ example: "this is role 'USER'", description: "role description" })
  @IsString({ message: "should by string" })
  readonly description: string;
}