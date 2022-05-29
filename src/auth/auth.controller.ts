import { Body, Controller, Post } from "@nestjs/common";
import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import { CreateUserDto } from "../users/dto/create-user.dto";
import { AuthService } from "./auth.service";
import { User } from "../users/users.model";

@ApiTags("Auth")
@Controller("auth")
export class AuthController {

  constructor(private authService: AuthService) {
  }

  @ApiOperation({ summary: "login user" })
  @ApiResponse({ status: 200 })
  @Post("/login")
  login(@Body() userDto: CreateUserDto) {
    return this.authService.login(userDto);
  }

  @ApiOperation({ summary: "registration user" })
  @ApiResponse({ status: 200, type: User })
  @Post("/registration")
  registration(@Body() userDto: CreateUserDto) {
    return this.authService.registration(userDto);
  }

}
