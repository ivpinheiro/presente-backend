import { BadRequestException, Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import * as bcrypt from 'bcrypt';
import { PrismaService } from '../prisma/prisma.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UserService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createUserDto: CreateUserDto): Promise<User> {
    const data: Prisma.UserCreateInput = {
      ...createUserDto,
      password: await bcrypt.hash(createUserDto.password, 10),
    };

    try {
      const createdUser = await this.prisma.user.create({ data });
      return {
        ...createdUser,
        password: undefined,
      };
    } catch (error) {
      if (error.message.includes('Unique constraint failed on the fields')) {
        throw new BadRequestException('Unable to create account');
      }
    }
  }

  async updateName(
    user: CreateUserDto,
    updateUserDto: UpdateUserDto,
  ): Promise<User> {
    const data: Prisma.UserCreateInput = {
      ...user,
    };
    try {
      const updatedUser = await this.prisma.user.update({
        where: {
          email: data.email,
        },
        data: {
          name: updateUserDto.name,
        },
      });
      return {
        ...updatedUser,
      };
    } catch (error) {
      if (error.message.includes('Unique constraint failed on the fields')) {
        throw new BadRequestException('Unable to update name profile');
      }
    }
  }

  async updatePassword(
    user: CreateUserDto,
    updateUserDto: UpdateUserDto,
  ): Promise<User> {
    const data: Prisma.UserCreateInput = {
      ...user,
    };
    try {
      const updatedUser = await this.prisma.user.update({
        where: {
          email: data.email,
        },
        data: {
          password: await bcrypt.hash(updateUserDto.password, 10),
        },
      });
      return {
        ...updatedUser,
      };
    } catch (error) {
      if (error.message.includes('Unique constraint failed on the fields')) {
        throw new BadRequestException('Unable to update password profile');
      }
    }
  }

  async getUser(user: CreateUserDto): Promise<User> {
    const userEmail = user.email;
    if (userEmail) {
      try {
        const user = await this.prisma.user.findUnique({
          where: {
            email: userEmail,
          },
        });
        return user;
      } catch (error) {}
    }
    return;
  }

  findByEmail(email: string) {
    return this.prisma.user.findUnique({ where: { email } });
  }
}
