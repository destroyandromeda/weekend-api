import { ApiProperty } from "@nestjs/swagger";

export class BanUserDto {
  @ApiProperty({ example: "1", description: "user id" })
  readonly userId: number;
  @ApiProperty({ example: "random ban reason", description: "reason for ban user" })
  readonly banReason: string;
}