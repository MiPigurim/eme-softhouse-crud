import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { PrismaService } from './database/prisma.service';
import { ProductModule } from './product/product.module';

@Module({
  imports: [ProductModule],
  controllers: [AppController],
  providers: [PrismaService],
})
export class AppModule {}
