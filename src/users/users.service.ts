import { PrismaService } from './../prisma/prisma.service';
import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { hash } from 'bcrypt';

@Injectable()
export class UsersService {
  constructor(private readonly prisma: PrismaService) {}

  private readonly _include = {
    posts: {
      select: {
        title: true,
        content: true,
      },
    },
  };

  create(data: CreateUserDto) {
    return this.prisma.user.create({
      data,
      include: this._include,
    });
  }

  findAll() {
    return this.prisma.user.findMany({
      include: this._include,
      orderBy: [
        {
          name: 'asc',
        },
      ],
    });
  }

  findOne(id: number) {
    return this.prisma.user.findUnique({
      where: { id },
      include: this._include,
    });
  }

  update(id: number, data: UpdateUserDto) {
    return this.prisma.user.update({
      where: { id },
      data,
      include: this._include,
    });
  }

  remove(id: number) {
    return this.prisma.user.delete({
      where: { id },
    });
  }
}
