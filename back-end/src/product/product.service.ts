import { Injectable } from '@nestjs/common';
import { PrismaService } from '../database/prisma.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';

@Injectable()
export class ProductService {
  constructor(private prisma: PrismaService) {}

  async create(data: CreateProductDto) {
    return this.prisma.produtos.create({ data });
  }

  async findAll() {
    return this.prisma.produtos.findMany();
  }

  async findOne(id: string) {
    return this.prisma.produtos.findUnique({ where: { id } });
  }

  async update(id: string, data: UpdateProductDto) {
    return this.prisma.produtos.update({ where: { id }, data });
  }

  async remove(id: string) {
    return this.prisma.produtos.delete({ where: { id } });
  }
}
