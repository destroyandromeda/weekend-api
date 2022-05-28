import { ApiProperty } from "@nestjs/swagger";

export class CreateRoleDto {
  @ApiProperty({ example: "USER", description: "role name" })
  readonly value: string;
  @ApiProperty({ example: "this is role 'USER'", description: "role description" })
  readonly description: string;
}