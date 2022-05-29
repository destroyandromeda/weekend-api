import { ApiProperty } from "@nestjs/swagger";
import { IsNumber, IsString } from "class-validator";

export class BanUserDto {
  @ApiProperty({ example: "1", description: "user id" })
  @IsNumber({}, { message: "should by number" })
  readonly userId: number;

  @ApiProperty({ example: "random ban reason", description: "reason for ban user" })
  @IsString({ message: "should by string" })
  readonly banReason: string;
}