import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Auth } from 'src/common/decorators';
import { CreateUserDto, EditUserDto } from './dtos';
import { UserService } from './user.service';

@ApiTags('User')
@Controller('user')
export class UserController {



constructor(
    private readonly userService: UserService
    ){}

@Get()
async getMany(){

   const data =  await this.userService.getMany();

   return({data: data})
}  

@Auth()
@Get(':id')
async getOne(@Param('id') id : number){

      const data = await this.userService.getOne(id);

      return({data: data})
}
@Auth()
@Post()
async createOne(
    @Body() dto: CreateUserDto
){

    const data = await this.userService.createOne(dto)
    return {message: 'User created successfully', data}
}
@Auth()
@Put(':id')
async editOne(
     @Param('id') id: number,
     @Body() dto: EditUserDto
 ){

     const data = await this.userService.editOne(id,dto)

     return {message : 'User edit successfully', data}
 }
 @Auth()
@Delete(':id')
async deleteOne(
    @Param('id') id: number)
{
    
const data = await this.userService.deleteOne(id);

return {message: 'User deleted successfully'}

}




}
