import { Body, Controller, Get, Post, Req, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { Auth, User } from 'src/common/decorators';
import { User as UserEntity } from 'src/user/entities';
import { AuthService } from './auth.service';
import { LoginDto } from './dtos/login.dto';
import { JwtAuthGuard, LocalAuthGuard } from './guards';

@ApiTags('Auth routes')
@Controller('auth')
export class AuthController {
    constructor(
        private readonly authService: AuthService){}

@UseGuards(LocalAuthGuard)
@Post('login')
async login(
   @Body() loginDto: LoginDto,
    @User() user : UserEntity
){

    const data = await this.authService.login(user)
return {
    message:'Login successfull ',data
}

}
@Auth()
@Get('profile')
profile(
    @User() user :UserEntity
) {
    return ({
        message: 'datos',user
    })
}





}
