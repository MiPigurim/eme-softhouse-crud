import { Controller, Get } from '@nestjs/common';
import { PrismaService } from './database/prisma.service';
//import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(
    private prisma: PrismaService,
  ) {}

  @Get()
  async get() {
    const produto = await this.prisma.produtos.create({
      data: {
        nome: 'Produto 1',
        preco: 10.5,
        estoque: 10,
      },
    });

    return {
      produto
    }
  }
  }

