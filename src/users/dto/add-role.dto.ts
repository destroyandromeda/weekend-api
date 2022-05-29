import { ApiProperty } from "@nestjs/swagger";
import { IsNumber, IsString } from "class-validator";

export class AddRoleDto {
  @ApiProperty({ example: "ADMIN", description: "role name" })
  @IsString({message: 'should by string'})
  readonly value: string;

  @ApiProperty({ example: "1", description: "user id" })
  @IsNumber({}, {message: "should by number"})
  readonly userId: number;
}