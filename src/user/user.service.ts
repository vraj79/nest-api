import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class UserService {
  constructor(@InjectRepository(User) private readonly userRepository:Repository<User>){
  }
  create(createUserDto: CreateUserDto) {
    let user:User=new User();
    user.fullName=createUserDto.fullName;
    user.country=createUserDto.country;
    user.age=createUserDto.age;

    return this.userRepository.save(user);
  }
  
  findAll():Promise<User[]> {
    return this.userRepository.find();
  }

  findOne(id:number) {
    return this.userRepository.findOne({where:{id}});
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    let user:User=new User();
    user.id=id;
    user.fullName=updateUserDto.fullName;
    user.country=updateUserDto.country;
    user.age=updateUserDto.age;

    return this.userRepository.save(user)
  }

  remove(id: number) {
    return this.userRepository.delete(id);
  }
}
